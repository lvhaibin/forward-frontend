import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import './style';
moment.locale('zh-cn');

import { Redirect, Route, Link, Switch } from 'react-router-dom'
import { Layout as AntdLayout, Menu, Spin } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    UsergroupAddOutlined
} from '@ant-design/icons';

const { Content, Footer, Sider } = AntdLayout;

const Home = React.lazy(() => import('./../Home'));
const UserInfo = React.lazy(() => import('../User/UserInfo'));

export default function Dashboard() {

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }

    return (
        <ConfigProvider locale={zhCN}>
            <AntdLayout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<DesktopOutlined />}>
                            <Link to="/dashboard">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UsergroupAddOutlined />}>
                            <Link to="/user">用户信息</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <AntdLayout>
                    <Content>
                        <div className="content">
                            <React.Suspense fallback={<Spin />}>
                                <Switch>
                                    <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
                                    <Route exact path="/dashboard" render={() => <Home name="this is Home" />} />
                                    <Route exact path="/user" component={UserInfo} />
                                </Switch>
                            </React.Suspense>
                        </div>
                    </Content>
                </AntdLayout>
            </AntdLayout>
        </ConfigProvider>
    );
}