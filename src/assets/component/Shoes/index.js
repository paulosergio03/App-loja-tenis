import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function Shoes() {
 return (
    <TouchableOpacity>
     <Image
     source={require('../../../assets/1.png')}
     />
   </TouchableOpacity>
  );
}