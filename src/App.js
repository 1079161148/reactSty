// import React from 'react';
import logo from './logo.svg'; // react首页图标 (开起了校验img必须有个alt属性)
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;   // 最原始

import React, { Component } from 'react'  // es6解构赋值写法
import ClassComponent from './pages/classComponent' // ClassComponent必需要大写开头第一个字母
import {FunctionCompoent} from './pages/functionCompoent'
import ReactRduxComponent from './pages/reactRduxComponent'
import RouterPage from './pages/RouterPage'
import PureComponent from './pages/PureComponent'
import HookPage from './pages/HookPage'
import FragmentPage from './pages/FragmentPage'

import store from './sotre'

import BrowserRouter from './k-react-router/BrowserRouter'
import Link from './k-react-router/Link'
import Route from './k-react-router/Route'
import Switch from './k-react-router/Switch'
//import React from 'react'  
//const Component = React.Component
const name = 'react'; // 基本使用
const temp = <div>11111111111111dom结构</div>; // dom结构
const list = [1, 2, 3, 4, 5] // 遍历数组
// 函数
const obj = {
    firstName: 'bob',
    lastName: 'lala'
}
function fullName(name){
    return obj.firstName + '~' + name.lastName
}
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            synccounter: 0
        }
    }
    componentDidMount(){
        document.getElementById('test').addEventListener('click',this.setCounter);

        // 更新state映射到视图变更
        store.subscribe(()=>{
            console.log('state变化了', store.getState())
            this.forceUpdate(); // 强制刷新
        })
    }
    changeValue = v => {
        // setState在合成事件中是异步的，这里说的异步其实是批量更新，达到了优化性能的目的
        this.setState({
            counter: this.state.counter + v
        })
        console.log('counter',this.state.counter) // 控制台可以得出异步结果 
    }
    changeValue2 = v => {
        this.setState({
            synccounter: this.state.synccounter + v
        })
        console.log('synccounter',this.state.synccounter) // 控制台可以得出异步结果 
    }
    setCounter = () => {
        this.changeValue(1);
        // setState在setTimeout和原生事件中是同步的
        setTimeout(() => {
            this.changeValue2(1);
        },0)
    }
    render() {
        console.log(store,'store')
        return (
            <div>
                <ClassComponent />
                <FunctionCompoent/>
                <RouterPage/>
                <PureComponent/>
                <HookPage/>
                <FragmentPage content={this.state.counter}/>
                <div>Hello word!!!,{name}</div>
                <div>{fullName(obj)}</div>
                <div>{temp}</div>
                <ul>
                    {list.map(item => <li key={item}>{item}</li>)}
                </ul>
                <ReactRduxComponent/>
                
                {/* 手写路由 */}
                <BrowserRouter>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/user" component={UsaerPage} />
                    </Switch>
                </BrowserRouter>

                <p>redux里面的state-----{store.getState()}</p>
                <button onClick={() => store.dispatch({type:"ADD"})}>redux加法</button>
                <button onClick={() => store.dispatch({type:"RDUCER"})}>redux减法</button>
                <img src={logo} alt="seo" className="leiming" style={{width: "20px",height:"20px"}}/> 
                <button onClick={this.setCounter}>异步{this.state.counter}</button>
                <button onClick={this.setCounter}>同步{this.state.synccounter}</button>
                <button id="test">原生事件{this.state.synccounter}</button>
            </div>
        )
    }
}
export default App;


class HomePage extends Component {
    render() {
        return (
            <div className="home-box">
                <p style={{color: "red"}}>首页路由显示内容----自写</p>
            </div>
        )
    }
}

class UsaerPage extends Component {
    render() {
        return (
            <div className="user-box">
                <p style={{color: "red"}}>用户中心路由显示内容--自写</p>
            </div>
        )
    }
}