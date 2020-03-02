import React, { useEffect, useState } from 'react'

// hook的使用 函数组件名称开头大写

export default function HookPage(props) {
    // 定义一个count的state变量 ，初始化为0
    const [count, setCount] = useState(0);

    // 错误使用
    // if(count) {

    // }
    // 和didMount、didUpaate类似
    useEffect(() => {
        console.log("effect")
        //  只需要count改变时候执行就可以
        document.title = `点击了${count}次`
        return () => {

        };
    }, [count])
    return (
        <div className="hook-box">
            <div>-----hook的基本使用-----</div>
            <p>{count}</p>
            <p>{useClock().toLocaleTimeString()}</p>
            <button onClick={() => setCount(count + 2)}>加count</button>
        </div>
    )
}

// 自定义hook组件
// 自定义的hook 命名要以 use 开头  只能在函数最外层调用，不要在循环和判断条件或者子函数使用
// 只能在react 函数组件中调用 hook 自定义hook中也可以调用 hook 起到了逻辑复用
function useClock() {
    const [date, setDate] = useState(new Date());
    // 可以写多个
    useEffect(() => {
        console.log("effect")
        //  只需要count改变时候执行就可以
        const timer = setInterval(() => {
            setDate(new Date())
        })
        // class组件在willUnmount里面清除定时器 清除副作用 一般定时器需要清除防止内存泄露
        return () => {
            clearInterval(timer)
        };
    }, [])
    return date // return出来
}