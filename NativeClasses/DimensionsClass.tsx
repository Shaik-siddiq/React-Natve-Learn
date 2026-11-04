import { View, Text , Dimensions, useWindowDimensions} from "react-native";

/* 
In React Native, mobile screen height and width can be handled in multiple ways. Unlike web CSS, 
React Native does not use all CSS properties directly. It provides its own layout and dimension APIs.

Let's divide this into four important areas:
1. Percentage-based height and width.
2. React Native Dimensions API and built-in properties.
3. Third-party libraries for responsive layouts.
4. CSS responsiveness concepts compared with React Native.
*/

const DimensionsClass = () => {
    // React Native provides a built-in Dimensions API to get screen width and height.
    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    console.log("Window Width:", + " " + WindowWidth)
    console.log(`Window Height: ${WindowHeight}`)
    console.log(`Screen Height: ${Dimensions.get('screen').height}`)
        console.log(`Screen Width: ${Dimensions.get('screen').width}`)

    /* 
    useWindowDimensions()
    This is generally the recommended approach for responsive components because it automatically updates when the window size changes,
     such as during rotation or resizing.
    */
   const {height, width, scale, fontScale} = useWindowDimensions()

return(
    <View style={{ flex: 1, width:width, height:height, backgroundColor:'#9acd32' }}>
        {/* React Native supports percentage values for width, height, top, bottom, left, and right. 
        Important: Percentage dimensions are calculated relative to the parent container, 
        not automatically relative to the entire mobile screen. */}
        <View style={{ width: '100%', height: '50%' }}>
  <Text>Responsive Container</Text>
</View>

 <View>
      <Text>Width: {width}</Text>
      <Text>Height: {height}</Text>
      <Text>Scale: {scale}</Text>
      <Text>Font Scale: {fontScale}</Text>
    </View>
    </View>
)
}
export default DimensionsClass

/* 
const dimensionProperties = [
  {
    property: 'width',
    definition: 'Defines the width of a component.',
    example: "width: '100%'"
  },
  {
    property: 'height',
    definition: 'Defines the height of a component.',
    example: "height: '50%'"
  },
  {
    property: 'minWidth',
    definition: 'Defines the minimum width of a component.',
    example: 'minWidth: 100'
  },
  {
    property: 'maxWidth',
    definition: 'Defines the maximum width of a component.',
    example: 'maxWidth: 400'
  },
  {
    property: 'minHeight',
    definition: 'Defines the minimum height of a component.',
    example: 'minHeight: 100'
  },
  {
    property: 'maxHeight',
    definition: 'Defines the maximum height of a component.',
    example: 'maxHeight: 500'
  },
  {
    property: 'aspectRatio',
    definition: 'Maintains the width-to-height ratio of a component.',
    example: 'aspectRatio: 16 / 9'
  },
  {
    property: 'flex',
    definition: 'Controls how a component grows or occupies available space.',
    example: 'flex: 1'
  },
  {
    property: 'padding',
    definition: 'Adds internal spacing around component content.',
    example: 'padding: 16'
  },
  {
    property: 'margin',
    definition: 'Adds external spacing around a component.',
    example: 'margin: 10'
  }
];

export default dimensionProperties;
*/

/* 
const responsivenessComparison = [
  {
    concept: "Width",
    css: "width: 100%;",
    reactNative: "width: '100%'",
    purpose: "Occupies 100% of the parent width."
  },
  {
    concept: "Height",
    css: "height: 50%;",
    reactNative: "height: '50%'",
    purpose: "Occupies 50% of the parent height."
  },
  {
    concept: "Viewport Width",
    css: "width: 100vw;",
    reactNative: "useWindowDimensions().width",
    purpose: "Gets the available window width."
  },
  {
    concept: "Viewport Height",
    css: "height: 100vh;",
    reactNative: "useWindowDimensions().height",
    purpose: "Gets the available window height."
  },
  {
    concept: "Media Queries",
    css: "@media (max-width: 600px)",
    reactNative: "Conditional styling using useWindowDimensions()",
    purpose: "Changes layout based on screen width."
  },
  {
    concept: "Flex Direction",
    css: "flex-direction: row;",
    reactNative: "flexDirection: 'row'",
    purpose: "Arranges children horizontally."
  },
  {
    concept: "Flex Direction Column",
    css: "flex-direction: column;",
    reactNative: "flexDirection: 'column'",
    purpose: "Arranges children vertically."
  },
  {
    concept: "Minimum Width",
    css: "min-width: 200px;",
    reactNative: "minWidth: 200",
    purpose: "Prevents a component from becoming too narrow."
  },
  {
    concept: "Maximum Width",
    css: "max-width: 500px;",
    reactNative: "maxWidth: 500",
    purpose: "Prevents a component from exceeding a maximum width."
  },
  {
    concept: "Minimum Height",
    css: "min-height: 100px;",
    reactNative: "minHeight: 100",
    purpose: "Maintains minimum component height."
  },
  {
    concept: "Maximum Height",
    css: "max-height: 500px;",
    reactNative: "maxHeight: 500",
    purpose: "Restricts component maximum height."
  },
  {
    concept: "Aspect Ratio",
    css: "aspect-ratio: 16 / 9;",
    reactNative: "aspectRatio: 16 / 9",
    purpose: "Maintains width-to-height proportions."
  },
  {
    concept: "Gap",
    css: "gap: 16px;",
    reactNative: "gap: 16",
    purpose: "Creates spacing between children."
  },
  {
    concept: "Position Absolute",
    css: "position: absolute;",
    reactNative: "position: 'absolute'",
    purpose: "Positions an element outside normal layout flow."
  },
  {
    concept: "Font Size",
    css: "font-size: 16px;",
    reactNative: "fontSize: 16",
    purpose: "Controls text size."
  },
  {
    concept: "Display None",
    css: "display: none;",
    reactNative: "Conditional rendering or display: 'none'",
    purpose: "Hides an element."
  },
  {
    concept: "Grid Layout",
    css: "display: grid;",
    reactNative: "Flexbox or FlatList with numColumns",
    purpose: "Creates multi-column layouts."
  },
  {
    concept: "Orientation",
    css: "@media (orientation: landscape)",
    reactNative: "useWindowDimensions() with width and height",
    purpose: "Adjusts layouts based on orientation."
  }
];

export default responsivenessComparison;
*/

/* 
const mediaQueryComparison = [
  {
    scenario: "Mobile Devices",
    cssMediaQuery: "@media (max-width: 480px)",
    reactNativeApproach: "width <= 480",
    purpose: "Apply styles for smaller screens."
  },
  {
    scenario: "Tablet Devices",
    cssMediaQuery: "@media (min-width: 481px) and (max-width: 1024px)",
    reactNativeApproach: "width > 480 && width <= 1024",
    purpose: "Apply tablet-specific layouts."
  },
  {
    scenario: "Desktop Devices",
    cssMediaQuery: "@media (min-width: 1025px)",
    reactNativeApproach: "width > 1024",
    purpose: "Apply larger-screen layouts."
  },
  {
    scenario: "Landscape Orientation",
    cssMediaQuery: "@media (orientation: landscape)",
    reactNativeApproach: "width > height",
    purpose: "Change layout for landscape mode."
  },
  {
    scenario: "Portrait Orientation",
    cssMediaQuery: "@media (orientation: portrait)",
    reactNativeApproach: "height >= width",
    purpose: "Change layout for portrait mode."
  },
  {
    scenario: "High Resolution",
    cssMediaQuery: "@media (min-resolution: 2dppx)",
    reactNativeApproach: "PixelRatio.get() >= 2",
    purpose: "Detect higher pixel density screens."
  },
  {
    scenario: "Accessibility Font Scaling",
    cssMediaQuery: "@media (prefers-reduced-motion: reduce)",
    reactNativeApproach: "useWindowDimensions().fontScale",
    purpose: "Respond to user display or accessibility settings."
  }
];

export default mediaQueryComparison;
*/

/* 
const responsiveApproaches = [
  {
    approach: "Flexbox",
    reactNativeAPI: "flex, flexDirection, justifyContent, alignItems",
    whenToUse: "When arranging components horizontally, vertically or distributing available space.",
    example: "flex: 1, flexDirection: 'row'",
    recommendation: "Use as the primary layout system."
  },
  {
    approach: "Percentage Dimensions",
    reactNativeAPI: "width: '100%', height: '50%'",
    whenToUse: "When component dimensions should depend on parent dimensions.",
    example: "width: '90%'",
    recommendation: "Prefer percentages over fixed widths when appropriate."
  },
  {
    approach: "useWindowDimensions",
    reactNativeAPI: "useWindowDimensions()",
    whenToUse: "When the component needs actual window width or height and must react to resizing.",
    example: "const { width, height } = useWindowDimensions()",
    recommendation: "Prefer this over Dimensions.get() inside responsive components."
  },
  {
    approach: "Dimensions API",
    reactNativeAPI: "Dimensions.get('window')",
    whenToUse: "When you need a one-time or non-reactive dimension measurement.",
    example: "Dimensions.get('window').width",
    recommendation: "Use sparingly for dynamic layouts; prefer useWindowDimensions."
  },
  {
    approach: "Conditional Styling",
    reactNativeAPI: "Ternary operator and conditional styles",
    whenToUse: "When different screen widths require different component styles.",
    example: "width < 600 ? styles.mobile : styles.tablet",
    recommendation: "Use for simple breakpoint-based changes."
  },
  {
    approach: "minWidth and maxWidth",
    reactNativeAPI: "minWidth, maxWidth",
    whenToUse: "When preventing components from becoming too small or too large.",
    example: "width: '90%', maxWidth: 500",
    recommendation: "Useful for responsive forms and cards."
  },
  {
    approach: "Aspect Ratio",
    reactNativeAPI: "aspectRatio",
    whenToUse: "When images, videos or cards need to maintain proportions.",
    example: "aspectRatio: 16 / 9",
    recommendation: "Prefer this over manually calculating both width and height."
  },
  {
    approach: "ScrollView",
    reactNativeAPI: "ScrollView",
    whenToUse: "When content may exceed the available screen height.",
    example: "flex: 1",
    recommendation: "Use for smaller, non-virtualized content."
  },
  {
    approach: "FlatList",
    reactNativeAPI: "FlatList, numColumns",
    whenToUse: "When displaying large lists or responsive grids.",
    example: "numColumns={2}",
    recommendation: "Prefer FlatList over ScrollView for large datasets."
  },
  {
    approach: "Safe Area",
    reactNativeAPI: "react-native-safe-area-context",
    whenToUse: "When content must avoid notches, status bars and home indicators.",
    example: "SafeAreaView",
    recommendation: "Use safe-area-context for production applications."
  },
  {
    approach: "Scaling Libraries",
    reactNativeAPI: "react-native-size-matters",
    whenToUse: "When you want consistent scaling of dimensions and spacing across devices.",
    example: "scale(20), verticalScale(20)",
    recommendation: "Optional; do not scale everything blindly."
  },
  {
    approach: "Orientation Handling",
    reactNativeAPI: "useWindowDimensions()",
    whenToUse: "When layouts should change between portrait and landscape.",
    example: "width > height ? 'row' : 'column'",
    recommendation: "Use for tablets, dashboards and landscape screens."
  }
];

export default responsiveApproaches;
*/