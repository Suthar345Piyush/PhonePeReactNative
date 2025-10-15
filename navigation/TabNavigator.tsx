import {Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import {Ionicons , EvilIcons , MaterialCommunityIcons} from "@expo/vector-icons";
import SearchStack from './SearchStack';
import ScanStack from './ScanStack';
import AlertStack from './AlertStack';
import HistoryStack from './HistoryStack';



const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (

     <Tab.Navigator
          screenOptions={{
              tabBarStyle : {
                 backgroundColor : "#1a1a1a",   // for dark background 
                 borderTopWidth : 0,
                 elevation : 0,
                 height : 85,
                 paddingBottom : 10,
                 paddingTop : 10,
              },

              tabBarActiveTintColor : "#fff",
              tabBarInactiveTintColor : "#6b7280",
              tabBarShowLabel : true,
              tabBarLabelStyle : { 
                fontSize : 12,
                fontWeight : '500',
                marginTop : 4,
              },
              headerShown : false,
          }}>


       <Tab.Screen name="Home" component={HomeStack} options={{
         tabBarIcon : ({color , size}) => (
           <Ionicons name="home" color={color} size={size}/>
         )
       }}/>

       <Tab.Screen name="Search" component={SearchStack} options={
        { tabBarIcon : ({color , size}) => (
           <Ionicons name="search-outline" color={color} size={size}/>
        )}
       }/>

       <Tab.Screen name="Scan" component={ScanStack} options={{
           tabBarIcon : ({focused}) => (
              <View style={{
                  width : 70,
                  height : 70,
                  borderRadius : 30,
                  backgroundColor : focused ? '#7c3aed' : '#6d28d9',
                  justifyContent : 'center',
                  alignContent : 'center',
                  marginBottom : -0.1,
                  marginTop : 19,
              }}>
                <MaterialCommunityIcons name="qrcode-scan" color="#fff" size={33} style={{
                     marginLeft : 18,
               }}/>
              </View>
           ),
           tabBarLabel : '',
       }}/>

       <Tab.Screen name="Alerts" component={AlertStack} options={{
          tabBarIcon : ({size , color}) => (
             <EvilIcons name="bell" color={color} size={size}/>
          )
       }}/>

       <Tab.Screen name="History" component={HistoryStack} options={{
          tabBarIcon : ({color , size}) => (
             <Ionicons name="stopwatch-outline" color={color} size={size}/>
          )
       }}/>
     </Tab.Navigator>
  );
};

export default TabNavigator;



