import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from "react-navigation-stack";

import AuthScreen from '../Screens/AuthScreen'
import HomeScreen from '../Screens/HomeScreen'
import NewsScreen from '../Screens/NewsScreen'
import ArticleScreen from '../Screens/ArticleScreen'
import ServicesScreen from '../Screens/ServicesScreen'
import CpScreen from '../Screens/CpScreen'
import OneServiceScreen from '../Screens/OneServiceScreen'
import ServiceDetailScreen from '../Screens/ServiceDetailScreen'
import HumanRessourcesScreen from '../Screens/HumanRessourceScreen'

const AppStack = createStackNavigator(
    {
        Home:HomeScreen,
        News:NewsScreen,
        Article:ArticleScreen,
        Services:ServicesScreen,
        Cp:CpScreen,
        OneService:OneServiceScreen,
        ServiceDetail:ServiceDetailScreen,
        HumanRessources: HumanRessourcesScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);

const AuthStack = createStackNavigator(
    {
        Auth: AuthScreen
    },
    {
        initialRouteName: 'Auth',
        headerMode: 'none'
    }
);

export default createAppContainer(createSwitchNavigator(
    {
        App: AppStack,
        Auth: AuthStack,
    }))
