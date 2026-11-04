import { Button, View, Text, Modal } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { scale } from 'react-native-size-matters'
import AntDesign from '@expo/vector-icons/AntDesign';

const ModalClass = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <SafeAreaView style={{ backgroundColor: 'gold', flex: 1, justifyContent: 'center' }}>
            <View>
                <Button title='Show modal' onPress={() => setModalVisible(true)} />
            </View>
            <Modal visible={modalVisible} animationType="slide" transparent={true}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: 'lightblue', height: scale(300), width: scale(300), padding: 10, justifyContent: 'center' }}>
                        <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }}>
                            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                                Modal is opened
                            </Text>
                            {/* <Button color={'black'} title='X' onPress={() => setModalVisible(false)} /> */}
                            <AntDesign name="close-circle" size={24} color="black" onPress={() => setModalVisible(false)} />
                        </View>
                    </View>
                </View>
            </Modal>

        </SafeAreaView>
    )
}
export default ModalClass