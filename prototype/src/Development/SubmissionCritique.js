import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import Article from '../Article'
import Submission from '../Types/article'
import './SubmissionCritique.css'

let submission = new Submission(10, 22)

let critique = { 
    id: 2,
    title: "Fix Stuff",
    comment: "Make sure the stuff is fixed. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
}

let improvements = new Array(15)

export class SubmissionCritique extends Component {
    constructor(props) {
        super(props)

        improvements = []
        for (let i = 0; i < 15; i++) {
            improvements.push(new Submission(this.props.match.params.article, i))
        }

        this.state = {
            currentImprovement: improvements[0]
        }
    }
    render() {
        return (
            <div className="SubmissionCritique">
                <div className="CritiqueHeader">
                    <p className="CritiqueHeaderTitle">{critique.title}</p>
                    <p className="CritiqueHeaderComment">{critique.comment}</p>
                </div>
                <div className="SubmissionImprovements">
                    <div className="ArticleHolder">
                        <div>
                            <Article 
                                submission={submission}
                            />
                        </div>
                        <div>
                            <Article 
                                submission={this.state.currentImprovement}
                            />
                        </div>
                    </div>
                    <div className="ImprovementList">
                        {improvements.map((improvement, _, __) =>
                            <Improvement
                                key={improvement.version}
                                articleId={submission.article}
                                versionId={submission.version}
                                critiqueId={critique.id}
                                improvementTitle={improvement.title}
                                improvementId={improvement.version}
                                selectImprovement={
                                    () => {
                                        if (improvement.version !== this.state.currentImprovement.version) {
                                            this.setState({ currentImprovement: improvement })
                                        } else {
                                            this.props.history.push(`/page/${submission.article}/version/${improvement.version}/work`)
                                        }
                                    }
                                }
                                selectedImprovement={this.state.currentImprovement.version}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

function Improvement(props) {
    const history = useHistory()
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
