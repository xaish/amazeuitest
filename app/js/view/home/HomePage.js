//引入你的依赖
import React from 'react';
import {
    Container,
    List,
    Group,
} from 'amazeui-touch';
import {
    NavLink,
} from 'react-router-dom';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
    };
    static defaultProps = {
        title:'首页',
        rightNav:{
            component: NavLink,
            title: '个人中心',
            to: '/home/user',
            icon: 'right-nav',
            transition:'sfr'
        }
    }
    render() {
        return (
            <Container scrollable>
                <Group header="欢迎来到AmazeUI" noPadded>

                </Group>
            </Container>
        );
    }
};

export default HomePage;