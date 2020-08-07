import React, { Component } from 'react'
import './DevelopmentOverview.css'



export class DevelopmentOverview extends Component {
    render() {
        return (
            <div className="DevelopmentOverview">
                <TopSubmissions history={this.props.history} article={this.props.article} />
                <SubmissionTable history={this.props.history} article={this.props.article} />
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
                <p>{`${this.props.article.name} \u2014 Development`}</p>
                {this.props.article.testedSubmissions.length > 0 ? (
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
                            {this.props.article.testedSubmissions.map((version, index, _) => (
                                <button 
                                    key={index}
                                    className="TopSubmission"
                                    onClick={() => {this.props.history.push(`/page/${this.props.article.id}/version/${version}/work`)}}
                                >
                                    {this.props.article.getSubmission(version).name}
                                </button>
                            ))}
                        </div>
                    </div>
                ) : null}
                {this.props.article.untestedSubmissions.length > 0 ? (
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
                            {this.props.article.untestedSubmissions
                                .sort(this.state.untestedSortBy === TopSubmissions.POTENTIAL ?
                                    (vA, vB) => this.props.article.getSubmission(vA).potential > this.props.article.getSubmission(vB).potential ? 1 : -1 :
                                    (vA, vB) => this.props.article.getSubmission(vA).quality > this.props.article.getSubmission(vB).quality ? 1 : -1
                                )
                                .map((version, index, _) => (
                                    <button 
                                        key={index}
                                        className="TopSubmission"
                                        onClick={() => {this.props.history.push(`/page/${this.props.article.id}/version/${version}/work`)}}
                                    >
                                        {this.props.article.getSubmission(version).name}</button>
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
                    {this.props.article.originalSubmissions
                        .sort((versionA, versionB) => this.props.article.getSubmission(versionA).name.localeCompare(this.props.article.getSubmission(versionB).name))
                        .map((version, index, _) => (
                            <button 
                                key={index}
                                className="TableSubmission"
                                onClick={() => {this.props.history.push(`/page/${this.props.article.id}/version/${version}/work`)}}
                            >
                                <div className="TableSubmissionItem">
                                    <p className="TableSubmissionItem">{this.props.article.getSubmission(version).name}</p>
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
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default DevelopmentOverview
