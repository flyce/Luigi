import React, { Component } from 'react';
import { Layout } from 'antd';

import BasicSider from "./BasicSider";
import BasicHeader from "./BasicHeader";
import BasicFooter from "./BasicFooter";
const { Content } = Layout;

class BasicLayout extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            collapsed: false
        });
    }

    // 折叠导航栏
    onCollapse() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    };

    render() {
        const { collapsed } = this.state;
        const { path } = this.props;
        return (
            <Layout>
                <BasicSider
                    collapsed={collapsed}
                    onCollapse={this.onCollapse.bind(this)}
                    path={path}
                />
                <Layout >
                    <BasicHeader  collapsed={collapsed}
                                  onCollapse={this.onCollapse.bind(this)}
                    />
                    <Content style={{ margin: '24px 16px 0' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <BasicFooter/>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;
