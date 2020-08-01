import React, { Component } from 'react'
// import queryString from 'query-string'
import Attempt, { AttemptContent } from './Types/article'
import MetaphorFormalism from './Components/MetaphorFormalism'
import './Article.css'

let sampleArticle = new Attempt()

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fmMapping: [],
            expanded: []
        }
    }

    render() {
        return (
            <div>
                <p className="title">{sampleArticle.title}</p>
                <MetaphorFormalism
                    formalism={sampleArticle.formalism}
                    metaphor={sampleArticle.metaphor}
                    mapping={sampleArticle.metaphorFormalismMapping}
                />
                {this.renderBody(sampleArticle.body)}
            </div>
        )
    }

    /**
     * Renders an article body (an array of ArticleContents)
     */
    renderBody(body) {
        let paragraphs = [ [ "" ] ]
        let currentParagraph = paragraphs[0]

        console.log(paragraphs)
        console.log(body)
        for (let i = 0; i < body.length; i++) {
            console.log(currentParagraph)
            let chunk = body[i];

            if (chunk.expansion === AttemptContent.PARAGRAPH) {
                console.log("PARAGRAPH")
                // Start new paragraph
                currentParagraph = [ "" ]
                paragraphs.push(currentParagraph)
                
            } else if (chunk.expansion === undefined) {
                console.log(currentParagraph)
                // Add text to current paragraph
                currentParagraph[currentParagraph.length - 1] += chunk.text
                console.log(currentParagraph)
            } else {
                // Add link to paragraph: need to know if it's expanded
                if (this.state.expanded.includes(i)) {
                    // Expanded: append link to close and expanded content
                    currentParagraph.push({
                        text: chunk.text,
                        onClick: _ => {
                            this.setState({
                                expanded: this.state.expanded.filter(
                                    expandedIndex => expandedIndex !== i
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
                                expanded: this.state.expanded.concat(i)
                            })
                        }
                    })
                    currentParagraph.push("")
                }
            }
        }

        // console.log(paragraphs)

        return (
            <div key={Date.now() % 10000}>
                {paragraphs.map((paragraph, index, _) => paragraph.expansion === undefined ?
                    <p key={index}>
                        {
                            paragraph.map((piece, i, _) => {
                                if (typeof piece === "string") {
                                    return piece
                                } else {
                                    return (
                                        <button
                                            key={i}
                                            className="link"
                                            onClick={piece.onClick}
                                        >
                                            {piece.text}
                                        </button>
                                    )
                                }
                            })
                        }
                    </p> :
                    this.renderBody(paragraph.expansion)
                )}
            </div>
        )
    }

}

// {sampleArticle.body.map((chunk, index, _) => {
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
    
//     console.log(queryString.stringify({index}))
//     console.log(Object.keys(expanded).length === 0)
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