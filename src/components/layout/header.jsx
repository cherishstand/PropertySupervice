import React from 'react'
import { Menu, Icon } from 'antd';
import { config } from '../../utils'
import styles from './main.less'
const MenuItem = Menu.Item;
const owerStyles = {
    menu: {
        lineHeight: '96px',
        borderBottom: 0,
        background: 'transparent',
        color: '#fff'
    }
}

class HeaderMenu extends React.Component {
    state = {
        current: 'mail'
    }
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
            <Menu 
                style={owerStyles.menu}
                mode="horizontal"
            >
                <MenuItem key='home'>
                    <Icon type="home" />国资委官网
                </MenuItem>
                <MenuItem key='mail'>
                    <Icon type="mail" />政府邮箱
                </MenuItem>
                <MenuItem key='codepen'>
                    <Icon type="codepen" />云平台办公
                </MenuItem>
                <MenuItem key='question-circle'>
                    <Icon type="question-circle" />系统帮助
                </MenuItem>
            </Menu>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className={styles.header}>
                <div className={styles.container}>
                    <a href='/' className={styles.loginImg}>
                        <img src='../../assets/Login/logon.png' alt=''/>
                        <span>{config.logoText}</span>
                        <em>SASAC</em>
                    </a>
                    <div className={styles.loginMenu}>
                        <HeaderMenu />
                    </div>
                </div>
            </div>
        )
    }
}
export default Header
