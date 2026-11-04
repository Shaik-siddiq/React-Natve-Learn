import { StyleSheet, Platform } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import ActivityIndicatorClass from './NativeClasses/ActivityIndicatorClass';
import ViewComponentClass from './NativeClasses/ViewComponentClass'
import FlexBoxClass from './NativeClasses/FlexBoxClass';
import FlexDirectionClass from './NativeClasses/FlexDirectionClass';
import FlexWrapClass from './NativeClasses/FlexWrapClass';
import PositionClass from './NativeClasses/PositionClass';
import DimensionsClass from './NativeClasses/DimensionsClass';
import ModalClass from './NativeClasses/ModalClass';
import ImageBackgroundClass from './NativeClasses/ImageBackgroundClass';

export default function App() {
  return (
    <>
       {/* <ActivityIndicatorClass />
      <FlexBoxClass />
    <FlexDirectionClass />
      <FlexWrapClass />
      <PositionClass />
      <DimensionsClass />
      <ModalClass />
      <ViewComponentClass /> */}
      <ImageBackgroundClass />
    </>
  );
}
