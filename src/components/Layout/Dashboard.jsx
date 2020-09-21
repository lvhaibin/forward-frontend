import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style';
moment.locale('zh-cn');
import { Redirect, Route, Link, Switch, useHistory } from 'react-router-dom'
import { Layout as AntdLayout, Menu, Spin, Avatar, Dropdown } from 'antd';
import {
    UsergroupAddOutlined,
    UserOutlined,
    LoginOutlined
} from '@ant-design/icons';

import { getToken, clearCookies } from '@utils/cookieManage';

const { Content, Sider, Header } = AntdLayout;

const UserInfo = React.lazy(() => import('@component/User/UserInfo'));
const GenerateLink = React.lazy(() => import('@component/GenerateLink/GenerateLink'))

export default function Dashboard() {
    const [collapsed, setCollapsed] = useState(false);
    const history = useHistory();

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }

    const logout = ({ key }) => {
        if (key === 'logout' ) {
            clearCookies()
            history.push('/login');
        }
    }

    const menu = (
        <Menu onClick={logout}>
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
                            <Menu.Item key="dashboard" icon={<UsergroupAddOutlined />}>
                                <Link to="/">dashboard</Link>
                            </Menu.Item>
                            <Menu.Item key="generate" icon={<UsergroupAddOutlined />}>
                                <Link to="/generate">展会信息</Link>
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
                                        <Route exact path="/generate" component={GenerateLink} />
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