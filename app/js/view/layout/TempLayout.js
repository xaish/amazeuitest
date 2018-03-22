import React from 'react';
import {
    Container,
    View,
} from 'amazeui-touch';

import PageSelect from './PageSelect';

class HomeLayout extends React.Component {
    render() {
        return <Container direction="column">
            <Container transition={"sfl"}>
                <View key={this.props.location.pathname}>
                    <PageSelect {...this.props} layout={false}/>
                </View>
            </Container>
        </Container>
    }
}

export default HomeLayout;
