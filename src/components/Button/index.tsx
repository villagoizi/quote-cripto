import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './button.style';

interface ButtonProps {
  onPress: () => void;
  value?: string;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  value,
  onPress,
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        onPress={!disabled ? onPress : () => {}}>
        <Text style={styles.text}>{children || value} </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
