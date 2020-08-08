import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import ArticleView from '../ArticleView'
import Article, { Critique } from '../Types/article.js'
import './SubmissionDevelopment.css'



let critiques = new Array(15)
critiques.fill({
    id: 1,
    title: "Critique",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

export class SubmissionDevelopment extends Component {
    constructor(props) {
        super(props)

        this.state = {
            submission: this.props.article.getSubmission(this.props.match.params.version),
            critiqueBox: false,
            critiqueComment: ""
        }
    }

    render() {
        

        return (
            <div className="SubmissionDevelopment">
                {
                    this.state.critiqueBox ? (
                        <div className="ArticleAndComment">
                            <div className="SubmissionArticleHolderCritiquing">
                                <ArticleView article={this.props.article} version={this.props.match.params.version} />
                                <button 
                                    className="AddCritiqueButton"
                                    onClick={ _ => { this.setState({
                                        critiqueBox: !this.state.critiqueBox 
                                    })}}>
                                    Critique
                                </button>
                            </div>
                            <div className="CritiqueBox">
                                <input
                                    className="CritiqueTitle"
                                    value={this.state.critiqueTitle}
                                    onChange={ event => { this.setState({
                                        critiqueTitle: event.target.value
                                    })}}
                                />
                                <textarea
                                    className="CritiqueComment"
                                    value={this.state.critiqueComment}
                                    onChange={ event => { this.setState({
                                        critiqueComment: event.target.value
                                    })}}
                                />
                                <button
                                    className="CritiqueCommentSubmit"
                                    onClick={ _ => {
                                        if (this.state.critiqueTitle != "" && this.state.critiqueComment != "") {
                                            this.setState({
                                                critiqueTitle: "",
                                                critiqueComment: "",
                                                submission: this.state.submission.addCritique(
                                                    new Critique(
                                                        null,
                                                        this.state.critiqueTitle,
                                                        this.state.critiqueComment,
                                                        []
                                                    )
                                                )
                                            })
                                        }
                                     }}>
                                    Submit
                                </button>
                            </div>
                        </div>
                    ) : <div className="ArticleAndComment">
                            <div className="SubmissionArticleHolderNormal">
                                <ArticleView article={this.props.article} version={this.props.match.params.version} />
                                <button 
                                    className="AddCritiqueButton"
                                    onClick={ _ => { this.setState({
                                        critiqueBox: !this.state.critiqueBox 
                                     })}}>
                                    Critique
                                </button>
                            </div>
                        </div>
                }
                <div className="CritiqueList">
                    {this.state.submission.critiques.map((critique, _, __) =>
                        <CritiqueListItem
                            articleId={this.props.match.params.article}
                            submissionId={this.props.match.params.version}
                            critiqueId={critique.id}
                            critiqueTitle={critique.title}
                            critiqueComment={critique.comment}
                        />
                    )}
                </div>
            </div>
        )
    }
}

function CritiqueListItem(props) {
    const history = useHistory()

    // Abbreviate comment
    let lastSpace = -1;
    if (props.critiqueComment.length > 150) {
        let nextSpace = props.critiqueComment.indexOf(" ", lastSpace + 1)
        while (nextSpace !== -1) {
            if (nextSpace <= 150)
                lastSpace = nextSpace
            else
                break

            nextSpace = props.critiqueComment.indexOf(" ", lastSpace + 1)
        }
    }
    return (
        <div 
            className="CritiqueHolder"
            onClick={() => {
                history.push(`/page/${props.articleId}/version/${props.submissionId}/critique/${props.critiqueId}`)
            }}
        >
            <p className="CritiqueTitle">{props.critiqueTitle}</p>
            <p className="CritiqueComment">
                {lastSpace === -1 ? props.critiqueComment : `${props.critiqueComment.substr(0, lastSpace)}...`}
            </p>
        </div>
    )
}

export default SubmissionDevelopment
