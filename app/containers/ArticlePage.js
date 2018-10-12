import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    Text,
    Dimensions,
    TouchableOpacity

} from 'react-native';

class ArticlePage extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };
          this.toggle = this.toggle.bind(this);
      }

    toggle() {
        this.setState({
            isOpen:!this.state.isOpen
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <StatusBar hidden={true} translucent={true} networkActivityIndicatorVisible={false}/>
                <View style={styles.container}>
                    <Text style={styles.welcome}>
                        Welcome to React Native!
                    </Text>
                    <Text style={styles.instructions}>
                        To get started, edit index.ios.js
                    </Text>
                    <Text style={styles.instructions}>
                        Press Cmd+R to reload,{'\n'}
                        Cmd+Control+Z for dev menu
                    </Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        top: 20,
        padding: 10,
    },
    caption: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
export default ArticlePage