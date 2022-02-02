import {StyleSheet} from 'react-native';

export const colorIcon = '#885042';

export const productStyles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  card: {
    flex: 1,
  },
  imageContainer: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  form: {
    padding: 15,
  },
  input: {
    height: 50,
    width: '100%',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'grey',
    marginBottom: 15,
    justifyContent: 'center',
  },
  btnContainer: {
    height: 50,
    width: '100%',
    backgroundColor: colorIcon,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 10,
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
