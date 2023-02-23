import { SafeAreaView } from 'react-native'
import React,  {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeTop from '../components/HomeTop';
import HomeBody from '../components/HomeBody';
import FooterNav from '../components/FooterNav';

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false
    })
  }, [])
  return (
    <SafeAreaView className="h-full">
      <FooterNav />
      <HomeTop />
      <HomeBody />
    </SafeAreaView>
  )
}

export default HomeScreen;