import { View } from "react-native";

export default function PositionClass() {
    /* 
    Definition: position: 'relative' positions an element relative to its original position in the layout. You can move it using top, bottom, left, and right without removing it from the normal layout flow.
- The element occupies its original space.
- Other components behave as if it is still in its original position.
- It can be moved from its original position.

    */
   /* 
   Position Absolute
Definition: position: 'absolute' removes an element from the normal layout flow and positions it relative to its nearest positioned ancestor (usually its parent).
- The element does not occupy space in the normal layout.
- Other components behave as if the element does not exist.
- You can position it using top, bottom, left, and right.
- Commonly used for badges, overlays, icons and floating buttons.
   */
  /* 
  What happens if you use position: 'absolute' without specifying top, bottom, left, or right?

Answer: The element is removed from normal layout flow, but it generally remains at its default static position within its containing block.
  */

/* 
const positionComparison = [
  {
    property: "Definition",
    relative: "Positions an element relative to its original position.",
    absolute: "Positions an element relative to its nearest positioned ancestor."
  },
  {
    property: "Layout Flow",
    relative: "Remains in the normal layout flow.",
    absolute: "Removed from the normal layout flow."
  },
  {
    property: "Original Space",
    relative: "Original layout space is preserved.",
    absolute: "Original layout space is not preserved."
  },
  {
    property: "Position Reference",
    relative: "Its original position in the layout.",
    absolute: "Nearest positioned ancestor."
  },
  {
    property: "Top",
    relative: "Moves the element down from its original position.",
    absolute: "Positions the element from the parent's top edge."
  },
  {
    property: "Bottom",
    relative: "Moves the element up from its original position.",
    absolute: "Positions the element from the parent's bottom edge."
  },
  {
    property: "Left",
    relative: "Moves the element right from its original position.",
    absolute: "Positions the element from the parent's left edge."
  },
  {
    property: "Right",
    relative: "Moves the element left from its original position.",
    absolute: "Positions the element from the parent's right edge."
  },
  {
    property: "Overlapping",
    relative: "Can overlap other elements when offset.",
    absolute: "Commonly used to overlap other elements."
  },
  {
    property: "Z-Index",
    relative: "Supports zIndex for stacking order.",
    absolute: "Supports zIndex for stacking order."
  },
  {
    property: "Default Value",
    relative: "Default positioning in React Native.",
    absolute: "Must be explicitly specified."
  },
  {
    property: "Common Use Cases",
    relative: "Small positional adjustments.",
    absolute: "Badges, overlays, floating buttons, image icons."
  }
];

export default positionComparison;
*/
    return (
        <>
            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ height: 100, width: 100, backgroundColor: 'red' }} />
                <View style={{
                    height: 100,
                    width: 100,
                    backgroundColor: 'green',
                    position:'relative', // The relative position is by default position
                    top: 30,
                    left: 20,
                }} />
                <View style={{ height: 100, width: 100, backgroundColor: 'tomato' }} />

            </View>
            <View>
                <View
                    style={{
                        width: 200,
                        height: 200,
                        bottom:50,
                        left:20,
                        backgroundColor: 'lightgray',
                        position: 'relative',
                    }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            backgroundColor: 'blue',
                            position: 'absolute', // position will take u out of flex 
                            top: 10,
                            right: 10,
                        }}
                    />
                </View>
            </View>

        </>
    )
}