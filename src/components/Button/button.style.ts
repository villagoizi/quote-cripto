import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    minWidth: Dimensions.get('window').width / 4,
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: Colors.bgPrimary,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '2.5%',
  },
  text: {
    fontSize: 15,
    fontFamily: Colors.fontLatoBold,
    color: Colors.fontOne,
    textTransform: 'uppercase',
  },
});
