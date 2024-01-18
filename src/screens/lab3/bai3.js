import React from 'react';
import {Alert, Modal, Pressable, Text, View} from 'react-native';
import { styles } from './style';

const MyBai3 = () => {
  return (
    <View style = {styles.centeredView}>
        <Modal
            animationType = "slide"
            transparent = {true}
            visible = {modalVisible}
            onRequestClose = {() => {
                Alert.alert("Modal đã bị đóng.");
                setModalVisible(!modalVisible);
            }}>
            <View style = {styles.centeredView}>
                <View style = {styles.modalView}>
                    <Text style = {styles.modalText}>Hello World!</Text>
                    <Pressable
                        style = {[styles.button, styles.buttonClose]}
                        onPress = {() => setModalVisible(!modalVisible)}>
                        <Text style = {styles.textStyle}>Ẩn modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            style = {[styles.button, styles.buttonOpen]}
            onPress = {() => setModalVisible(true)}>
            <Text style = {styles.textStyle}>Hiện modal</Text>
        </Pressable>
    </View>
  );
};

export default MyBai3;