import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import queryString from 'query-string'
import ArticleAttempt from './Types/article.js'

let sampleArticle = new ArticleAttempt()

export default class Article extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <p>{sampleArticle.title}</p>
                <p>{sampleArticle.formalism}</p>
                <p>{sampleArticle.metaphor}</p>
                {sampleArticle.body.map((chunk, index, _) => {
                    let expanded = queryString.parse(this.props.location.search)

                    if (chunk.expansion === undefined) {
                        return <p key={index}>{chunk.text}</p>
                    }

                    if (expanded.index && (expanded === index || expanded.index.includes(index))) {
                        return (
                            <div>
                                <p>{chunk.expansion}</p>
                            </div>
                        )
                    }
                    
                    console.log(queryString.stringify({index}))
                    console.log(Object.keys(expanded).length === 0)
                    let search = ""
                    if (Object.keys(expanded).length === 0) {
                        search = `?${queryString.stringify({ index })}`
                    } else {
                        search = `${this.props.location.search}&${queryString.stringify(index)}`
                    }
                    
                    return (
                        <Link
                            key={index}
                            to={`/page/${this.props.match.params.article}/${this.props.match.params.version}${search}`}
                        >
                            {chunk.text}
                        </Link>
                    )
                })}
            </div>
        )
    }

}