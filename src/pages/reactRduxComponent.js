import React, { Component } from 'react'
import { connect } from 'react-redux' 

export default connect(
    // mapStateToProps 把dispatch(默认会映射), state映射到 props
    state => ({num: state}),
    // 方法二 
    // {
    //    multip: () => ({type: 'MULTIP'}) 
    // }
) (class reactRduxComponent extends Component {
    render() {
        // 方法二 对应
        // const {num, dispatch, multip} = this.props;
        const {num, dispatch} = this.props;
        console.log(this.props,'react-redux')

        return (
            <div className="react-redux-box">
                <p>react-redux的使用----{num}</p>
                <button onClick={() => dispatch({type:"ADD"})}>react-redux加法</button>
                <button onClick={() => dispatch({type:"RDUCER"})}>react-redux减法</button>
                <button onClick={() => dispatch({type:"MULTIP"})}>react-redux乘法</button>
                {/* 方法二对应写法 */}
                {/* <button onClick={multip}>react-redux乘法</button> */}
            </div>
        )
    }
})
