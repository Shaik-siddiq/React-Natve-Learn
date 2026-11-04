import {View} from 'react-native'

function FlexWrapClass(){
return(
     <View style={{
        backgroundColor:"white",
        flex:1,
        flexDirection: "row",  // the main access is horizontol access with this the justifyContent will change to horizantal and alignItems will become vertical
        alignItems:"center", // For Vertical
        alignContent:"center",// For horizontal
        flexWrap:"wrap"
         }}>
          <View style={{
            width:90, 
            height:90, 
            backgroundColor:"tomato",
            }} />
          <View style={{width:90, height:90, backgroundColor:'red'}} />
          <View style={{width:90, height:90, backgroundColor:"blue"}}/>
          <View style={{width:90, height:90, backgroundColor:"grey"}}/>
          <View style={{width:90, height:90, backgroundColor:"orange"}}/>
        </View>
)
} 
export default FlexWrapClass