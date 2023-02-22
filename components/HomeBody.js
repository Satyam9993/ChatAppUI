import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import MessageCard from './MessageCard'

const HomeBody = () => {
  const [contactUser, setContactUser] = useState([
    {
      id : 1,
      name : "Satyam katiyar",
      lastmsg : {
        msg : "Hi there, here is Satyam Hi there",
        time : "12:10"
      },
      unreadMsg : 3
    },
    {
      id : 2,
      name : "Akshay Chauhan",
      lastmsg : {
        msg : "Hi, are you there?",
        time : "23:10"
      },
      unreadMsg : 5
    },
    {
      id : 3,
      name : "Aditya",
      lastmsg : {
        msg : "Hi, SK",
        time : "3:10"
      },
      unreadMsg : 2
    },
    {
      id : 4,
      name : "Papa",
      lastmsg : {
        msg : "Share that photo",
        time : "3:00"
      },
      unreadMsg : 2
    },
    {
      id : 5,
      name : "Shashwat Chode",
      lastmsg : {
        msg : "hi",
        time : "13:10"
      },
      unreadMsg : 0
    },
    {
      id : 6,
      name : "Neeraj Verma",
      lastmsg : {
        msg : "No",
        time : "00:10"
      },
      unreadMsg : 0
    }
  ])
  return (
    <ScrollView>
        <View className="my-1">
            {contactUser.map((contact)=>(
              <MessageCard contact={contact} key={contact.id}/>
            ))}
        </View>
    </ScrollView>
  )
}

export default HomeBody