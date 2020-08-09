import React, { Component } from 'react'
import ArticleView from '../ArticleView'
import './SubmissionCritique.css'
import { Submission, Content } from '../Types/article'



export class SubmissionCritique extends Component {
    constructor(props) {
        super(props)

        this.submission = this.props.article.getSubmission(this.props.match.params.version)
        this.critique = this.submission.getCritique(this.props.match.params.critique)

        let copiedText = ""

        for (let i = 0; i < this.submission.content.body.length; i++) {
            copiedText += this.submission.content.body[i].text
        }

        this.state = {
            currentImprovement: this.critique.improvements[0],
            improvementBox: true,
            improvementTitle: this.submission.content.title,
            improvementBody: copiedText
        }
    }

    render() {
        return (
            <div className="SubmissionCritique">
                <div className="CritiqueAndArticles">
                    <div className="CritiqueHeader">
                        <p className="CritiqueHeaderTitle">{this.critique.title}</p>
                        <p className="CritiqueHeaderComment">{this.critique.comment}</p>
                    </div>
                    <div className="CritiqueArticleHolder">
                        <ArticleView 
                            article={this.props.article}
                            match={this.props.match}
                        />
                        { 
                            this.state.improvementBox ? (
                                <div className="ImprovementContents">
                                    <input
                                        className="ImprovementTitle"
                                        value={this.state.improvementTitle}
                                        onChange={ event => {
                                            this.setState({
                                                improvementTitle: event.target.value
                                            })
                                        }}
                                    />
                                    <textarea 
                                        className="ImprovementBody"
                                        value={this.state.improvementBody}
                                        onChange={ event => {
                                            this.setState({
                                                improvementBody: event.target.value
                                            })
                                        }}
                                    />
                                </div>
                            ) : <ArticleView 
                                    article={this.props.article}
                                    version={this.state.currentImprovement}
                                    match={this.props.match}
                                />
                         }
                         {
                             this.state.improvementBox ? (
                                <button
                                    className="AddImprovement"
                                    onClick={ _ => {
                                        let improvedVersion = new Submission(
                                            null,
                                            "New and improved",
                                            new Content(
                                                this.state.improvementTitle,
                                                this.state.submission.content.formalism,
                                                this.state.submission.content.metaphor,
                                                this.state.submission.content.metaphorFormalismMapping,
                                                [
                                                    { text: this.state.improvementBody }
                                                ],
                                                []
                                            ),
                                            [],
                                            -1,
                                            -1
                                        )

                                        this.setState({
                                            improvementBox: false,
                                            selectedImprovement: improvedVersion.version
                                        })

                                        // TODO: Add call to submit improvement
                                    }}>
                                    Submit
                                </button>
                             ) : <button
                                    className="AddImprovement"
                                    onClick={ _ => {
                                        this.setState({
                                            improvementBox: true
                                        })
                                    }}>
                                    Improve
                                </button>
                         }
                    </div>
                </div>
                <div className="ImprovementList">
                    {this.critique.improvements.map((improvementVersion, _, __) => {
                        let improvement = this.props.article.getSubmission(improvementVersion)
                        return (
                            <Improvement
                                key={improvementVersion}
                                articleId={this.props.article.id}
                                versionId={this.submission.version}
                                critiqueId={this.critique.id}
                                improvementTitle={improvement.name}
                                improvementId={improvementVersion}
                                selectImprovement={
                                    () => {
                                        console.log(`${improvementVersion} - ${this.state.currentImprovement}`)
                                        if (improvementVersion !== this.state.currentImprovement) {
                                            this.setState({ currentImprovement: improvementVersion })
                                        } else {
                                            this.props.history.push(`/page/${this.props.article.id}/version/${improvementVersion}/work`)
                                        }
                                    }
                                }
                                selectedImprovement={this.state.currentImprovement}
                            />
                        )
                    })}
                </div>
            </div>
        )
    }
}

function Improvement(props) {
    return (
        <div 
            className={props.selectedImprovement !== props.improvementId ? 
                       "ImprovementHolder" : "ImprovementHolderSelected"}
            onClick={props.selectImprovement}
        >
            <p className="ImprovementTitle">{props.improvementTitle}</p>
        </div>
    )
}

export default SubmissionCritique
