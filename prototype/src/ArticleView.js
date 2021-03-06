import React, { Component } from 'react'
// import queryString from 'query-string'
import Article from './Types/article'
import MetaphorFormalism from './Components/MetaphorFormalism'
import './ArticleView.css'

export default class ArticleView extends Component {
    constructor(props) {
        super(props)

        if (props.version) {
            this.submission = this.props.article.getSubmission(props.version)
        } else {
            this.submission = this.props.article.getSubmission(this.props.match.params.version)
        }

        console.log(`props.version: ${props.version}`)
        console.log(this.submission)

        this.state = {
            fmMapping: [],
            expanded: []
        }
    }

    render() {
        // Check if version needs to be updated
        if (this.props.version !== undefined && this.props.version !== this.submission.version) {
            this.submission = this.props.article.getSubmission(this.props.version)
        }

        return (
            <div className="Article">
                <p className="ArticleTitle">
                    {this.submission.content.title}
                </p>
                <MetaphorFormalism
                    formalism={this.submission.content.formalism}
                    metaphor={this.submission.content.metaphor}
                    mapping={this.submission.content.metaphorFormalismMapping}
                />
                {this.renderBody(this.submission.content.body)}
            </div>
        )
    }

    /**
     * Renders an article body (an array of { text, expansion, id }'s )
     */
    renderBody(body) {
        let paragraphs = [ [ "" ] ]
        let currentParagraph = paragraphs[0]

        // console.log(paragraphs)
        // console.log(body)
        for (let i = 0; i < body.length; i++) {
            // console.log(currentParagraph)
            let chunk = body[i];

            if (chunk.expansion === Article.PARAGRAPH) {
                // console.log("PARAGRAPH")
                // Start new paragraph
                currentParagraph = [ "" ]
                paragraphs.push(currentParagraph)
                
            } else if (chunk.expansion === undefined) {
                // console.log(currentParagraph)
                // Add text to current paragraph
                currentParagraph[currentParagraph.length - 1] += chunk.text
                // console.log(currentParagraph)
            } else {
                // Add link to paragraph: need to know if it's expanded
                if (this.state.expanded.includes(chunk.id)) {
                    // Expanded: append link to close and expanded content
                    currentParagraph.push({
                        text: chunk.text,
                        onClick: _ => {
                            this.setState({
                                expanded: this.state.expanded.filter(
                                    expandedIndex => expandedIndex !== chunk.id
                                )
                            })
                        }
                    })
                    // Add the expanded content
                    paragraphs.push({ expansion: chunk.expansion })
                    // Start a fresh paragraph
                    currentParagraph = [ "" ]
                    paragraphs.push(currentParagraph)
                } else {
                    // Otherwise, append it to the paragraph as a link
                    currentParagraph.push({
                        text: chunk.text,
                        onClick: _ => {
                            this.setState({
                                expanded: this.state.expanded.concat(chunk.id)
                            })
                        }
                    })
                    currentParagraph.push("")
                }
            }
        }

        // // console.log(paragraphs)

        return (
            <div key={Date.now() % 10000}>
                {paragraphs.map((paragraph, index, _) => paragraph.expansion === undefined ?
                    <p className="NormalText" key={index}>
                        {
                            paragraph.map((piece, i, _) => {
                                if (typeof piece === "string") {
                                    return piece
                                } else {
                                    return (
                                        <button
                                            key={i}
                                            className="ExpandableText"
                                            onClick={piece.onClick}
                                        >
                                            {piece.text}
                                        </button>
                                    )
                                }
                            })
                        }
                    </p> :
                    <div className="Expansion">
                        {this.renderBody(paragraph.expansion)}
                    </div>
                )}
            </div>
        )
    }

}

// {this.submission.body.map((chunk, index, _) => {
//     let expanded = queryString.parse(this.props.location.search)

//     if (chunk.expansion === undefined) {
//         return <p key={index}>{chunk.text}</p>
//     }

//     if (expanded.index && (expanded === index || expanded.index.includes(index))) {
//         return (
//             <div>
//                 <p>{chunk.expansion.text}</p>
//             </div>
//         )
//     }
    
//     // console.log(queryString.stringify({index}))
//     // console.log(Object.keys(expanded).length === 0)
//     let search = ""
//     if (Object.keys(expanded).length === 0) {
//         search = `?${queryString.stringify({ index })}`
//     } else {
//         search = `${this.props.location.search}&${queryString.stringify(index)}`
//     }
    
//     return (
//         <Link
//             key={index}
//             to={`/page/${this.props.match.params.article}/${this.props.match.params.version}${search}`}
//         >
//             {chunk.text}
//         </Link>
//     )
// })}