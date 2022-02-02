import {StyleSheet} from 'react-native';
import {colorIcon} from './globalStyles';

export const modalStyles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: colorIcon,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.25,
    elevation: 10,
    borderRadius: 15,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    marginBottom: 25,
  },
});
