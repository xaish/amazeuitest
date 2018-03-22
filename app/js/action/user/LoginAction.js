//action 定义
const ACTION_DOLOGIN = Symbol("ACTION_DOLOGIN");

//初始值
const initLoginInfo = {
    userName: '',
    passWord: '',
    requestInProcess:false,
    success:true,
    msg:''
};

//Reducer
function LoginReducer(state = initLoginInfo, action){
    switch (action.type) {
        case ACTION_DOLOGIN:
            return Object.assign({},state,action.data);
        default :
            return state;
    }
};

export {LoginReducer};

//事件
const doLogin = () => (dispatch, getState) =>{
    //如果正在登录，则直接返回
    const state = getState().LoginPageState;
    const requestInProcess = state.requestInProcess;
    if (requestInProcess) { return; }

    //显示正在登录
    dispatch({type:"DO_LOGIN_BEGIN",data:{
        requestInProcess:true
    }});

    var url = "https://www.baidu.com";
    return fetch(url)
        .then(response => response.json())
        .then(data => {
            dispatch({type:ACTION_DOLOGIN,data:{
                requestInProcess:false,
                success:false,
                msg:'用户名或密码错误'
            }});
        })
        .catch(function (error) {
            dispatch({type:ACTION_DOLOGIN,data:{
                requestInProcess:false,
                success:false,
                msg:'用户名或密码错误'
            }});
        });
};

export {doLogin};