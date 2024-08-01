import Colors from '@/constants/Colors'
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'

export default function Layout(){
  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {fontFamily: 'Montserrat-SemiBold'}
    }}>
        <Tabs.Screen name='explore' options={{
            tabBarLabel: 'Explore',
            tabBarIcon: ({color, size, focused}) => <Ionicons name='search' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='wishlist' options={{
            tabBarLabel: 'Wishlist',
            tabBarIcon: ({color, size, focused}) => <Ionicons name='heart-outline' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='trips' options={{
            tabBarLabel: 'Trips',
            tabBarIcon: ({color, size, focused}) => <FontAwesome5 name='airbnb' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='inbox' options={{
            tabBarLabel: 'Inbox',
            tabBarIcon: ({color, size, focused}) => <MaterialCommunityIcons name='message-outline' color={color} size={size}/>
        }}/>
        <Tabs.Screen name='profile' options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size, focused}) => <Ionicons name='person-circle-outline' color={color} size={size}/>
        }}/>
    </Tabs>
  )
}