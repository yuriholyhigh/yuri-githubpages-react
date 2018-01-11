import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import JSP from './subNavSection/JSP';
import TemplateFramework from './subNavSection/template-framework';

const {Content, Sider } = Layout;

class NavHtmlSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: 'JSP'
        };
        this.changeSubSection = this.changeSubSection.bind(this);
    }

    changeSubSection({key}) {
        this.setState({
            subSection: key
        });
    }

    render() {
        return (
            <div className="summary-section">
                <Breadcrumb style={{ margin: '16px 0' }}>
                    <Breadcrumb.Item>HTML</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['JSP']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="JSP">JSP</Menu.Item>
                            <Menu.Item key="FreeMarker" disabled={true}>FreeMarker</Menu.Item>
                            <Menu.Item key="模板库">模板库</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case 'JSP':
                                    return <JSP/>;
                                case '模板库':
                                    return <TemplateFramework/>;
                                default:
                                    return <div>no such component.</div>
                            }
                        })()}
                    </Content>
                </Layout>
            </div>
        )
    }
}

export default NavHtmlSection;