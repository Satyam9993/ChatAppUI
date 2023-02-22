import { SafeAreaView } from 'react-native'
import React,  {useLayoutEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import HomeTop from '../components/HomeTop';
import HomeBody from '../components/HomeBody';

const HomeScreen = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown : false
    })
  }, [])
  return (
    <SafeAreaView>
      <HomeTop />
      <HomeBody />
    </SafeAreaView>
  )
}

export default HomeScreen;