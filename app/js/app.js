/**解决React在IE中不能使用**/
//import Set from 'core-js/fn/set';
//import Map from 'core-js/fn/map';

//load amazeui-touch
//按需引用
// 引入touch的模块css
//import 'amazeui-touch/scss/base.scss';
// 引入你需要的touch组件
//import Button from 'amazeui-touch/js/Button';
//全量引用
import 'amazeui-touch/dist/amazeui.touch.min.css';
// load App Css
import '../css/app.css';

//引入你的依赖
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
//Router
import {
    BrowserRouter,
    HashRouter,
    Route,
    Redirect,
} from 'react-router-dom';

import PageSelect from './view/layout/PageSelect';

//App总体框架
class App extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/" render={() => (<Redirect to="/home/index" />)}/>
                <Route exact path="/:layout/:page" render={(props)=><PageSelect {...props} layout={true}/>} />
            </div>
        );
    }
}

//react-redux
import allReducer from './allReducer';
//store
const store = createStore(allReducer,applyMiddleware(thunk));

// 渲染
document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <HashRouter>
                <App/>
            </HashRouter>
        </Provider>,
     document.getElementById('root'));
});