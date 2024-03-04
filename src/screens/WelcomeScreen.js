import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WelcomeScreen = () => {

  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Let's get Started
        </Text>
        <View style={styles.imageContainer}>
        <Image source={require("../../assets/images/what.avif")} style={styles.image3} />  
        <Image source={require("../../assets/images/witt.jpg")} style={styles.image} />
          <Image source={require("../../assets/images/Jesus.jpg")} style={styles.image2} />
        </View>
        <View style={styles.imageContainer}>
        
        </View>
       
        <View style={styles.signup}>
        <TouchableOpacity style={styles.button}
        onPress={()=> navigation.navigate('SignUp')}
        >
        <Text style={styles.buttonText}>SignUp</Text>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Text style={styles.alreadyHaveAccountText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInText}> Log In</Text>
        </TouchableOpacity>
      </View>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFBF4',
  },
  content: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 4,
  },
  title: {
    color: 'brown',
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 150,
  },
  image2: {
    width: 100,
    height: 90,
    borderRadius: 100,
  },
  image3: {
    width: 100,
    height: 90,
    borderRadius: 100,
  },
  button: {
    paddingVertical: 10,
    backgroundColor: '#FFD700',
    marginHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#707070',
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
  },
  alreadyHaveAccountText: {
    color: 'black',
    fontWeight: 'bold',
  },
  logInText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
