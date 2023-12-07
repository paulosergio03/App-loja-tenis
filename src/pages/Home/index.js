import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import Shoes from '../../assets/component/Shoes';

export default function Home() {

  const navigation = useNavigation();

 return (
   <View style={styles.container}>
    <View style={styles.header}>
    <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />
        
         {/* Stilização dos textos Tênis e icones*/}
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

        {/* Usando navigation para direcionar o produto para Detail*/}

        <Shoes img={require('../../assets/1.png')} cost="R$149,99" onClick={()=> navigation.navigate('Detail')}>
          Nike Air max
        </Shoes>
        <Shoes img={require('../../assets/2.png')} cost="R$199,90" onClick={()=> navigation.navigate('Detail')}>
          Nike Downshifter 10
        </Shoes>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/3.png')} cost="R$499,99" onClick={()=> alert('CLICOU')}>
        Tênis Adidas Runfalcon 
        </Shoes>
        <Shoes img={require('../../assets/4.png')} cost="R$199,90" onClick={()=> alert('CLICOU')}>
         Adidas Pureboost
        </Shoes>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/5.png')} cost="R$399,99" onClick={()=> alert('CLICOU')}>
         Adidas Grand Court 2.0
        </Shoes>
        <Shoes img={require('../../assets/6.png')} cost="R$299,90" onClick={()=> alert('CLICOU')}>
         Adidas Response Runner
        </Shoes>
      </View>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/07.png')} cost="R$359,99" onClick={()=> alert('CLICOU')}>
        Tênis Adidas Runfalcon 
        </Shoes>
        <Shoes img={require('../../assets/8.png')} cost="R$199,90" onClick={()=> alert('CLICOU')}>
         Adidas Pureboost
        </Shoes>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-around' }}>
        <Shoes img={require('../../assets/9.png')} cost="R$199,99" onClick={()=> alert('CLICOU')}>
         Puma Escaper Mesh
        </Shoes>
        <Shoes img={require('../../assets/10.png')} cost="R$239,90" onClick={()=> alert('CLICOU')}>
         Puma Unissex Flyer 
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