import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import Submission from '../Types/article'
import './DevelopmentOverview.css'

let article = {
    id: 5,
    title: "Integrals",
    oldSubmissions: [
        new Submission(1, 6),
        new Submission(1, 5),
        new Submission(1, 4),
        new Submission(1, 3),
        new Submission(1, 2),
        new Submission(1, 9),
        new Submission(1, 15),
        new Submission(1, 8),
        new Submission(1, 71),
        new Submission(1, 22),
        new Submission(1, 99),
        new Submission(1, 16),
        new Submission(1, 12),
        new Submission(1, 90)
    ],
    submissions: [
        {
            version: 1,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ 2, 3 ]
                },
                {
                    id: 2,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ 4 ]
                },
                {
                    id: 3,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                },
                {
                    id: 4,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                },
            ]
        },
        {
            version: 2,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                }
            ]
        },
        {
            version: 3,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                }
            ]
        },
        {
            version: 4,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ 5 ]
                }
            ]
        },
        {
            version: 5,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                }
            ]
        },
        {
            version: 6,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ 7 ]
                }
            ]
        },
        {
            version: 7,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ 8 ]
                }
            ]
        },
        {
            version: 8,
            critiques: [
                {
                    id: 1,
                    title: "Just one thing",
                    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    improvements: [ ]
                }
            ]
        }
    ],
    testedSubmissions: [ 1, 3, 5, 9 ],
    untestedSubmissions: [ 0, 2, 4, 6, 7, 8, 10, 11, 12, 13 ],
    originalSubmissions: [ 1, 6 ]
}

export class DevelopmentOverview extends Component {
    render() {
        return (
            <div className="DevelopmentOverview">
                <TopSubmissions history={this.props.history} article={article} />
                <SubmissionTable history={this.props.history} article={article} />
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
                                <button 
                                key={index}
                                className="TopSubmission"
                                onClick={() => {this.props.history.push(`/page/${submission.article}/version/${submission.version}/work`)}}
                            >
                                {submission.title}</button>
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
                            {article.untestedSubmissions
                                .sort(this.state.untestedSortBy === TopSubmissions.POTENTIAL ?
                                    (sA, sB) => sA.potential > sB.potential ? 1 : -1 :
                                    (sA, sB) => sA.quality > sB.quality ? 1 : -1
                                )
                                .map((submission, index, _) => (
                                    <button 
                                        key={index}
                                        className="TopSubmission"
                                        onClick={() => {this.props.history.push(`/page/${submission.article}/version/${submission.version}/work`)}}
                                    >
                                        {submission.title}</button>
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
                            <button 
                                key={index}
                                className="TableSubmission"
                                onClick={() => {this.props.history.push(`/page/${submission.article}/version/${submission.version}/work`)}}
                            >
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{submission.title}</p>
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
