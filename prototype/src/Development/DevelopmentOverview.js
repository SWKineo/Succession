import React, { Component } from 'react'
import Submission from '../Types/article'
import './DevelopmentOverview.css'

let article = {
    title: "Integrals",
    testedSubmissions: [
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission()
    ],
    untestedSubmissions: [
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission(),
        new Submission()
    ]
}

export class DevelopmentOverview extends Component {
    render() {
        return (
            <div className="DevelopmentOverview">
                <TopSubmissions article={article} />
                <SubmissionTable article={article} />
            </div>
        )
    }
}

class TopSubmissions extends Component {
    constructor(props) {
        super(props)

        this.state = {
            testedSortBy: TopSubmissions.POTENTIAL,
            untestedSortBy: TopSubmissions.QUALITY
        }
    }

    // Constants
    static QUALITY = 201
    static POTENTIAL = 202

    render() {
        return (
            <div className="TopSubmissions">
                <p>{`${article.title} \u2014 Development`}</p>
                {article.testedSubmissions.length > 0 ? (
                    <div>
                        <div className="TestedSubmissions">
                            <p className="TestedSubmissions" >Best Tested Submissions, by </p>
                            <button
                                onClick={() => {
                                    this.setState({
                                        testedSortBy: this.state.testedSortBy === TopSubmissions.POTENTIAL ?
                                                          TopSubmissions.QUALITY :
                                                          TopSubmissions.POTENTIAL
                                    })
                                }}
                            >
                                {this.state.testedSortBy === TopSubmissions.POTENTIAL ? "Potential" : "Quality"}
                            </button>
                        </div>
                        <div className="TopSubmissionList">
                            {article.testedSubmissions.map((submission, index, _) => (
                                <button>{submission.title}</button>
                            ))}
                        </div>
                    </div>
                ) : null}
                {article.untestedSubmissions.length > 0 ? (
                    <div className="UntestedSubmissions">
                        <p className="UntestedSubmissions">Best Untested Submissions, by </p>
                        <button
                            onClick={() => {
                                this.setState({
                                    untestedSortBy: this.state.untestedSortBy === TopSubmissions.POTENTIAL ?
                                                        TopSubmissions.QUALITY :
                                                        TopSubmissions.POTENTIAL
                                })
                            }}
                        >
                            {this.state.untestedSortBy === TopSubmissions.POTENTIAL ? "Potential" : "Quality"}
                        </button>
                        <div className="TopSubmissionList">
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

class SubmissionTable extends Component {
    render() {
        return(
            <div className="SubmissionTableHolder">
                <p>Original Submissions</p>
                <div className="SubmissionTable">
                    <div className="TableHeader">
                        <div className="TableHeaderItem"><p className="TableHeaderItem">Title</p></div>
                        <div className="TableHeaderItem"><p className="TableHeaderItem">Highest Quality</p></div>
                        <div className="TableHeaderItem"><p className="TableHeaderItem">Highest Potential</p></div>
                        <div className="TableHeaderItem"><p className="TableHeaderItem">Generation Depth</p></div>
                        <div className="TableHeaderItem"><p className="TableHeaderItem">Total Submissions</p></div>
                    </div>
                    {this.props.article.testedSubmissions
                        .concat(this.props.article.untestedSubmissions)
                        .sort((submissionA, submissionB) => submissionA.title.localeCompare(submissionB.title))
                        .map((submission, index, _) =>
                            <button className="TableSubmission">
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{`Attempt ${index + 1}`}</p>
                                </div>
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{index + 1}</p>
                                </div>
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{index + 1}</p>
                                </div>
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{index + 1}</p>
                                </div>
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{index + 1}</p>
                                </div>
                            </button>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default DevelopmentOverview
