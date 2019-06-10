import React from 'react'
import { View, Text } from 'react-native'

export default class Article extends React.Component {
    static navigationOptions = {
        title:'Article'
    }

    render() {
        console.log(this.props.navigation.state.params)
        return(<View><Text>hello {this.props.navigation.state.params.id}</Text></View>)
    }
}