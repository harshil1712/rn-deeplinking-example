import React from 'react'
import { Platform, View, Text, Linking } from 'react-native'
export default class Home extends React.Component {
    static navigationOptions = {
        title:'Home'
    }

    componentDidMount() {
        if(Platform.OS==='android'){
            Linking.getInitialURL().then(url=>{
                console.log(url)
                // this.navigate(url);
            })
        }
        Linking.addEventListener('url', this._handleOpenURL);
      }
      componentWillUnmount() {
        Linking.removeEventListener('url', this._handleOpenURL);
      }
      _handleOpenURL(event) {
        console.log(event.url);
      }

    //   navigate = (url) => { // E
    //     const { navigate } = this.props.navigation;
    //     const route = url.replace(/.*?:\/\//g, '');
    //     const id = route.match(/\/([^\/]+)\/?$/)[1];
    //     const routeName = route.split('/')[0];
      
    //     if (routeName === 'article') {
    //       navigate('Article', { id})
    //     };
    //   }
      

    render() {
        return(<View><Text>Home</Text></View>)
    }
}