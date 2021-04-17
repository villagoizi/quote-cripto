import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  group: {
    marginHorizontal: '2.5%',
    marginVertical: 10,
  },
  label: {
    color: Colors.fontTwo,
    fontSize: 22,
    fontFamily: Colors.fontLatoReg,
    fontWeight: '500',
  },
  select: {
    color: Colors.fontOne,
  },
});
