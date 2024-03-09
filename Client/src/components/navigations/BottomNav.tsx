import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AlarmLayout from '../AlarmLayout';
import NotesLayout from '../NotesLayout';
import IonIcon from 'react-native-vector-icons/Ionicons';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, View } from 'react-native';

const Tab = createBottomTabNavigator();

const tabBarStyle = { 
  backgroundColor: '#1c1a18', 
  flexDirection: 'row',
  justifyContent: 'space-between',
  borderColor: "#582823",
  alignContent: "center",
  alignItems: "center",
  height: 60,
}

const BottomNav: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { 
          backgroundColor: '#1c1a18', 
          flexDirection: 'row',
          justifyContent: 'space-between',
          borderColor: "#582823",
          alignContent: "center",
          alignItems: "center",
          height: 60,
        },
        tabBarItemStyle: {
          width: "100%", 
          height: "100%",
          paddingVertical: 4
        },
        tabBarActiveTintColor: "#582823",
        tabBarInactiveTintColor: "#7a7878",
        tabBarIcon: ({ focused, color }) => {
          let iconName: string = "";
          let Icon = IonIcon;
          switch (route.name) {
            case 'Alarm':
              Icon = IonIcon;
              iconName = 'alarm-outline';
              break;
            case 'Notes':
              Icon = FontIcon;
              iconName = "sticky-note-o";
              break;
          }
          return <Icon name={iconName} size={25} color={color} />
        }
      })}
    >
      <Tab.Screen name="Alarm" component={AlarmLayout}
      />
      <Tab.Screen name="Notes" component={NotesLayout} />
    </Tab.Navigator>
  );
};


export default BottomNav;