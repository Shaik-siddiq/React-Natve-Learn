import {View} from 'react-native'


const FlexBoxClass = () => {
    /* 
    const flexContainerProperties = [
  {
    property: "display",
    definition: "Defines an element as a flex container.",
    values: ["flex", "inline-flex"],
    defaultValue: "block",
    example: "display: flex;"
  },
  {
    property: "flex-direction",
    definition: "Defines the direction in which child elements are arranged.",
    values: ["row", "row-reverse", "column", "column-reverse"],
    defaultValue: "row",
    example: "flex-direction: column;"
  },
  {
    property: "flex-wrap",
    definition: "Controls whether children remain on one line or wrap onto multiple lines.",
    values: ["nowrap", "wrap", "wrap-reverse"],
    defaultValue: "nowrap",
    example: "flex-wrap: wrap;"
  },
  {
    property: "justify-content",
    definition: "Controls how child elements are distributed along the main axis.",
    values: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly"
    ],
    defaultValue: "flex-start",
    example: "justify-content: center;"
  },
  {
    property: "align-items",
    definition: "Aligns child elements along the cross axis.",
    values: [
      "stretch",
      "flex-start",
      "flex-end",
      "center",
      "baseline"
    ],
    defaultValue: "stretch",
    example: "align-items: center;"
  },
  {
    property: "align-content",
    definition: "Controls the distribution of multiple flex lines along the cross axis.",
    values: [
      "flex-start",
      "flex-end",
      "center",
      "space-between",
      "space-around",
      "space-evenly",
      "stretch"
    ],
    defaultValue: "stretch",
    example: "align-content: center;"
  },
  {
    property: "gap",
    definition: "Defines spacing between child elements.",
    values: ["px", "rem", "%"],
    defaultValue: "0",
    example: "gap: 20px;"
  },
  {
    property: "flex",
    definition: "Controls how much available space a flex item occupies relative to its sibling flex items. In React Native, positive flex values distribute available space proportionally.",
    values: [0, 0.1, 0.2, 0.25, 0.5, 1, 1.5, 2, 3, 4],
    defaultValue: 0,
    examples: [
      {
        value: 0,
        definition: "Does not grow or shrink based on flex. Uses its own dimensions."
      },
      {
        value: 0.2,
        definition: "Receives 20% of the available proportional flex space when compared with a sibling having flex: 1."
      },
      {
        value: 0.5,
        definition: "Receives half the proportional flex space of a sibling having flex: 1."
      },
      {
        value: 1,
        definition: "Receives one proportional share of available space."
      },
      {
        value: 2,
        definition: "Receives twice the proportional share of a sibling having flex: 1."
      },
      {
        value: 3,
        definition: "Receives three proportional shares of available space."
      }
    ],
    example: "flex: 1;"
  }
];

    const flexItemProperties = [
  {
    property: "flex-grow",
    definition: "Defines how much a flex item can grow relative to other flex items when extra space is available.",
    values: ["0", "1", "2", "3"],
    defaultValue: "0",
    example: "flex-grow: 1;"
  },
  {
    property: "flex-shrink",
    definition: "Defines how much a flex item can shrink relative to other flex items when there is insufficient space.",
    values: ["0", "1", "2", "3"],
    defaultValue: "1",
    example: "flex-shrink: 0;"
  },
  {
    property: "flex-basis",
    definition: "Defines the initial main-axis size of a flex item before remaining space is distributed.",
    values: ["auto", "0", "px", "%", "rem", "content"],
    defaultValue: "auto",
    example: "flex-basis: 200px;"
  },
  {
    property: "flex",
    definition: "Shorthand property that combines flex-grow, flex-shrink, and flex-basis.",
    values: ["none", "auto", "initial", "1", "1 1 200px"],
    defaultValue: "0 1 auto",
    example: "flex: 1;"
  },
  {
    property: "align-self",
    definition: "Overrides the parent's align-items property for an individual flex item.",
    values: [
      "auto",
      "flex-start",
      "flex-end",
      "center",
      "baseline",
      "stretch"
    ],
    defaultValue: "auto",
    example: "align-self: center;"
  },
  {
    property: "order",
    definition: "Controls the visual ordering of a flex item without changing the actual HTML or DOM order.",
    values: ["integer"],
    defaultValue: "0",
    example: "order: 2;"
  }
];
    */
  //  if we give flex 1 for every container then it will divide equally with all boxes. and if we give 2 to one view then that view will take half of screen
    return(
        <View style={{backgroundColor:"white", flex:1}}>
          <View style={{backgroundColor:"tomato", flex:1}} />
          <View style={{backgroundColor:'red', flex:1}} />
          <View style={{backgroundColor:"blue", flex:1}}/>
        </View>
    )
}

export default FlexBoxClass