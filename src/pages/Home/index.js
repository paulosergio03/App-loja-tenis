import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

import Shoes from '../../assets/component/Shoes';

export default function Home() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />
        
         {/* Stilização do texto Tênis  e icone*/}
          <View style={styles.textContainer}>
            <Text style={styles.text}>TÊNIS</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>•</Text>
            <Text style={[styles.text, {color: '#CECECF'}]}>MASCULINO</Text>
          <TouchableOpacity style={{position: 'absolute', right:0,
             alignSelf:'center'}}>
            
            <MaterialIcons
            name="filter-list"
            size={24}
            color="#000"
            />

          </TouchableOpacity>

          </View>

    </View>

     <View style={styles.line}>


     </View>

    <ScrollView>

      {/* Stilização do texto Lançamentos e espaço para adicionar os produtos da loja*/}

      <Text style={styles.text}>LANÇAMENTOS</Text>

      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/1.png')} cost="R$149,99">
          Nike Air max
        </Shoes>
        <Shoes img={require('../../assets/2.png')} cost="R$199,90">
          Nike Downshifter 10
        </Shoes>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/3.png')} cost="R$99,99">
        Tênis Adidas Runfalcon 
        </Shoes>
        <Shoes img={require('../../assets/4.png')} cost="R$199,90">
         Adidas Pureboost
        </Shoes>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/5.png')} cost="R$399,99">
         Adidas Grand Court 2.0
        </Shoes>
        <Shoes img={require('../../assets/6.png')} cost="R$299,90">
         Adidas Response Runner
        </Shoes>
      </View>

    </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
},
textContainer:{
  flexDirection: 'row',
  marginVertical:'5%',
  marginHorizontal:'5%'
},
text: {
  fontFamily:'Anton_400Regular',
  fontSize: 26,
  marginHorizontal: '1%'
},
line:{
  borderBottomColor: '#D8d8d8',
  borderBottomWidth: 2,

}
});