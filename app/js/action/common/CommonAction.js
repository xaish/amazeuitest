//action 定义
const ACTION_SET_STATE = Symbol("ACTION_SET_STATE");
//初始值
const initCommonState = {
    transition:'sfl'
};
//Reducer
function CommonReducer(state = initCommonState, action){
    switch (action.type) {
        case ACTION_SET_STATE:
            return Object.assign({},state,action.data);
        default :
            return state;
    }
};

export {CommonReducer};

//提供的方法
const setTransition = (transition) => (dispatch, getState) =>{
    const state = getState().CommonState;
    if(transition != undefined && transition != state.transition){
        dispatch({
            type:ACTION_SET_STATE,
            data:{
                transition:transition
            }
        });
    }
};

export { setTransition };