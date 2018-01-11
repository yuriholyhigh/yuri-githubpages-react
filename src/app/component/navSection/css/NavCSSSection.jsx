import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import Basic from './subNavSection/basic';
import UIFramework from './subNavSection/UI-Framwork';
import CSSPrefix from './subNavSection/CSS-Prefix';

const {Content, Sider } = Layout;

class NavCSSSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: '基础'
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
                    <Breadcrumb.Item>CSS</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['基础']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="基础">基础</Menu.Item>
                            <Menu.Item key="UI框架" disabled={true}>UI框架</Menu.Item>
                            <Menu.Item key="CSS预处理">CSS预处理</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case '基础':
                                    return <Basic/>;
                                case 'UI框架':
                                    return <UIFramework/>;
                                case 'CSS预处理':
                                    return <CSSPrefix/>;
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

export default NavCSSSection;