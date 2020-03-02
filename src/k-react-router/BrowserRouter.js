import React, { Component } from 'react'
import { createBrowserHistory } from "history"
import {RouterContext} from './RouterContext'

export default class BrowserRouter extends Component {
    constructor(props, context) {
        super(props, context);
        this.history = createBrowserHistory();
        this.state = {
            location: this.history.location
        }

        this.unlisten = this.history.listen(location => {
            this.setState({location})
        })
    }
    componentWillUnmount(){
        if(this.unlisten){
            this.unlisten();
        }
    }
    render() {
        return (
            <RouterContext.Provider value={{history: this.history, location: this.state.location}}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}
