import { createStore } from 'redux'

// 定义state初始化和修改规则
function counterReducer(state = 0, action){
    switch (action.type) {
        case "ADD":
            return state + 1
        case "RDUCER":
            return state - 1
        case "MULTIP":
           return state * 8
        default: return state
    }
}

// 创建stroe
const store = createStore(counterReducer); // redux可以用到别的库里面去 react-redux是专门为react设计的

export default store