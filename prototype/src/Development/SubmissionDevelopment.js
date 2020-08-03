import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import Article from '../Article'
import Submission from '../Types/article.js'
import './SubmissionDevelopment.css'



let critiques = new Array(15)
critiques.fill({
    id: 1,
    title: "Critique",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

export class SubmissionDevelopment extends Component {
    render() {
        return (
            <div className="SubmissionDevelopment">
                <div className="ArticleHolder">
                    <Article submission={new Submission(4, 7)} />
                </div>
                <div className="CritiqueList">
                    {critiques.map((critique, _, __) =>
                        <Critique
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

function Critique(props) {
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
