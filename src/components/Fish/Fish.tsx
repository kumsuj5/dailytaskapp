import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Easing,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface FishProps {
  target?: { x: number; y: number };
}

const Fish: React.FC<FishProps> = ({ target }) => {
  const posX = useRef(new Animated.Value(Math.random() * (width - 60))).current;
  const posY = useRef(new Animated.Value(Math.random() * (height - 60))).current;
  const rotation = useRef(new Animated.Value(0)).current;

  const lastPos = useRef({
    x: (posX as any)._value,
    y: (posY as any)._value,
  });

  /** 🧮 Angle calculation */
  const getAngle = (from: any, to: any) => {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    return Math.atan2(dy, dx);
  };

  /** 🐟 Smooth swim function */
  const swimTo = (x: number, y: number, duration = 6000) => {
    const angle = getAngle(lastPos.current, { x, y });

    lastPos.current = { x, y };

    Animated.parallel([
      Animated.timing(rotation, {
        toValue: angle,
        duration: 600,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(posX, {
        toValue: x,
        duration,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
      Animated.timing(posY, {
        toValue: y,
        duration,
        easing: Easing.inOut(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();
  };

  /** 🔄 Auto random swimming */
  useEffect(() => {
    const autoSwim = () => {
      const nextX = Math.random() * (width - 60);
      const nextY = Math.random() * (height - 60);

      swimTo(nextX, nextY, 7000 + Math.random() * 3000);

      setTimeout(autoSwim, 8000);
    };

    autoSwim();
  }, []);

  /** 👆 Touch follow (VERY smooth) */
  useEffect(() => {
    if (!target) return;

    swimTo(target.x - 95, target.y - 95, 2000);
  }, [target]);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [-Math.PI, Math.PI],
    outputRange: ['-100deg', '100deg'],
  });

  return (
    <Animated.View
      style={{
        position: 'absolute',
        transform: [
          { translateX: posX },
          { translateY: posY },
          { rotate: rotateInterpolate },
        ],
      }}
    >
      <Image
        source={require('./11423950.png')}
        style={{ width: 100, height: 100 }}
        resizeMode="contain"
      />
    </Animated.View>
  );
};

export default Fish;
