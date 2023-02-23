import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  ChatBubbleOvalLeftEllipsisIcon,
  MagnifyingGlassIcon,
  PlusIcon,
  PhoneIcon,
  UserIcon,
} from 'react-native-heroicons/outline';

const FooterNav = () => {
  return (
    <View className="absolute bottom-0 w-full z-50">
      <View className="flex flex-row items-center justify-center">
        <Text className="text-gray-500 text-xs">
          Your personal message are{' '}
        </Text>
        <Text className="text-cyan-600 text-xs">end-end-to-encrypted</Text>
      </View>
      <View className="flex flex-row justify-center ml-[10%] mr-[10%] items-center">
        <View className="flex flex-row justify-between mr-4">
          <TouchableOpacity>
            <ChatBubbleOvalLeftEllipsisIcon size={30} color={'#878787'} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-4">
            <MagnifyingGlassIcon size={30} color={'#878787'} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="bg-blue-400 p-2 rounded-full mb-4">
          <PlusIcon size={30} color={'#FFFFFFFF'} />
        </TouchableOpacity>
        <View className="flex flex-row justify-between ml-4">
          <TouchableOpacity>
            <PhoneIcon size={30} color={'#878787'} />
          </TouchableOpacity>
          <TouchableOpacity className="ml-4">
            <UserIcon size={30} color={'#878787'} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default FooterNav;
