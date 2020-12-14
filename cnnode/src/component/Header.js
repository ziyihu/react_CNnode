import React from 'react';
import RouteList from '../routes/routes';
import {Layout,Row,Col,Menu} from "antd";
import {Link,useLocation} from "react-router-dom";
function Header(){
    let {pathname} = useLocation();
    let index = RouteList.filter(item=>item.isNav).findIndex(item=>item.path == pathname);
    return (<Layout.Header>
            <Row>
                <Col span={6}  id="logo" >
                    <Link to="/">
                        <img src={require("../static/img/logo.svg")}/>
                    </Link>
                </Col>
                <Col span={16} offset={2}>
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={[0]}
                        style={{ lineHeight: '64px' }}
                    >
                         {RouteList.filter(item=>item.isNav).map((item,index)=>{
                                return <Menu.Item key={index}>
                                        <Link to={item.path}>{item.title}</Link>
                                    </Menu.Item>
                         })}
                    </Menu>
                </Col>
            </Row>
    </Layout.Header>)
}

export default Header
