import React from 'react';
import Index from "../view/index";
import GetStart from "../view/getstart";
import About from "../view/about";
import User from "../view/user";
import Topic from "../view/topic";
import View404 from "../view/view404";
const routes = [
    {
        title: "main",
        path: "/",
        exact: true,
        render(...props){
            return <Index {...props} />
        },
        isNav: true
    },{
        title: "guide",
        path: "/getstart",
        exact: false,
        render(...props){
            return <GetStart {...props} />
        },
        isNav: true
    },{
        title: "about",
        path: "/about",
        exact: false,
        render(...props){
            return <About {...props} />
        },
        isNav: true
    },{
        title: "user",
        path: "/user/:username",
        exact: false,
        render(...props){
            return <User {...props} />
        }
    },{
        title: "topic",
        path: "/topic/:id",
        exact: false,
        render(...props){
            return <Topic {...props} />
        }
    },{
        title: "404",
        path: "",
        exact: false,
        render(...props){
            return <View404 {...props} />
        }
    }
];

export default routes;