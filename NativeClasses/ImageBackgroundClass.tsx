import { ImageBackground, Text } from 'react-native'

const ImageBackgroundClass = () => {
    /* In React Native, ImageBackground supports both local images using require() and remote images using uri.

    The ImageBackground component is useful when you want to display an image behind other components,
    such as text, buttons, or containers. */
    /* 
    recommendation To Learn:  source, style, imageStyle, resizeMode, onLoad, and onError first. These are useful in everyday React Native development.
    */
   /* 
   const resizeModeOptions = [
  {
    value: 'cover',
    description: 'Fills the container completely; may crop the image.'
  },
  {
    value: 'contain',
    description: 'Displays the complete image while maintaining aspect ratio.'
  },
  {
    value: 'stretch',
    description: 'Stretches the image to fit the container dimensions; may distort the image.'
  },
  {
    value: 'repeat',
    description: 'Repeats the image to fill the container (platform support may vary).'
  },
  {
    value: 'center',
    description: 'Displays the image centered without scaling it up.'
  },
  {
    value: 'none',
    description: 'Displays the image at its original size without scaling.'
  }
];
   */
    return (
        <ImageBackground
            source={require("../assets/luffy.png")}
            alt='luffy Image'
            resizeMode="cover"
            imageStyle={{
                borderRadius: 20
            }}
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onLoad={() => console.log('Image loaded')}
            onError={() => console.log('Image failed')}

        >
            <Text style={{
                color: 'white',
                fontSize: 24,
                fontWeight: 'bold',
            }}>Luffy Image</Text>
        </ImageBackground>
    )
}
export default ImageBackgroundClass