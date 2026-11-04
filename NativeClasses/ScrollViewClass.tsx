import {Text, Alert, Image, Pressable, TouchableOpacity, Button, ScrollView, StyleSheet, Platform} from 'react-native'
import { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Platform.OS ==='ios'? 'grey':'#212121',
    color:'#fff'
  },
  text: {
    fontSize:30,
    fontWeight:'bold',
    color: '#fff',
  },
  text1: {
    fontSize:30,
    color: '#fff',
  },
  text2: {
    fontSize:30,
    color: 'red',
    textDecorationLine: 'underline',
  },
  image: {
    width: 100,
    height: 100,
  },
  image1: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

const ScrollViewClass = ()=>{
  const [blurImage, setBlurImage] = useState(true);
return(
    <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.text}>Hi Siddiq</Text>
          <Text style={styles.text1} numberOfLines={3}>Lorem ipsum dolor sit,<Text style={styles.text2} onPress={() => Alert.alert('hi sid')}>Press Me</Text> amet consectetur adipisicing elit. Illum doloribus rerum consequuntur, unde ullam et consectetur obcaecati dolor neque tempore commodi pariatur reiciendis itaque amet libero a aliquid, expedita quas?</Text>
          <Pressable onPress={() => Alert.alert('splash icon get pressed')}> <Image source={(require('./assets/splash-icon.png'))} style={styles.image} /></Pressable>
          <TouchableOpacity onPress={() => setBlurImage(!blurImage)}> <Image source={{uri:'https://picsum.photos/200/300'}} style={styles.image1} blurRadius={blurImage ? 10 : 0} /></TouchableOpacity>
          <Button title="press button" onPress={()=> Alert.alert('button pressed')} />
              <Text style={styles.text}> the platform dot OS tells us we are in which device and we are in now {Platform.OS === "android"? "Android":"IOS"} </Text>
          </ScrollView>
)

}

export default ScrollViewClass