import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';

const SplashScreen = ({ navigation }) => {
  const rotation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start the rotation animation
    Animated.timing(rotation, {
      toValue: 1, // Rotate one full circle
      duration: 6000, // Duration of the animation (4 seconds)
      useNativeDriver: true, // Use native driver for better performance
    }).start(() => {
      // Navigate to the SignUp screen after the animation completes
      navigation.replace('SignUp');
    });
  }, [navigation, rotation]);

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'], // Rotate from 0 to 360 degrees
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.ellipse,
          { transform: [{ rotate: rotateInterpolation }] },
        ]}
      >
        <Text style={styles.text}>MTN</Text>
      </Animated.View>
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
  ellipse: {
    width: 120,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});
