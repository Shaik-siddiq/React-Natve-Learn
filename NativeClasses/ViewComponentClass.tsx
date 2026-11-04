import {StyleSheet, View, Text } from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function ViewComponentClass(){
    return(
        <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
            <Text style={styles.text1}> Hi Aisha</Text>
            <Text style={styles.text1}>How are you?</Text>
        </View>
        
        <View style={styles.view1}>
            <View style={styles.insidView}></View>
            <Text>This is second view</Text>
        </View>
        </SafeAreaView>
    )
}

/* 
The CSS shorthand sequence (top, right, bottom, left) always resolves clockwise from the center, 
starting at the top (12 o'clock → 3 o'clock → 6 o'clock → 9 o'clock), often remembered with the mnemonic TRBL ("trouble").
const boxModelSides = [
  {
    side: "top",
    order: 1,
    clockPosition: "12 o'clock",
    directionFromCenter: "clockwise",
    marginProperty: "margin-top",
    paddingProperty: "padding-top",
    borderProperty: "border-top",
    description: "Space directly above the element's content/border"
  },
  {
    side: "right",
    order: 2,
    clockPosition: "3 o'clock",
    directionFromCenter: "clockwise",
    marginProperty: "margin-right",
    paddingProperty: "padding-right",
    borderProperty: "border-right",
    description: "Space directly to the right of the element's content/border"
  },
  {
    side: "bottom",
    order: 3,
    clockPosition: "6 o'clock",
    directionFromCenter: "clockwise",
    marginProperty: "margin-bottom",
    paddingProperty: "padding-bottom",
    borderProperty: "border-bottom",
    description: "Space directly below the element's content/border"
  },
  {
    side: "left",
    order: 4,
    clockPosition: "9 o'clock",
    directionFromCenter: "clockwise",
    marginProperty: "margin-left",
    paddingProperty: "padding-left",
    borderProperty: "border-left",
    description: "Space directly to the left of the element's content/border"
  }
];
*/

/* 
const boxModelDifferences = [
  {
    feature: "Location",
    padding: "Inside the border (between content and border)",
    margin: "Outside the border (between border and neighboring elements)"
  },
  {
    feature: "Background",
    padding: "Shows the element's background color or image",
    margin: "Always transparent (shows the parent container's background)"
  },
  {
    feature: "Click Target",
    padding: "Increases the clickable/tappable area of the element",
    margin: "Does not register clicks or hover states on the element"
  },
  {
    feature: "Collapsing",
    padding: "Never collapses; always cumulative",
    margin: "Vertical margins between adjacent block elements can collapse into a single margin"
  },
  {
    feature: "Negative Values",
    padding: "Not allowed (negative values are invalid CSS)",
    margin: "Allowed (e.g., margin-top: -10px pulls an element upward or overlaps elements)"
  },
  {
    feature: "box-sizing Impact",
    padding: "Included inside width/height when using box-sizing: border-box",
    margin: "Never included in width or height calculations regardless of box-sizing"
  }
];
*/

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center"
    },
    view1:{
        height:90,
        width:200,
        backgroundColor:"white",
        justifyContent:"center",
        padding:10,
        margin:10
    },
    text1:{
        fontSize:25
    },

    insidView:{
        height:30,
        width:100,
        marginTop:8,
        marginBottom:20,
        marginLeft:20,
        marginRight:10,
        backgroundColor:"aqua"
    }
})