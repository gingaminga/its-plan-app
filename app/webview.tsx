import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function WebViewScreen() {
  const webViewUrl = process.env.EXPO_PUBLIC_WEBVIEW_URL || '';

  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: webViewUrl }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
