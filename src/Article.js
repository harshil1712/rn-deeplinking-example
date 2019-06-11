import React from 'react'
import { View, Text, WebView } from 'react-native'

const articles ={
    0:{
        title: 'Privacy Month',
        url: 'https://blog.harshil.dev/blog/privacy-month/'
    },
    1:{
        title: 'FOSSASIA Summit 2019',
        url: 'https://blog.harshil.dev/blog/fossasia-summit-2019-my-first-international-talk/'
    },
    2:{
        title: 'Booth Crawl',
        url: 'https://blog.harshil.dev/blog/booth-crawl-at-makerfest-vadodara-2019/'
    },
    3:{
        title: 'JS Arrow Functions',
        url: 'https://blog.harshil.dev/blog/js-arrow-functions-made-easy/'
    },
    4:{
        title: 'Flutter Calculator',
        url: 'https://blog.harshil.dev/blog/let\'s-flutter:-how-i-built-a-simple-calculator-with-flutter/'
    },
}

export default class Article extends React.Component {
    static navigationOptions = {
        title:'Article'
    }

    render() {
        const { id } = this.props.navigation.state.params
            if(!articles[id])
                return(<View style={{flex:1}}><WebView source={{uri: `${articles[id].url}`}} /></View>)
            else
                return(<Text>Sorry Couldn't find the article</Text>)
        
    }
}