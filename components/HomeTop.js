import { View, Text, Image, TouchableOpacity } from 'react-native'
import { BellIcon, ChevronLeftIcon } from "react-native-heroicons/outline";
import React from 'react'

const HomeTop = () => {
  return (
    <View className="flex flex-row items-center px-3 pt-1 pb-1 space-x-2 border-b-2 border-gray-200">
        <View className="flex flex-row items-center">
          <ChevronLeftIcon size={25} color="#000" />
          <View className="bg-gray-200 p-2 rounded-full ml-2">
            <Image 
              source={{
                uri : "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1677043222~exp=1677043822~hmac=2fe58f9fd73438cde52777d25513dea80cc3bf9315872e1f52a0d0f431de45eb"
              }}
              className="h-10 w-10 rounded-full"
            />
          </View>
        </View>
        <View className="flex flex-row ml-3 items-center">
            {/* Check mr-auto */}
          <View className="bg-gray-200 rounded-3xl mr-auto"> 
            <View className="flex flex-row space-x-1 items-center">
              <TouchableOpacity className="bg-blue-400 rounded-3xl p-2">
                <Text className="text-gray-100 font-bold p-1">Message</Text>
              </TouchableOpacity>
              <TouchableOpacity className="p-2">
                <Text className="text-gray-400 font-bold p-1">Groups</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity className="ml-6 bg-gray-200 p-2 rounded-full">
              <BellIcon size={28} color={'#757575'} />
          </TouchableOpacity>
        </View>
      </View>
  )
}

export default HomeTop