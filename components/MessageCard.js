import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

const MessageCard = ({contact}) => {
  return (
    <TouchableOpacity className="flex flex-row items-center bg-[#ededed] m-2 rounded-lg justify-between">
      <View className="flex flex-row items-center">
        <View className="p-2 ml-1">
          <Image
            source={{
              uri: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1677043222~exp=1677043822~hmac=2fe58f9fd73438cde52777d25513dea80cc3bf9315872e1f52a0d0f431de45eb',
            }}
            className="h-14 w-14 rounded-full"
          />
        </View>
        <View className="ml-2">
          <Text className="text-gray-800 font-bold text-base">{contact.name}</Text>
          <Text className="text-gray-400 mt-1" numberOfLines={1}>{contact.lastmsg.msg.length >= 30 ?contact.lastmsg.msg.slice(0, 30)+"..." :contact.lastmsg.msg.slice(0, 30) }</Text>
        </View>
      </View>
      <View className="m-2">
          <Text className="text-gray-400 fond-bold">10:20</Text>
          <View className={`${contact.unreadMsg && "bg-red-400"} h-5 w-5 items-center justify-center rounded-full mt-1`}>
            <Text className="text-gray-50 font-xs font-bold">{contact.unreadMsg === 0? "": contact.unreadMsg}</Text>
          </View>
        </View>
    </TouchableOpacity>
  );
};

export default MessageCard;
