import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import Package from './subNavSection/package';
import Build from './subNavSection/build';

const {Content, Sider } = Layout;

class NavProjectSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: '包管理'
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
                    <Breadcrumb.Item>工程化与自动化</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['包管理']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="包管理">包管理</Menu.Item>
                            <Menu.Item key="构建工具" disabled={true}>构建工具</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case '包管理':
                                    return <Package/>;
                                case '构建工具':
                                    return <Build/>;
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

export default NavProjectSection;