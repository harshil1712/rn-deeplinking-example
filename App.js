import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from './src/Home'
import Article from './src/Article'

const Routes = createAppContainer(createStackNavigator({
    Home: { screen: Home },
    Article: { screen: Article, path: 'article/:id' }

},
{
    initialRouteName:'Home'
}))

const prefix = 'myapp://'

const MainApp = () => (<Routes uriPrefix={prefix} />)

export default MainApp

