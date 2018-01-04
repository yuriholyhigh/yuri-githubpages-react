/**
 * Created by zhangshaoliang on 04/01/2018.
 */
import React, {Component} from 'react';
const hljs = window.hljs;

class CodeBlock extends Component {
    constructor(props) {
        super(props);
        this.setRef = this.setRef.bind(this);
    }

    setRef(el) {
        this.codeEl = el
    }

    componentDidMount() {
        this.highlightCode()
    }

    componentDidUpdate() {
        this.highlightCode()
    }

    highlightCode() {
        hljs.highlightBlock(this.codeEl)
    }

    render() {
        return (
            <pre>
                <code ref={this.setRef} className={this.props.language}>
                    {this.props.value}
                </code>
            </pre>
        )
    }
}

export default CodeBlock;

