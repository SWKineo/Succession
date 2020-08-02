import React, { Component } from 'react'
import { useHistory } from 'react-router-dom'
import Article from '../Article'
import './SubmissionCritique.css'



let submissions = new Array(15)
submissions.fill({
    id: 1,
    title: "Submission",
    comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
})

export class SubmissionCritique extends Component {
    render() {
        return (
            <div className="SubmissionCritique">
                <div className="ArticleHolder">
                    <Article />
                </div>
                <div className="SubmissionList">
                    {submissions.map((submission, _, __) =>
                        <Submission
                            articleId={this.props.match.params.article}
                            submissionId={submission.id}
                            submissionTitle={submission.title}
                            submissionComment={submission.comment}
                        />
                    )}
                </div>
            </div>
        )
    }
}

function Submission(props) {
    const history = useHistory()

    // Abbreviate comment
    let lastSpace = -1;
    if (props.submissionComment.length > 150) {
        let nextSpace = props.submissionComment.indexOf(" ", lastSpace + 1)
        while (nextSpace !== -1) {
            if (nextSpace <= 150)
                lastSpace = nextSpace
            else
                break

            nextSpace = props.submissionComment.indexOf(" ", lastSpace + 1)
        }
    }
    return (
        <div 
            className="SubmissionHolder"
            onClick={() => {
                history.push(`/page/${props.articleId}/submission/${props.submissionId}/work`)
            }}
        >
            <p className="SubmissionTitle">{props.submissionTitle}</p>
            <p className="SubmissionComment">
                {lastSpace === -1 ? props.submissionComment : `${props.submissionComment.substr(0, lastSpace)}...`}
            </p>
        </div>
    )
}

export default SubmissionCritique
