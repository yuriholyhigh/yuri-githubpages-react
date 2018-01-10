import React, {Component} from 'react';
import {Layout, Breadcrumb, Menu} from 'antd';
import OverviewComponent from './subNavSection/OverView';
import FrontHistoryComponent from './subNavSection/front-end-history';

const {Content, Sider } = Layout;

class NavSummarySection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subSection: 'Overview'
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
                    <Breadcrumb.Item>Summary</Breadcrumb.Item>
                    <Breadcrumb.Item>{this.state.subSection}</Breadcrumb.Item>
                </Breadcrumb>
                <Layout style={{ padding: '24px 0', background: '#fff' }}>
                    <Sider style={{ background: '#fff' }} >
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['Overview']}
                            style={{ height: '100%' }}
                            onSelect={this.changeSubSection}>
                            <Menu.Item key="Overview">Overview</Menu.Item>
                            <Menu.Item key="History">History</Menu.Item>
                        </Menu>
                    </Sider>

                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        {(()=> {
                            switch (this.state.subSection) {
                                case 'Overview':
                                    return <OverviewComponent/>;
                                case 'History':
                                    return <FrontHistoryComponent/>;
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

export default NavSummarySection;