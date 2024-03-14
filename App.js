import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';
import { Item } from './component/Item/Item';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductComponent } from './component/ProductComponent/ProductComponent/ProductComponent';
import * as ProductService from './service/ProductService'
function DetailsScreen({ navigation, route }) {
  const { username, password } = route.params
  useEffect(() => {
    const getAllProducts = async () => {
      const res = await ProductService.getAllProduct();
      return res?.data
    }
    getAllProducts();
  }, [])
  return (
    <>
      <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-between', display: 'flex', flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>ACCOUNT INFO :</Text>
        <Image source={require("./assets/heo.jpeg")} style={{ width: 30, height: 30 }} />
        <View style={{ borderColor: '#ccc', borderWidth: 2, borderRadius: 5, padding: 10 }}>
          <Text style={{ fontSize: 20 }}>Your username :{username}</Text>
          <Text style={{ fontSize: 20 }}>Your password :{password}</Text>
        </View>
      </View>
      <View>
        <Button title='LOGOUT' onPress={() => navigation.navigate('Home')}></Button>
      </View>
    </>
  );
}
export default function App() {
  const [products, setProducts] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleOnChangeUsername = (text) => {
    setUsername(text)
  }


  const Stack = createNativeStackNavigator();
  const [inputY, setInputY] = useState(0);
  const [stateX, setStateX] = useState(['a', 'b'])
  const randomValue = ['apple', 'banana', 'orange', 'ổi', 'dưa']
  function HomeScreen({ navigation }) {
    const handleSubmitForm = () => {
      if (username === '1' && password === '1') {
        navigation.navigate('Detail', { username: username, password: password });
      }

    }
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', padding: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 60 }}>LOGIN</Text>
        <View style={{ borderWidth: 3, borderColor: '#ccc', borderRadius: 5, width: '100%', height: 500, marginTop: 20 }}>
          <View style={{ borderColor: "#ccc", borderWidth: 1, borderRadius: 5, margin: 10, marginTop: 70 }}>
            <TextInput
              placeholder='Username'
              style={styles.inputText}
              value={username}
              onChangeText={((text) => handleOnChangeUsername(text))}
            />
          </View>
          <View style={{ borderColor: "#ccc", borderWidth: 1, borderRadius: 5, margin: 10 }}>
            <TextInput
              value={password}
              placeholder='Password'
              style={styles.inputText}
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <View style={{ margin: 10 }}>
            <Button title='LOGIN'
              onPress={handleSubmitForm}></Button>
          </View>
        </View>
      </View>
    );
  }
  const handleOnChangeText = (e) => {
    const number = Number.parseInt(e)
    setInputY(number)
  }
  const handleAddItems = (index, item) => {
    const newState = [...stateX]
    const random = Math.floor(Math.random(randomValue.length) * randomValue.length)
    newState.splice(index + 1, 0, randomValue[random])
    setStateX(newState)

  }
  const handleRemoveItems = (index) => {
    setStateX(prev => {
      return prev.filter((_, i) => {
        return i !== index;
      })
    })
  }
  let totalX = Number.parseInt(stateX.length)
  const handleClickButtonGreen = (index) => {
    totalX = inputY + index
    alert(totalX)
    stateX.length = totalX
  }
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Detail' component={DetailsScreen} />
          {/* <View style={styles.container}>
        <View style={styles.viewTop} >
          <View>
            <Image source={require('./assets/heo.jpeg')} style={styles.image} />
          </View>
          <View style={styles.viewChild}>
            <Text>Họ và tên: Nguyễn Mai Minh Duy</Text>
            <Text>MSSV: DH52100405</Text>
          </View>
        </View>
        <View style={styles.viewNav}>
          <TextInput
            style={styles.textInputY}
            value={inputY}
            onChangeText={(e) => handleOnChangeText(e)}
            placeholder='Nhap y..'
          />
          <Text style={{ marginRight: 30, fontWeight: 'bold', fontSize: 20 }}>
            X : {totalX}
          </Text>
        </View>
        <View style={styles.containerTwo}>
          {stateX.map((x, index) => {
            return (
              <>
                <Item
                  text={x} key={index}
                  totalX={totalX} inputY={inputY}
                  handleClickButtonGreen={() => handleClickButtonGreen(index)}
                  handleAddItems={() => handleAddItems(index)}
                  handleRemoveItems={() => handleRemoveItems(index)}
                  index={index} />
              </>
            )
          })}
        </View>
      </View> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
  viewTop: {
    marginTop: 30,
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'row'

  }, container: {
    display: 'flex',
    marginLeft: 30
  }, viewChild: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center'
  }, viewNav: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,

  }, textBorder: {
    width: 100,
    borderWidth: 1, // Độ dày của đường viền
    borderColor: 'black', // Màu sắc của đường viền
    borderRadius: 10, // Độ cong của góc (nếu muốn)
    padding: 10,

  }, containerTwo: {
    borderWidth: 1,
    height: 500,
    marginRight: 30,
    marginTop: 10
  }, textInputY: {
    borderWidth: 1,
    width: 200,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5

  }, inputText: {
    width: '100%',
    height: 50,
    padding: 10
  }
});
