import React, {Component} from "react";
import {RouterContext} from "./RouterContext";
import matchPath from "./matchPath";

// 独占路由
export default class Switch extends Component {
  render() {
    return (
      <RouterContext.Consumer>
        {context => {
          // 找出渲染的，第一个符合匹配的元素，存在element
          // const {location} = context;
          // 优先用 props 上的 location
          const location = this.props.location || context.location;
          let element,
            match = null;
          let {children} = this.props;
          // children = [children];
          // // this.props.children  数组形式、对象
          // for (let i = 0; i < children.length; i++) {
          //   let child = children[i];
          //   if (match === null && React.isValidElement(child)) {
          //     element = child;
          //     const path = child.props.path;
          //     match = path
          //       ? matchPath(location.pathname, {...child.props, path})
          //       : context.match;
          //   }
          // }

          // React提供了isValidElement()方法，用于判断传入对象是否是有效的ReactElement
          React.Children.forEach(children, child => {
            if (match === null && React.isValidElement(child)) {
              element = child;
              const path = child.props.path;
              match = path
                ? matchPath(location.pathname, {
                    ...child.props,
                    path
                  })
                : context.match;
            }
          });
          // console.log("element", element, React.isValidElement(element)); //sy-log
          // createElement(type, props)
          // return match
          //   ? React.createElement(element.type, {
          //       ...element.props,
          //       location,
          //       computedMatch: match
          //     })
          //   : null;
          // cloneElement(element, otherProps)
          return match
            ? React.cloneElement(element, {
                location,
                computedMatch: match
              })
            : null;
        }}
      </RouterContext.Consumer>
    );
  }
}
