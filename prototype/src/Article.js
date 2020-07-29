import React, { Component } from 'react'
import ArticleAttempt from './Types/article.js';

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
                    return <p key={index}>{chunk.text}</p>
                })}
            </div>
        )
    }

}