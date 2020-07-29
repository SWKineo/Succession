import React, { Component } from 'react'
import ArticleVersion from './Types/article.js'

let sampleArticle = new ArticleVersion()

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
                <p>{sampleArticle}</p>
            </div>
        )
    }
}
