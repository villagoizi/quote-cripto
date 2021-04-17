import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: '4%',
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    fontFamily: Colors.fontLatoBold,
  },
  fields: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  label: {
    fontSize: 18,
    color: Colors.fontOne,
  },
  info: {
    fontSize: 18,
    color: Colors.fontTwo,
    paddingLeft: 10,
  },
});
