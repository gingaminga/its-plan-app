import { View, type ViewProps } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedViewProps = {
  darkColor?: string;
  lightColor?: string;
} & ViewProps;

export function ThemedView({ darkColor, lightColor, style, ...otherProperties }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ dark: darkColor, light: lightColor }, 'background');

  return <View style={[{ backgroundColor }, style]} {...otherProperties} />;
}
