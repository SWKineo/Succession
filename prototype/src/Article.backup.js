import React, { Component } from 'react'
import queryString from 'query-string'
import Attempt, { AttemptContent } from './Types/article'
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

    /**
     * Renders an article body (an array of ArticleContents)
     */
    renderBody(body) {
        let paragraphs = []
        let currentParagraph = ""

        for (let i = 0; i < body.length; i++) {
            let chunk = body[i];

            if (chunk.expansion === AttemptContent.PARAGRAPH) {
                // Start new paragraph
                paragraphs.push(<p>{currentParagraph}</p>)
                currentParagraph = ""
            } else if (chunk.expansion === undefined) {
                // Add text to current paragraph
                currentParagraph += chunk.text
            } else {
                // Add link to paragraph: need to know if it's expanded
                if (this.state.expanded.includes(i)) {
                    currentParagraph += 
                        <button
                            onClick={_ => {
                                this.setState({
                                    expanded: this.state.expanded.concat(i)
                                })
                            }}
                        >{chunk.text}</button>
                } else {
                    // Otherwise, append it to the paragraph as a link
                    currentParagraph +=
                        <button
                            onClick={_ => {
                                this.setState({
                                    expanded: this.state.expanded.filter(
                                        expandedIndex => expandedIndex != i
                                    )
                                })
                            }}
                        >{chunk.text}</button>
                }
            }
        }

        return (
            <div>
                {body.map((chunk, index, _) => {
                    if (chunk.expansion === undefined) {
                        return (
                            <p key={index}>{chunk.text}</p>
                        )
                    } else if (this.state.expanded.includes(index)) {
                        return (
                            <div>
                                <button
                                    className="link"
                                    key={index}
                                    onClick={() => {
                                        this.setState({
                                            expanded: this.state.expanded.filter(
                                                expandedIndex => expandedIndex != index
                                            )
                                        })
                                    }}
                                >
                                    {chunk.text}
                                </button>
                                {this.renderBody(chunk.expansion)}
                            </div>
                        )
                    } else {
                        return (
                            <button
                                className="link"
                                key={index}
                                onClick={() => {
                                    this.setState({
                                        expanded: this.state.expanded.concat(index)
                                    })
                                }}
                            >
                                {chunk.text}
                            </button>
                        )
                    }
                    
                })}
            </div>
        )
    }

    render() {
        return (
            <div>
                <p>{sampleArticle.title}</p>
                <p>{sampleArticle.formalism}</p>
                <p>{sampleArticle.metaphor}</p>
                {this.renderBody(sampleArticle.body)}
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