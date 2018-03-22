import React from 'react';

import {
    NavLink,
} from 'react-router-dom';

import { connect } from 'react-redux';

import {
    Container,
    TabBar,
    View,
} from 'amazeui-touch';

import PageSelect from './PageSelect';

class HomeLayout extends React.Component {
    render() {
        return <Container direction="column">
            <Container transition={this.props.transition}>
                <View key={this.props.location.pathname}>
                    <PageSelect {...this.props} layout={false}/>
                </View>
            </Container>

            <TabBar amStyle="primary">
                <TabBar.Item
                    key={'/home/index'}
                    component={NavLink}
                    title={"首页"+this.props.transition}
                    to={'/home/index'}
                />
                <TabBar.Item
                    key={'/home/user'}
                    component={NavLink}
                    title={"我"}
                    to={'/home/user'}
                />
            </TabBar>
        </Container>
    }
}

// Map Redux state to component props
function mapStateToProps(state) {
    return {
        transition:state.CommonState.transition,
    }
}
// Map Redux actions to component props
import {setTransition} from '../../action/common/CommonAction';
function mapDispatchToProps(dispatch) {
    return {
        //设置界面切换
        setTransition:(transition) => dispatch(setTransition(transition)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeLayout);
