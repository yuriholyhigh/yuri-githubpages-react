import React, { Component } from 'react';
import {Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import NavSummarySection from './component/navSection/summary/NavSummarySection';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navSection: "nav-summary-section"
        };

        this.oneNavChange = this.oneNavChange.bind(this);
    }

    oneNavChange({key}) {
        this.setState({
            ...this.state,
            navSection: key
        });
        console.log('one nav change:',key)
    }

    render() {
        return (
            <Layout>
              <Header className="header">
                <div className="logo" />
                <Menu
                    onSelect={this.oneNavChange}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['nav-summary-section']}
                    style={{ lineHeight: '64px' }}>
                  <Menu.Item key="nav-summary-section">Summary</Menu.Item>
                  <Menu.Item key="nav-html-section">HTML</Menu.Item>
                  <Menu.Item key="nav-css-section">CSS</Menu.Item>
                  <Menu.Item key="nav-js-section">Javascript</Menu.Item>
                  <Menu.Item key="nav-project-section">工程化与自动化</Menu.Item>
                  <Menu.Item key="nav-crossDomain-section">跨域及安全</Menu.Item>
                  <Menu.Item key="nav-others-section">其他</Menu.Item>
                </Menu>
              </Header>

              <Content style={{ padding: '0 50px' }}>
                  {
                      (() => {
                          switch (this.state.navSection) {
                              case 'nav-summary-section':
                                  return <NavSummarySection/>;
                              case 'nav-html-section':
                                  return 1;
                              default:
                                  return "default";
                          }
                      })()
                  }

                  {
                      false && <div>
                          <Breadcrumb style={{ margin: '16px 0' }}>
                              <Breadcrumb.Item>Home</Breadcrumb.Item>
                              <Breadcrumb.Item>List</Breadcrumb.Item>
                              <Breadcrumb.Item>App</Breadcrumb.Item>
                          </Breadcrumb>
                          <Layout style={{ padding: '24px 0', background: '#fff' }}>
                              <Sider style={{ background: '#fff' }} >
                                  <Menu
                                      mode="inline"
                                      defaultSelectedKeys={['3']}
                                      defaultOpenKeys={['sub1']}
                                      style={{ height: '100%' }}
                                      onOpenChange={(openedSubArray)=>{console.log(openedSubArray)}}>

                                      <SubMenu key="sub1" onTitleClick={(a)=>{console.log('onTitleClick')}} title={<span><Icon type="user" />subnav 1</span>}>
                                          <Menu.Item key="1" disabled={true}>option1</Menu.Item>
                                          <Menu.Item key="2">option2</Menu.Item>
                                          <Menu.Item key="3">option3</Menu.Item>
                                          <Menu.Item key="4">option4</Menu.Item>
                                      </SubMenu>
                                      <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                                          <Menu.Item key="5">option5</Menu.Item>
                                          <Menu.Item key="6">option6</Menu.Item>
                                          <Menu.Item key="7">option7</Menu.Item>
                                          <Menu.Item key="8">option8</Menu.Item>
                                      </SubMenu>
                                      <SubMenu key="sub3" disabled={true} title={<span><Icon type="notification" />subnav 3</span>}>
                                          <Menu.Item key="9">option9</Menu.Item>
                                          <Menu.Item key="10">option10</Menu.Item>
                                          <Menu.Item key="11">option11</Menu.Item>
                                          <Menu.Item key="12">option12</Menu.Item>
                                      </SubMenu>

                                  </Menu>

                              </Sider>

                              <Content style={{ padding: '0 24px', minHeight: 280 }}>
                                  <hr/>
                              </Content>
                          </Layout>
                      </div>
                  }

              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2016 Created by Ant UED</Footer>
            </Layout>
        );
    }
}

export default App;