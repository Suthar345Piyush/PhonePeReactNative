import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import herobanner from "../assets/images/herobanner.png";



const HomeScreen = () => {
  return (
    <ScrollView className='flex-1 bg-black'>
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


          {/* next part of the screen  */}

          <View className="flex-1 bg-black px-4 pt-6">
             <Text className='text-white font-bold text-xl mb-4'>Money Transfers</Text>
             <View className='flex-row justify-around mb-6'>
               <TouchableOpacity className='items-center'>
                   <View className='w-16 h-16 bg-purple-700 rounded-full justify-center items-center mb-2'>
                    <Text className='text-white text-3xl'>📞</Text>
                   </View>
                   <Text className='text-white text-xs text-center'>To Mobile{'\n'}Number</Text>
               </TouchableOpacity>

               <TouchableOpacity className='items-center'>
                 <View className='w-16 h-16 bg-purple-700 rounded-full justify-center items-center mb-2'>
                   <Text className='text-white text-3xl'>🏦</Text>
                 </View>
                 <Text className='text-xs text-white text-center'>To Bank &{'\n'}Self A/c</Text>
               </TouchableOpacity>

               <TouchableOpacity className='items-center'>
                 <View className='w-16 h-16 bg-purple-700 rounded-full justify-center items-center mb-2'>
                   <Text className='text-white text-3xl'>📢</Text>
                 </View>
                 <Text className='text-xs text-white text-center'>Refer & Get{'\n'}₹200</Text>
               </TouchableOpacity>

               <TouchableOpacity className='items-center'>
                   <View className='w-16 h-16 bg-purple-700 rounded-full justify-center items-center mb-2'>
                    <Text className='text-white text-3xl'>₹</Text>
                   </View>
                   <Text className='text-xs text-white text-center'>Check{'\n'}Balance</Text>
               </TouchableOpacity>
             </View>
          </View>



          {/* recharge and bills part  */}
      
         <View className='bg-zinc-800 rounded-3xl p-5 mb-6 mx-4 border border-gray-800'>

           <View className='flex-row justify-between items-center mb-6'>
            <Text className='text-white text-lg font-bold'>Recharge & Bills</Text>
            <Text className='text-purple-400 text-sm font-medium'>View All</Text>
           </View>
 
           <View className='flex-row justify-around'>
             <TouchableOpacity className='items-center'>
                  <View className='w-16 h-16 bg-gray-800 rounded-full justify-center items-center mb-3'>
                    <Text className='text-white text-2xl'>📱</Text>
                  </View>
                  <Text className='text-xs text-white text-center leading-4'>Mobile{'\n'}Recharge</Text>
              </TouchableOpacity> 

              <TouchableOpacity className='items-center'>
                 <View className='w-16 h-16 bg-gray-800 rounded-full justify-center items-center mb-3'>
                   <Text className='text-white text-2xl'>🚧</Text>
                 </View>
                 <Text className='text-xs text-white text-center leading-4'>FASTag{'\n'}Recharge</Text>
              </TouchableOpacity>

              <TouchableOpacity className='items-center'>
                 <View className='w-16 h-16 bg-gray-800 rounded-full justify-center items-center mb-3'>
                   <Text className='text-white text-2xl'>💡</Text>
                 </View>
                  <Text className='text-xs text-white text-center leading-4'>Electricity{'\n'}Bill</Text>
              </TouchableOpacity>

              <TouchableOpacity className='items-center'>
                 <View className='w-16 h-16 bg-gray-800 rounded-full justify-center items-center mb-3'>
                   <Text className='text-white text-2xl'>💰</Text>
                 </View>
                  <Text className='text-xs text-white text-center leading-4'>Loan{'\n'}Repayment</Text>
              </TouchableOpacity>
           </View>
        </View>


     {/* loans and insurance part  */}

      {/* wrapping whole section in TouchableOpacity  */}

      <View className='flex-row gap-4 px-4'>
        <TouchableOpacity className='flex-1 bg-zinc-800 rounded-3xl p-5 h-32' activeOpacity={0.7}>
            


             <View>
              <Text className='text-white text-lg font-bold mb-1'>Loans</Text>
               <Text className='text=gray-400 text-sm text-white'>Personal, Gold{'\n'}and More</Text>
             </View>


             <View className='absolute bottom-4 right-4'>
               <View className='w-12 h-12 bg-purple-500/20 rounded-full'/>
             </View>
        </TouchableOpacity>


        <TouchableOpacity className='flex-1 bg-zinc-800 rounded-3xl p-5 h-32' activeOpacity={0.7}> 
                  <View>
                    <Text className='text-white text-lg font-bold mb-1'>
                       Insurance
                    </Text>
                    <View className='bg-purple-600 self-start px-3 py-1 rounded-3xl mt-1'>
                      <Text className='text-white text-xs font-medium'>
                         Offer
                      </Text>
                    </View>
                  </View>

                  <View className='absolute bottom-4 right-4'>
                     <View className='w-12 h-12 bg-orange-500/20 rounded-3xl'/>
                  </View>
        </TouchableOpacity>
      </View>

        </ScrollView>
  );
};

export default HomeScreen;

