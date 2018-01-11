import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import Use from './subNavSection/use';
import Debug from './subNavSection/debug';

const {Content, Sider } = Layout;

class NavOthersSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: '应用领域'
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
                    <Breadcrumb.Item>其他</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['应用领域']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="应用领域">应用领域</Menu.Item>
                            <Menu.Item key="调试">调试</Menu.Item>
                            <Menu.Item key="Mobile" disabled={true}>Mobile</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case '应用领域':
                                    return <Use/>;
                                case '调试':
                                    return <Debug/>;
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

export default NavOthersSection;