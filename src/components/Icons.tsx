import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import Colors from '../constants/Colors';
import { StyleProp, ViewStyle } from 'react-native';

export const Icons = {
  MaterialCommunityIcons,
  MaterialIcons,
  Ionicons,
  Feather,
  FontAwesome,
  FontAwesome5,
  AntDesign,
  Entypo,
  SimpleLineIcons,
  Octicons,
  Foundation,
  EvilIcons,
  Fontisto,
}

export type IconType =
  | MaterialCommunityIcons
  | MaterialIcons
  | Ionicons
  | Feather
  | FontAwesome
  | FontAwesome5
  | AntDesign
  | Entypo
  | SimpleLineIcons
  | Octicons
  | Foundation
  | EvilIcons
  | Fontisto;

interface IconProps {
  type: Function;
  name: string;
  color?: string;
  size?: number;
  style?: StyleProp<ViewStyle>;
}

const Icon = ({ type, name, color, size, style = {} }: IconProps) => {
  const Tag = type;
  if (type) {
    return <Tag name={name} size={size} color={color} style={style} />
  }
  return null;
};

Icon.defaultProps = {
  color: Colors.text1,
  size: 24,
}

export default Icon;
