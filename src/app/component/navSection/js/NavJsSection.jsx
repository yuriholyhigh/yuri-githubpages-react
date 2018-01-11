import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import Basic from './subNavSection/basic';
import Framework from './subNavSection/framework';
import Prefix from './subNavSection/prefix';

const {Content, Sider } = Layout;

class NavJsSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: 'JS基础'
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
                    <Breadcrumb.Item>Javescript</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['JS基础']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="JS基础">JS基础</Menu.Item>
                            <Menu.Item key="库/框架" disabled={true}>库/框架</Menu.Item>
                            <Menu.Item key="JS预处理">JS预处理</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case 'JS基础':
                                    return <Basic/>;
                                case '库/框架':
                                    return <Framework/>;
                                case 'JS预处理':
                                    return <Prefix/>;
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

export default NavJsSection;