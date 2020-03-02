import React, { useState, useEffect } from 'react'

export function FunctionCompoent(props) {
    const [date, setDate] = useState(new Date());
    // 相当于componentDidMount、componentDidUpdate、componentWillUnmount的集合
    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000);
        return () => clearInterval(timer)
    }, [])
    return (
        <div className="function-com-box">
            <p>react函数式组件</p>
            <p>{date.toLocaleTimeString()}</p>
            <p style={{color:"red"}}> -----------------子组件分割线--------------------------</p>
        </div>
    )
}
