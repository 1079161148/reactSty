import React, { Component } from 'react'
import {RouterContext} from './RouterContext'

export default class Link extends Component {
    handleClick = (event, history) => {
        event.preventDefault(); // 禁止默认行为去掉闪一闪
        history.push(this.props.to) // 跳转
    }
    render() {
        const {to, children} = this.props;
        return (
            <RouterContext.Consumer>
                {
                   context => (
                    <a href={to} onClick={event => this.handleClick(event, context.history)}>
                        {children}
                    </a>
                    )
                }
            </RouterContext.Consumer>
        )
    }
}
