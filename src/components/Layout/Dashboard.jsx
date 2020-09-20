import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style';
moment.locale('zh-cn');

import { Redirect, Route, Link, Switch } from 'react-router-dom'
import { Layout as AntdLayout, Menu, Spin, Avatar, Dropdown } from 'antd';
import {
    UsergroupAddOutlined,
    UserOutlined,
    LoginOutlined
} from '@ant-design/icons';

const { Content, Sider, Header } = AntdLayout;

const UserInfo = React.lazy(() => import('../User/UserInfo'));

export default function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }

    const menu = (
        <Menu>
            <Menu.Item key="userInfo" icon={<UsergroupAddOutlined />}>
                <Link to="/user">用户信息</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<LoginOutlined />}>
                退出登陆
            </Menu.Item>
        </Menu>
      );

    return (
        <ConfigProvider locale={zhCN}>
            <AntdLayout>
                <Header className="header">
                    <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 15 }}>
                        <Dropdown overlay={menu} placement="bottomLeft" arrow>
                            <Avatar icon={<UserOutlined />} />
                        </Dropdown>
                    </div>
                </Header>
                <AntdLayout>
                    <Sider theme="light" collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<UsergroupAddOutlined />}>
                                <Link to="/">dashboard</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <AntdLayout>
                        <Content>
                            <div className="content">
                                <React.Suspense fallback={<Spin />}>
                                    <Switch>
                                        <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                                        <Route exact path="/dashboard" render={() => <div>dashboard</div>} />
                                        <Route exact path="/user" component={UserInfo} />
                                    </Switch>
                                </React.Suspense>
                            </div>
                        </Content>
                    </AntdLayout>
                </AntdLayout>
            </AntdLayout>
        </ConfigProvider>
    );
}