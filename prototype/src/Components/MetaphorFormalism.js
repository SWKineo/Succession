import React, { PureComponent } from 'react'
import './MetaphorFormalism.css'

export class MetaphorFormalism extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            highlighted: []
        }
    }

    render() {

        

        return (
            <div>
                <p className="Formalism">
                    <span>{this.props.formalism.substr(0, this.state.highlighted[0])}</span>
                    <span style={{ background: "#000DDD" }}>{this.props.formalism.substr(this.state.highlighted[0], this.state.highlighted[1])}</span>
                    <span>{this.props.formalism.substr(this.state.highlighted[1])}</span>
                </p>
                <p className="Metaphor">
                    {this.props.metaphor.map((phrase, index, _) =>
                        <span
                            key={index}
                            onMouseEnter={event => {
                                this.setState({
                                    highlighted: this.state.highlighted.concat(phrase.formalismRange)
                                })
                                // console.log(this.state.highlighted)
                            }}
                            onMouseLeave={event => {
                                this.setState({
                                    highlighted: this.state.highlighted.filter(range => range !== phrase.formalismRange)
                                })
                                // console.log(this.state.highlighted)                   
                            }}
                            onClick={event => {
                                if (this.state.highlighted.includes(phrase.formalismRange)) {
                                    this.setState({
                                        highlighted: this.state.highlighted.filter(range => range !== phrase.formalismRange)
                                    })
                                } else {
                                    this.setState({
                                        highlighted: this.state.highlighted.concat(phrase.formalismRange)
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

export default MetaphorFormalism
