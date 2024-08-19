import { Image } from 'react-native';
import ContactScreen from '../components/appTabs/ContactScreen';
import DetailsScreen from '../components/appTabs/DetailsScreen';
import HomeScreen from '../components/appTabs/HomeScreen';
import ProfileScreen from '../components/appTabs/ProfileScreen';

export default routes = [
  {tabBarIcon: <Image source={require('../../assets/images/home.png')} style={{width: 20, height: 20}}/>, 
  name: 'Home', component: HomeScreen},
  {tabBarIcon: <Image source={require('../../assets/images/user.png')} style={{width: 20, height: 20}}/>, 
  name: 'Profile', component: ProfileScreen},
  {tabBarIcon: <Image source={require('../../assets/images/home.png')} style={{width: 20, height: 20}}/>, 
  name: 'Details', component: DetailsScreen},
  {tabBarIcon: <Image source={require('../../assets/images/home.png')} style={{width: 20, height: 20}}/>, 
  name: 'Contact', component: ContactScreen},
];
