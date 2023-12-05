import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

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
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
        <View style={{width:80, height:80, backgroundColor: 'red' }}></View>
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