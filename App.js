import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/screens/Login'
import Vendor from './src/screens/Vendor'
import ItemList from './src/screens/ItemList';
import OrderSummary from './src/screens/OrderSummary';
import OrderDetails from './src/screens/OrderDetails';
import OrderHistory from './src/screens/OrderHistory';

const Stack = createNativeStackNavigator();

export default class App extends Component {

  LoginScr=({navigation,route})=>{
    return <Login navigation={navigation} route={route}/>
  }

  VendorScr=({navigation,route})=>{
    return <Vendor navigation={navigation} route={route}/>
  }

  ItemListScr=({navigation,route})=>{
    return <ItemList navigation={navigation} route={route}/>
  }

  OrderSummaryScr=({navigation,route})=>{
    return <OrderSummary navigation={navigation} route={route}/>
  }

  OrderDetailsScr=({navigation,route})=>{
    return <OrderDetails navigation={navigation} route={route}/>
  }
  OrderHistoryScr=({navigation,route})=>{
    return <OrderHistory navigation={navigation} route={route}/>
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Vendor" component={this.VendorScr}/>
          <Stack.Screen name="Login" component={this.LoginScr}/>
          <Stack.Screen name="ItemList" component={this.ItemListScr}/>
          <Stack.Screen name="OrderSummary" component={this.OrderSummaryScr}/>
          <Stack.Screen name="OrderDetails" component={this.OrderDetailsScr}/>
          <Stack.Screen name="OrderHistory" component={this.OrderHistoryScr}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
