import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

const SignUpScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/image/bg.png')}
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <Image
          source={require('../assets/image/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.logoText}>MTN</Text>
      </View>
      <View style={styles.overlay}>
        <Text style={styles.text}>Enter your phone number</Text>
        <View style={styles.numberContainer}>
          <View style={styles.countryCodeContainer}>
            <Text style={styles.countryCodeText}>+233</Text>
          </View>
          <TextInput
            style={styles.textInput}
            placeholder="2XXXXXXXXX"
            keyboardType="numeric" // Allows only numeric input
            maxLength={10} // Limits input length (e.g., Ghana phone numbers)
            value={phoneNumber}
            onChangeText={(text) => {
              // Allow only numeric characters
              const numericValue = text.replace(/[^0-9]/g, '');
              setPhoneNumber(numericValue);
            }}
          />
        </View>

        {/* button */}
        <TouchableOpacity>
            <View style={styles.btn}>
                <Text>Verify your phone number</Text>

            </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    padding: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    marginBottom: 15,
  },
  logoContainer: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  logoText: {
    position: 'absolute',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000',
  },
  numberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20
  },
  countryCodeContainer: {
    width: 60,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    marginRight: 10,
    backgroundColor: '#fff'
  },
  countryCodeText: {
    fontSize: 18,
    color: '#000',
  },
  textInput: {
    flex: 1,
    height: 50,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 18,
    color: '#000',
    backgroundColor: '#fff'
  },
  btn:{
    backgroundColor: '#FFCB05',
    width: 330,
    height: 58,
    borderRadius: 20,
    marginTop: 10,
    padding:20
  }
});
