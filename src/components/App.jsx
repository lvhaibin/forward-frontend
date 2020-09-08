import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import '../style';
moment.locale('zh-cn');

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout as AntdLayout, Menu, Spin } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
} from '@ant-design/icons';

const { Content, Footer, Sider } = AntdLayout;

const DateDemo = React.lazy(() => import('./DateDemo'));
const Home = React.lazy(() => import('./Home'));

export function App() {

    const [collapsed, setCollapsed] = useState(false);
    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    }

    return (
        <ConfigProvider locale={zhCN}>
            <Router>
                <AntdLayout style={{ minHeight: '100vh' }}>
                    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<DesktopOutlined />}>
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<PieChartOutlined />}>
                                <Link to="/picker">picker</Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <AntdLayout>
                        <Content>
                            <div className="content">
                                <React.Suspense fallback={<Spin />}>
                                    <Route exact path="/" render={() => <Home name="this is Home" />} />
                                    <Route path="/picker" exact component={DateDemo} />
                                </React.Suspense>
                            </div>
                        </Content>
                    </AntdLayout>
                </AntdLayout>
            </Router >
        </ConfigProvider>
    );
}