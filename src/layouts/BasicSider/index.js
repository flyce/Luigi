import React from 'react';
import {
    Link
} from "react-router-dom";
import { Layout, Menu, Icon } from 'antd';

import env from "../../config/env";
import './style.css';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class BasicSider extends React.PureComponent {
    render() {
        const { collapsed, onCollapse } = this.props;
        return (
            <div>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={collapsed}
                    breakpoint="lg"
                    width={256}
                    className="sider"
                    onCollapse={onCollapse}
                    style={{ minHeight: '100vh' }}
                >
                    <div className="logo" key="logo">
                        <Link to="/">
                            <img src={env.logoPath} alt="logo" />
                            <h1>{env.name}</h1>
                        </Link>
                    </div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Link to={'/'}>
                                <Icon type="pie-chart" />
                                <span>Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to={'/about'}>
                                <Icon type="pie-chart" />
                                <span>About</span>
                            </Link>
                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2">分析页</Menu.Item>
                            <Menu.Item key="3">监控页</Menu.Item>
                            <Menu.Item key="4">工作台</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
            </div>
        );
    }
}

export default BasicSider;
