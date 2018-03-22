//layout
import HomeLayout from './view/layout/HomeLayout';
import TempLayout from './view/layout/TempLayout';

//page
import LoginView from './view/user/LoginView';
import HomePage from './view/home/HomePage';
import UserCenter from './view/home/UserCenter';

const pagesList = {
    "home" :{layout:HomeLayout,pages:{
        "index":HomePage,//路由为： /home/index
        "user":UserCenter,//路由为：/home/user
    }},
    "login":{layout:TempLayout,pages:{
        "index":LoginView, //路由为：/login/index
    }},
}

export default pagesList;