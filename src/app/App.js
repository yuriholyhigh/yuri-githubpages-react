import React, { Component } from 'react';
import { DatePicker, Button, Layout, Menu, Breadcrumb, Icon } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import NavOneCom from './component/oneLevelComponent/navOneCom';
import CollapseComponent from './component/collapse';
import FrontHistoryComponent from './component/front-end-history';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;






class LayoutCom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneLevelContent: "one-level-nav-1"
        };

        this.oneNavChange = this.oneNavChange.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
    }

    oneNavChange({key}) {
        this.setState({
            ...this.state,
            oneLevelContent: key
        });
        console.log('one nav change:',key)
    }

    handleOptionClick(a) {
        console.log('option on select ',a);
        //this.setState({...this.state});
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
                    defaultSelectedKeys={['one-level-nav-1']}
                    style={{ lineHeight: '64px' }}>
                  <Menu.Item key="one-level-nav-1">nav one</Menu.Item>
                  <Menu.Item key="one-level-nav-2">nav two</Menu.Item>
                  <Menu.Item key="one-level-nav-3">nav three</Menu.Item>
                </Menu>
              </Header>

              <Content style={{ padding: '0 50px' }}>

                  {this.state.oneLevelContent === 'one-level-nav-1' ? <NavOneCom/> :
                      <div>
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
                                      onOpenChange={(openedSubArray)=>{console.log(openedSubArray)}}
                                      onSelect={this.handleOptionClick}>

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
                                  <FrontHistoryComponent />
                                  <hr/>
                                  {this.state.count}
                                  <DatePicker />
                                  <Button type="primary">Primary</Button>
                                  <CollapseComponent />
                              </Content>
                          </Layout>
                      </div>
                  }

              </Content>
              <Footer style={{ textAlign: 'center' }}>
                Ant Design ©2016 Created by Ant UED
              </Footer>
            </Layout>
        );
    }
}

const App = ()=> (
    <div className="App">
        <LayoutCom/>
    </div>
);

export default App;