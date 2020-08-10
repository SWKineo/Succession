import React, { PureComponent } from 'react'
import './MetaphorFormalism.css'

export class MetaphorFormalism extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            highlighted: [],
            hoverHighlighted: []
        }
    }

    render() {
        console.log(this.state.highlighted)

        return (
            <div>
                    {this.state.highlighted.length > 0 ?
                        <p className="Formalism">
                            <span>{this.props.formalism.substring(0, this.state.highlighted[0][0])}</span>
                            <span style={{ "background-color": "#44DDDF" }}>{this.props.formalism.substring(this.state.highlighted[0][0], this.state.highlighted[0][1])}</span>
                            <span>{this.props.formalism.substring(this.state.highlighted[0][1])}</span>
                        </p>
                    : this.state.hoverHighlighted.length > 0 ?
                        <p className="Formalism">
                            <span>{this.props.formalism.substring(0, this.state.hoverHighlighted[0][0])}</span>
                            <span style={{ "background-color": "#44DDDF" }}>{this.props.formalism.substring(this.state.hoverHighlighted[0][0], this.state.hoverHighlighted[0][1])}</span>
                            <span>{this.props.formalism.substring(this.state.hoverHighlighted[0][1])}</span>
                        </p>
                    :
                        <p className="Formalism">
                            {this.props.formalism}
                        </p>}
                <p className="Metaphor">
                    {this.props.metaphor.map((phrase, index, _) =>
                        <span
                            key={index}
                            onMouseEnter={phrase.formalismRange !== undefined ?
                                event => {
                                    this.setState({
                                        hoverHighlighted: this.state.highlighted.concat([ phrase.formalismRange ])
                                    })
                                    // console.log(this.state.highlighted)
                                } : null}
                            onMouseLeave={phrase.formalismRange !== undefined ?
                                event => {
                                
                                this.setState({
                                    hoverHighlighted: this.state.highlighted.filter(range => range !== phrase.formalismRange)
                                })
                                // console.log(this.state.highlighted)                   
                            } : null}
                            onClick={event => {
                                if (this.state.highlighted.includes(phrase.formalismRange)) {
                                    this.setState({
                                        highlighted: this.state.highlighted.filter(range => range !== phrase.formalismRange)
                                    })
                                } else if (this.state.highlighted.length === 0) {
                                    this.state.highlighted.push(phrase.formalismRange)
                                    this.setState({
                                        highlighted: this.state.highlighted
                                    })
                                    // console.log(this.state.highlighted)
                                }
                            }}
                        >{phrase.text}</span>
                    )}
                </p>
            </div>
        )
    }
}

// onClick={event => {
//     if (this.state.highlighted.includes(phrase.formalismRange)) {
//         this.setState({
//             highlighted: this.state.highlighted.filter(range => range !== phrase.formalismRange)
//         })
//     } else {
//         this.state.highlighted.push(phrase.formalismRange)
//         this.setState({
//             highlighted: this.state.highlighted
//         })
//         // console.log(this.state.highlighted)
//     }
// }}

export default MetaphorFormalism
