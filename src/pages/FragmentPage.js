import React, { Component, Fragment } from 'react'

export default class FragmentPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            inputVal:'',
            list:['react','vue']
        }
    }
    changeInputVal = (e) =>{
        this.setState({
            inputVal:e.target.value
        })
    }
    // 添加
    addMenu = () =>{
        // 也可直接使用es6中的扩展运算符
        this.setState({
            list:[...this.state.list,this.state.inputVal],
        })
    }
    // 删除当前项
    deleteItem = (index) =>{
        console.log(index)
        let list = this.state.list; // 不能直接操作 this.state.list 会影响性能官方也不建议直接操作
        list.splice(index,1);
        this.setState({
            list
        })
    }
    // Fragment可以  Flex布局的时候,外层还真的不能有包裹元素
    // Simple React Snippets 插件快捷生成react基础代码
    // 箭头函数可以省去 bind(this)  操作
    render() {
        console.log(this.props.content, '父到子的数据以属性方式传递用 this.props.xxx 的形式进行接受')
        return (
            <Fragment>
                {/* 第一次注释  如果想在文本框里输入一个<h1>标签并进行渲染,默认是不会生效的加上 dangerouslySetInnerHTML既可以*/}
                <div>react去掉外层元素</div>
                <div> 
                    {/* 原本原生是for id 在react里面 换成 htmlFor */}
                    <label htmlFor="test">加入课程：</label>
                    <input id="test" type="text" placeholder="请输入要添加的课程名" value={this.state.inputVal} onChange={this.changeInputVal} />
                    <button onClick={this.addMenu}>增加课程</button>
                </div>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return(
                                <li key={index}>
                                    {item}
                                    <button onClick={()=>this.deleteItem(index)}>删除</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Fragment>
        )
    }
}
