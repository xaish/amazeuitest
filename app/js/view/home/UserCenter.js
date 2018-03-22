//引入你的依赖
import React from 'react';
import {
    Container,
    Button,
    Group,
} from 'amazeui-touch';
import {
    NavLink,
} from 'react-router-dom';

class UserCenter extends React.Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        title:'用户中心',
        leftNav : {
            component: NavLink,
            title: '首页',
            to: '/home/index',
            icon: 'left-nav',
            transition:'sfl'
        }
    };
    render() {
        return (
            <Container>
                <Group>
                    <Button block={true} amStyle="primary">
                        登陆
                    </Button>
                </Group>
            </Container>
        );
    }
};

export default UserCenter;