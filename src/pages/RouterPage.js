import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

{/* 
// <BrowserRouter> 浏览器的路由组件
// <HashRouter> URL格式为Hash路由组件
// <MemoryRouter> 内存路由组件
// <NativeRouter> Native的路由组件
// <StaticRouter> 地址不改变的静态路由组件 
*/}

export default class RouterPage extends Component {
    render() {
        // exact精确匹配
        return (
            <div className="router-pge">
                {/* basename 前缀 */}
                <Router basename="jichulujin">
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    {/* Switch包裹后的叫独占路由 仅匹配一个*/}
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/user" component={UsaerPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

class HomePage extends Component {
    render() {
        return (
            <div className="home-box">
                <p>首页路由显示内容</p>
            </div>
        )
    }
}

class UsaerPage extends Component {
    render() {
        return (
            <div className="user-box">
                <p>用户中心路由显示内容</p>
            </div>
        )
    }
}


class NotFoundPage extends Component {
    render() {
        return (
            <div className="not-box">
                <p>404界面</p>
            </div>
        )
    }
}
