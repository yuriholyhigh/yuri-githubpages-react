import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import Jsonp from './subNavSection/jsonp';
import Cors from './subNavSection/CORS';

const {Content, Sider } = Layout;

class NavCrossSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: 'JSONP'
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
                    <Breadcrumb.Item>跨域及安全</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['JSONP']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="JSONP">JSONP</Menu.Item>
                            <Menu.Item key="CORS">CORS</Menu.Item>
                            <Menu.Item key="XSS" disabled={true}>XSS</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case 'JSONP':
                                    return <Jsonp/>;
                                case 'CORS':
                                    return <Cors/>;
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

export default NavCrossSection;