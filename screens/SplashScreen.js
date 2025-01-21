import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import  {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
    useEffect(()=>{
        const timer = setTimeout(() =>{
            navigation.replace('SignUp');

        }, 4000);
        return () => clearTimeout(timer);

        
    }, [navigation]);
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.text}>MTN</Text>
      </View>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcb05',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120, // Circle diameter
    height: 66, // Circle diameter
    borderRadius: 100, // Half of the diameter for a perfect circle   
    borderWidth: 3, 
    borderColor: '#000', // Border color
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally

    
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000', // Text color
  },
});
