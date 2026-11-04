import {View} from 'react-native'

function FlexDirectionClass(){
return(
     <View style={{
        backgroundColor:"white",
        flex:1,
        flexDirection: "column" , // the main access is vertical access
        // flexDirection: "row",  // the main access is horizontol access with this the justifyContent will change to horizantal and alignItems will become vertical
        justifyContent:"center", // For Vertical 
        alignItems:"center" // For Horzontal
         }}>
          <View style={{
            width:100, 
            height:100, 
            backgroundColor:"tomato",
            }} />
          <View style={{width:100, height:100, backgroundColor:'red'}} />
          <View style={{width:100, height:100, backgroundColor:"blue"}}/>
        </View>
)
} 
export default FlexDirectionClass