import React, { Component } from 'react'
import Article from '../Article'
import './SubmissionDevelopment.css'



let critiques = new Array(15)
critiques.fill({
    title: "Critique",
    comment: "This should say something"
})

export class SubmissionDevelopment extends Component {
    render() {
        return (
            <div className="SubmissionDevelopment">
                <div className="ArticleHolder">
                    <Article />
                </div>
                <div className="CritiqueList">
                    {critiques.map((critique, _, __) =>
                        <Critique 
                            title={critique.title}
                            comment={critique.comment}
                        />
                    )}
                </div>
            </div>
        )
    }
}

function Critique(props) {
    return (
        <div className="CritiqueHolder">
            <p className="CritiqueTitle">{props.title}</p>
            <p className="CriqueComment">{props.comment}</p>
        </div>
    )
}

export default SubmissionDevelopment
