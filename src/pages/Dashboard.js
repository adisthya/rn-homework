/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator } from "react-navigation";
import Contacts from "./Contacts/Contacts";
import News from "./News/News";

export default createBottomTabNavigator({
  Contacts: Contacts,
  News: News
});
