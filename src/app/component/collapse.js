import React from 'react';
import {Collapse} from 'antd';

const CollapseComponent = ()=> {
    const text =
        `A ddog is a type of domesticated animal.
        Known for its loyalty and faithfulness,
        it can be found as a welcome guest in many households across the world.`;

    const Panel = Collapse.Panel;

    function callback(key) {
        console.log(key);
    }

    return (
        <div>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="This is panel header 1" key="1"><p>{text}</p></Panel>
                <Panel header="This is panel header 2" key="2"><p>{text}</p></Panel>
                <Panel header="This is panel header 3" key="3" disabled><p>{text}</p></Panel>
            </Collapse>
        </div>
    );
};

export default CollapseComponent;