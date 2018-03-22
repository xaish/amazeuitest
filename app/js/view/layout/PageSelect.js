import React from 'react';
import pagesList from '../../viewConfig';
import {NavBar,Container} from 'amazeui-touch';
import _ from 'lodash/core';

class PageSelect extends React.Component{
    render() {
        let props = this.props;
        let RenderComponent = null;
        let layout = props.match.params.layout;
        if(pagesList[layout]){
            if(props.layout == true){
                RenderComponent = pagesList[props.match.params.layout].layout;
            }else{
                let pages = pagesList[props.match.params.layout].pages;
                if(pages[props.match.params.page]){
                    RenderComponent = pages[props.match.params.page];
                    let defaultProps= RenderComponent.defaultProps;
                    if(_.isEmpty(defaultProps) && RenderComponent.WrappedComponent){
                        defaultProps = RenderComponent.WrappedComponent.defaultProps;
                    }

                    if(!_.isEmpty(defaultProps)){
                        //标题
                        let title = '';
                        if(!_.isEmpty(defaultProps.title)){
                            title = defaultProps.title;
                        }
                        //返回按钮
                        let leftNav = [];
                        if(!_.isEmpty(defaultProps.leftNav)){
                            leftNav.push(defaultProps.leftNav);
                        }
                        //前进按钮
                        let rightNav = [];
                        if(!_.isEmpty(defaultProps.rightNav)){
                            rightNav.push(defaultProps.rightNav);
                        }

                        return (
                            <Container>
                                <NavBar title={title}
                                        amStyle="primary"
                                        leftNav={leftNav}
                                        rightNav={rightNav}
                                        onAction={(item,event) => {
                                            if(!_.isEmpty(item.transition)){
                                                if(this.props.setTransition)this.props.setTransition(item.transition);
                                            }
                                        }}>
                                </NavBar>
                                <RenderComponent {...props}/>
                            </Container>);
                    }
                }
            }
        }

        return <RenderComponent {...props}/>;
    }
}

export default PageSelect;