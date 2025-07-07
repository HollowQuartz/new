import { StyleSheet } from 'react-native';

const GlobalStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff', // light blue
    paddingTop: 0,
    paddingHorizontal: 0,
    paddingBottom: 60, // reserve space for bottom menu
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default GlobalStyle;
