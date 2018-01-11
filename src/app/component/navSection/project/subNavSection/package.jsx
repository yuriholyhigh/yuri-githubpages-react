import React from 'react';
import CodeBlock from '../../../common/code-block';
import markdownFile from '../../../../content/JSP.md';

const Package = ()=> {
    const ReactMarkdown = require('react-markdown');

    return (
        <div className="markdown-content">
            <ReactMarkdown source={markdownFile} renderers={{code: CodeBlock}}/>
        </div>
    );
};

export default Package;