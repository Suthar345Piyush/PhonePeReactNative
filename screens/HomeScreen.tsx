import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import herobanner from "../assets/images/herobanner.png";
import { SafeAreaView } from 'react-native-safe-area-context';
import { SimpleLineIcons } from '@expo/vector-icons';


const HomeScreen = () => {
  return (
       <ImageBackground 
           source={herobanner}
            className="w-full h-96 justify-center items-center"
            resizeMode='cover'
            >

              <View className='absolute top-4 left-0 right-0 flex-row justify-between px-5 pt-6'>
                 <TouchableOpacity className='w-10 h-10 bg-yellow-500 rounded-lg justify-center items-center'>
                  <Text className='text-white text-2xl'>✦</Text>
                 </TouchableOpacity>

                 <TouchableOpacity className='w-8 h-8 border-2 border-white rounded-full justify-center items-center'>
                    <Text className='text-white text-xl font-bold'>?</Text>
                 </TouchableOpacity>
              </View>

          <View className="justify-center items-center px-5">
              <Text className="text-white text-sm font-normal mb-1 text-center">
                Waiting to catch your attention
            </Text>
          <Text className="text-white text-3xl font-bold text-center tracking-wide mb-4">
              Your PhonePe Rewards
           </Text>
        
           <TouchableOpacity 
               className="flex-row items-center bg-white rounded-full px-5 py-2.5">
                  <Text className="text-purple-900 text-base font-semibold mr-2">
                    Take A Look
               </Text>
                    <View className="w-6 h-6 bg-purple-900 rounded-full justify-center items-center">
                  <Text className="text-white text-lg font-bold">→</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ImageBackground>
  );
};

export default HomeScreen;

