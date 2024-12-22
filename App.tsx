import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

const App = (): JSX.Element => {
  const [isDarkMode, setIsDarkMode] = useState(useColorScheme() === 'dark');

  const handleToggleMode = () => setIsDarkMode(preV => !preV);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View
        style={[
          styles.container,
          isDarkMode ? styles.darkContainer : styles.lightContainer,
        ]}>
        <Text style={isDarkMode ? styles.lightText : styles.darkText}>
          Hello world!
        </Text>
      </View>
      <View style={styles.toggleBtnContainer}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            isDarkMode ? styles.darkToggleBtn : styles.lightToggleBtn,
          ]}
          onPress={handleToggleMode}>
          <Text>{isDarkMode ? '🌞' : '🌘'}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  darkContainer: {
    backgroundColor: '#000',
  },
  lightContainer: {
    backgroundColor: '#FFA500',
  },
  lightText: {
    color: '#fff',
  },
  darkText: {
    color: '#000',
  },
  toggleBtnContainer: {
    position: 'absolute',
    alignItems: 'center',
    width: '100%',
    top: 20,
  },
  toggleBtn: {
    padding: 8,
    borderWidth: 2,
    borderRadius: 50,
  },
  darkToggleBtn: {
    borderColor: '#fff',
  },
  lightToggleBtn: {
    borderColor: '#000',
  },
});

export default App;
