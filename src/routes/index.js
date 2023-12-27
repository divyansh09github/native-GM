import ContactScreen from "../components/ContactScreen";
import DetailsScreen from "../components/DetailsScreen";
import HomeScreen from "../components/HomeScreen";
import ProfileScreen from "../components/ProfileScreen";

export default routes = [
    {name: 'Home', component: HomeScreen},
    {name: 'Profile', component: ProfileScreen},
    {name: 'Details', component: DetailsScreen},
    {name: 'Contact', component: ContactScreen},
  ];