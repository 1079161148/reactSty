import React, { Component } from 'react'

export default class PureComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }
    setCount = () => {
        this.setState({
            count: 1000
        })
    }
    // 优化性能
    shouldComponentUpdate(nexProps,nexState){
        return nexState.count !== this.state.count
    }
    render() {
        console.log('render')
        const {count} = this.state;
        return (
            <div className="pure-com-box">
                <p>PureComponent</p>
                <button onClick={this.setCount}>{count}</button>
            </div>
        )
    }
}


// 法二 浅比较
// export default class PureComponent extends PureComponent {
//     constructor(props){
//         super(props);
//         this.state = {
//             count: 0
//         }
//     }
//     setCount = () => {
//         this.setState({
//             count: 1000
//         })
//     }
//     render() {
//         console.log('render')
//         const {count} = this.state;
//         return (
//             <div className="pure-com-box">
//                 <p>PureComponent</p>
//                 <button onClick={this.setCount}>{count}</button>
//             </div>
//         )
//     }
// }