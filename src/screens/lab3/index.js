import React, { useState } from 'react';
import {Text, TextInput, View} from 'react-native';
import { styles } from './style';

const MyLab3 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <TextInput
        value = {name}
        onChangeText = {setName}
        placeholder = "Nhập họ tên"
        style = {styles.tipStyle}/>

      <TextInput
        value = {phone}
        onChangeText = {setPhone}
        placeholder = "Nhập số điện thoại"
        keyboardType = "phone-pad"
        style = {styles.tipStyle}/>

      <TextInput
        value = {password}
        onChangeText = {setPassword}
        placeholder = "Nhập mật khẩu"
        secureTextEntry = {true}
        style = {styles.tipStyle}/>
        
      <View style = {styles.container}>
        {/* dòng 1 */}
        <Text style = {styles.baseText}>
          Em vào đời bằng {' '}
        <Text style = {[styles.boldText, styles.red]}>vang đỏ</Text>{' '}
          anh vào đời bằng {' '}
        <Text style = {[styles.boldText, styles.yellow]}>nước trà</Text>
        </Text>

        {/* dòng 2 */}
        <Text style = {styles.baseText}>
          Bằng cơn mưa thơm {' '}
        <Text style = {[styles.boldText, styles.zoomBig, styles.italicText]}>
          mùi đất{' '}
        </Text> {' '}
          và{' '}
        <Text style = {[styles.italicText, styles.zoomSml]}>bằng hoa dại mọc trước nhà</Text>
        </Text>

        {/* dòng 3 */}
        <Text
          style = {[
            styles.baseText,
            styles.italicText,
            styles.boldText,
            styles.gray,
          ]}>
            Em vào đời bằng kế hoạch anh vào đời bằng mộng mơ
        </Text>

        {/* dòng 4 */}
        <Text style = {[styles.baseText]}>
          Lý trí em là{' '}
        <Text style = {[styles.line4]}>
          {' '}
          công cụ{' '}
        </Text>

          còn trái tim anh là
        <Text style = {[styles.line4]}>
          {' '}
          động cơ{' '}
        </Text>
        </Text>

        {/* dòng 5 */}
        <Text style = {[styles.baseText, styles.right]}>
          Em vào đời nhiều đồng nghiệp anh vào đời nhiều thân tình
        </Text>

        {/* dòng 6 */}
        <Text style = {[
          styles.baseText,
          styles.line6,
        ]}>
          Anh chỉ muốn chân mình đạp đất{' '} không muốn đạp ai dưới chân mình
        </Text>

        {/* dòng 7 */}
        <Text style = {[
          styles.baseText,
          styles.black,
        ]}>
          Em vào đời bằng <Text style = {[styles.white]}>mây trắng</Text>{' '}
          em vào đời bằng <Text style = {[styles.yellow]}>nắng xanh</Text>
        </Text>

        {/* dòng 8 */}
        <Text style = {[
          styles.baseText,
          styles.black,
        ]}>
          Em vào đời bằng <Text style = {[styles.yellow]}>đại lộ</Text> {' '}
          và con đường đó giờ <Text style = {[styles.white]}>vắng anh</Text>
        </Text>
      </View>
    </View>
  );
};

export default MyLab3;