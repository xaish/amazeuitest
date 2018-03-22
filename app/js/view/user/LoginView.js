import React from 'react';

import {
    Container,
    Button,
    Group,
    Field,
    Loader,
} from 'amazeui-touch';

import {
    NavLink,
} from 'react-router-dom';

import { connect } from 'react-redux';
import {
    doLogin,
    doCancel,
} from "../../action/user/LoginAction";

class LoginView extends React.Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        title:'登陆界面',
        leftNav : {
            component: NavLink,
            title: '首页',
            to: '/home/index',
            icon: 'left-nav',
            transition:'sfl'
        }
    };
    render() {
        const {onLoginClick} = this.props;
        return (
            <Container>
                <Group>
                    <div className="form-set">
                        <Field placeholder="请输入用户名" defaultValue={this.props.login.userName}/>
                        <Field placeholder="请输入密码" defaultValue={this.props.login.passWord}/>
                    </div>
                    <Button disabled={this.props.login.requestInProcess} amStyle="primary" block={true} onClick={onLoginClick}>
                        {this.props.login.requestInProcess?
                            <div><Loader rounded={true} amStyle={'white'}/>登陆中</div>
                            : '提交'}
                    </Button>
                    {!this.props.login.success? <h3 className="text-alert">{this.props.login.msg}</h3>:null}
                </Group>
            </Container>
        );
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        login:state.LoginPageState,
    }
}
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
    return {
        //登陆按钮点击时
        onLoginClick: () => dispatch(doLogin()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);