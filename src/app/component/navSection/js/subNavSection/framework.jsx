import React from 'react';
import {Collapse} from 'antd';
import CodeBlock from '../../../common/code-block';
import jsframework_basic from '../../../../content/js-framework-basic.md';
import jsframework_lib from '../../../../content/js-framework-lib.md';
import jsframework_module from '../../../../content/js-framework-module.md';
import jsframework_chart from '../../../../content/js-framework-chart.md';

const Framework = ()=> {
    const Panel = Collapse.Panel;
    const ReactMarkdown = require('react-markdown');

    return (
        <Collapse defaultActiveKey={['1']}>
            <Panel header="基础库" key="基础库" disabled>
                <div className="markdown-content">
                    <ReactMarkdown source={jsframework_basic} renderers={{code: CodeBlock}}/>
                </div>
            </Panel>
            <Panel header="框架" key="框架">
                <div className="markdown-content">
                    <ReactMarkdown source={jsframework_lib} renderers={{code: CodeBlock}}/>
                </div>
            </Panel>
            <Panel header="模块化" key="模块化">
                <div className="markdown-content">
                    <ReactMarkdown source={jsframework_module} renderers={{code: CodeBlock}}/>
                </div>
            </Panel>
            <Panel header="数据可视化" key="数据可视化">
                <div className="markdown-content">
                    <ReactMarkdown source={jsframework_chart} renderers={{code: CodeBlock}}/>
                </div>
            </Panel>
        </Collapse>
    );
};

export default Framework;