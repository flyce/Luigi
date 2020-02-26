import React from 'react';
import { Layout, Icon, Tooltip, Avatar, Dropdown, Menu } from 'antd';
import { Link } from "react-router-dom";
import "./style.css";

const { Header } = Layout;

class BasicHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false
        };
    }

    handleUpdatePassword = data =>  {
        this.setState({
            modalVisible: true
        });
    };

    toggle = () => {
        const { collapsed, onCollapse } = this.props;
        onCollapse(!collapsed);
        this.triggerResizeEvent();
    };

    /* eslint-disable*/
    // @Debounce(600)
    triggerResizeEvent() {
        const event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
    }

    render() {
        const {
            collapsed,
        } = this.props;

        const menu = (
            <Menu className={"menu"} selectedKeys={[]} >
                <Menu.Item key="password"
                     onClick={this.handleUpdatePassword}
                >
                    <Icon type="edit" />修改密码
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="logout">
                    <Link to={"/logout"} ><Icon type="logout" />退出登录</Link>
                </Menu.Item>
            </Menu>
        );
        return (
            <Header style={{ background: '#fff',padding: 0 }} >
                <div className={"header"}>
                    <Icon
                        className={"trigger"}
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    <div className={"right"}>
                        <Tooltip title="帮助">
                            <Link
                                // target="_blank"
                                to="/"
                                rel="noopener noreferrer"
                                className={"action"}
                            >
                                <Icon type="question-circle-o" />
                            </Link>
                        </Tooltip>
                        <Dropdown overlay={menu}>
                            <span className={"action account"}>
                                <Avatar size="small" className={"avatar"} src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
                                <span className={"name"}>Paco</span>
                            </span>
                        </Dropdown>
                    </div>
                </div>
             </Header>
        )
    }
}

export default BasicHeader;
