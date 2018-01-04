import React from 'react';
import {Collapse} from 'antd';
import CodeBlock from './common/code-block';

import markdown from '../content/history/history.md';



const FrontHistoryComponent = ()=> {

    let md = require('markdown-it')();
    let result = md.render(markdown);



    const ReactMarkdown = require('react-markdown');

    const text =
        `hello world....`;

    const Panel = Collapse.Panel;

    function callback(key) {
        console.log(key);
    }

    return (
        <div className="markdown-content">
            <ReactMarkdown
                source={markdown} renderers={{code: CodeBlock}}/>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1"><p>{text}</p></Panel>
                <Panel header="This is panel header 2" key="2"><p>{result}</p></Panel>
            </Collapse>
        </div>
    );
};

export default FrontHistoryComponent;