import React,{Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ListView,
    Image
} from 'react-native';
import Drawer from 'react-native-drawer';
import SideMenu from 'react-native-side-menu'
import { connect } from 'react-redux';
import ArticlePage from './ArticlePage';
const {width,height} = Dimensions.get('window');

class MainDrawer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isOpen:false
        }
    }

    updateMenuState(isOpen) {
        this.setState({ isOpen});
    }
    render() {
        const menu = <LeftVC />
        return(
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.updateMenuState(isOpen)}
            >
                <ArticlePage />
            </SideMenu>
        );
    }


}

class LeftVC extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }
    render(){
        return(
            <View style={{flex:1,}}>
                <View style={{width:width-10,height:64,backgroundColor:'#3893C9',alignItems:'center'}}></View>
                <View style={{width:width-10,backgroundColor:'white',flex:1}}>
                    <View style={{height:40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'orange',
                        marginTop:10}}><Text>我的钱包</Text></View>
                    <View style={{height:40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor:'orange',
                        marginTop:10}}><Text>我的卡卷</Text></View>
                </View>
            </View>
        );
    }
}


export default MainDrawer