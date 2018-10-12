import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation';
import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator';
import MainDrawer from './containers/MainDrawer';
import AuthorPage from './containers/AuthorPage';
import CollectPage from './containers/CollectPage';

const Router = createStackNavigator({
    MainDrawer:{screen:MainDrawer},
    // CollectPage :{screen:CollectPage},
    // AuthorPage :{screen:AuthorPage}

},{
    navigationOptions:{
        gesturesEnabled:true
    },
    headerMode:'none',
    transitionConfig:( () => ({
        screenInterpolator:StackViewStyleInterpolator.forHorizontal
    }))
})

export default Router