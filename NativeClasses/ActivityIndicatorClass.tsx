import {StyleSheet, ActivityIndicator} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

export default function ActivityIndicatorClass(){
    return(
    <>   
    <ActivityIndicator size={'large'} color={'blue'} />
    <ActivityIndicator size={'small'} color={'green'} />
    </>
    )
}