import React from 'react';
import {Menu} from "antd";
import {Link} from "react-router-dom";
function IndexMenu() {
    return (
        <Menu
            mode="horizontal"
            defaultSelectedKeys={"all"}
        >
            <Menu.Item key="all">
                <Link to={"/?tab=all"}>all</Link>
            </Menu.Item>
            <Menu.Item key="good">
                <Link to={"/?tab=good"}>good</Link>
            </Menu.Item>
            <Menu.Item key="share">
                <Link to={"/?tab=share"}>share</Link>
            </Menu.Item>
        </Menu>
    );
  }
  
  export default IndexMenu;