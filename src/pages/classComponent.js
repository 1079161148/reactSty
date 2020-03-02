import React, { Component } from 'react';
// 组件分class组件和 function组件
//先安装插件  ES7 React/Redux/GraphQL/React-Native snippets
// rcc 快速穿件一个组件（使用extends方式）
// rconst 快速创建一个 constuctor
// rcep 快速创建一个组件（使用extends方式）
// rcredux 快速创建一个 redux格式的类模板
// clg 是 console.log()的快捷键
class classComponent extends Component {
    constructor(props) {
        super(props)
        // 存储状态
        this.state = {
             date: new Date()
        }
        console.log(this.state,'this.state')
    }
    // 组件挂载完成之后执行
    componentDidMount(){
        this.timer = setInterval(() => {
            // 更改状态 不能直接使用this.state直接更改
            this.setState({
                date: new Date()
            })
        }, 1000);
    }
    // 组件卸载之前执行
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    render() {
        const {date} = this.state;
        return (
            <div className="childComponent-box">
                <div>我是react的子组件</div>
                <p>{date.toLocaleTimeString()}</p>
                <p style={{color:"red"}}> -----------------子组件分割线--------------------------</p>
            </div>
        );
    }
}

export default classComponent;