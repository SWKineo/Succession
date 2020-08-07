import React, { Component } from 'react'
import Article from '../Article'
import './SubmissionCritique.css'



export class SubmissionCritique extends Component {
    constructor(props) {
        super(props)

        this.submission = this.props.article.getSubmission(this.props.match.params.version)
        this.critique = this.props.article.getCritique(this.submission, this.props.match.params.critique)

        this.state = {
            currentImprovement: this.critique.improvements[0]
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
                    <div className="ArticleHolder">
                        <div>
                            <Article 
                                article={this.props.article}
                                match={this.props.match}
                            />
                        </div>
                        <div>
                            <Article 
                                article={this.props.article}
                                version={this.state.currentImprovement}
                                match={this.props.match}
                            />
                        </div>
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
