/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export function useThemeColor(
  properties: { dark?: string; light?: string },
  colorName: keyof typeof Colors.dark & keyof typeof Colors.light,
) {
  const theme = useColorScheme() ?? 'light';
  const colorFromProperties = properties[theme];

  return colorFromProperties || Colors[theme][colorName];
}
