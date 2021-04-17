import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface WrappedGradientProps extends LinearGradientProps {}

const WrappedGradient: React.FC<WrappedGradientProps> = ({
  children,
  ...props
}) => <LinearGradient {...props}>{children}</LinearGradient>;

export default WrappedGradient;
