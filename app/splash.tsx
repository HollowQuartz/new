import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace('/_menu/home');
    }, 2500); // 2.5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <LinearGradient
      colors={['#B3E5FC', '#E1F5FE']}
      style={styles.container}
    >
      <Animated.Text
        entering={FadeIn.duration(1500)}
        style={styles.text}
      >
        E-LEARNING
      </Animated.Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
});
