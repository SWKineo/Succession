import React, { Component } from 'react'
import Attempt from './Types/article'
import './ArticleDevelopment.css'

let article = {
    title: "Integrals",
    testedSubmissions: [
        new Attempt(),
        new Attempt(),
        new Attempt()
    ],
    untestedSubmissions: [
        new Attempt(),
        new Attempt(),
        new Attempt()
    ]
}

export class ArticleOverview extends Component {

    render() {
        return (
            <div>
                <p>{`${article.title} \u2014 Development`}</p>
                {article.testedSubmissions.length > 0 ? (
                    <div>
                        <div className="TestedSubmissions">
                            <p className="TestedSubmissions" >Best Tested Submissions, by </p>
                            <button>Quality</button>
                        </div>
                        <div>
                            {article.testedSubmissions.map((submission, index, _) => (
                                <button>{submission.title}</button>
                            ))}
                        </div>
                    </div>
                ) : null}
                {article.untestedSubmissions.length > 0 ? (
                    <div className="UntestedSubmissions">
                        <p className="UntestedSubmissions">Best Untested Submissions, by </p>
                        <button>Quality</button>
                        <div>
                            {article.untestedSubmissions.map((submission, index, _) => (
                                <button>{submission.title}</button>
                            ))}
                        </div>
                    </div>
                ) : null}
            </div>
        )
    }
}

export default ArticleOverview
