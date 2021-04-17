import React, {useState, useEffect, SetStateAction, Dispatch} from 'react';
import {View, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import WrappedLinearGradient from '../LinearGradient';
import Button from '../Button';
import Colors from '../../constants/Colors';
import styles from './form.style';
import Currency from '../../data-source/currency';
import {getCriptoCurrency} from '../../services';
import {ParamsGet} from '../../App';

type CriptoResponse = {
  CoinInfo: {
    Id: string;
    Name: string;
    FullName: string;
  };
};

interface FormProps {
  onSubmit: () => void;
  changes: ParamsGet;
  onChange: Dispatch<SetStateAction<ParamsGet>>;
  loading?: boolean;
}

const Form: React.FC<FormProps> = ({onSubmit, changes, onChange, loading}) => {
  const [criptoNetwork, setCriptoNetwork] = useState([]);
  const handleChangeCurrency = (currencySelect: string) =>
    onChange({...changes, currency: currencySelect});
  const handleChangeCripto = (criptoSelect: string) =>
    onChange({...changes, criptoCurrency: criptoSelect});

  useEffect(() => {
    let getApi = async () => {
      const result = await getCriptoCurrency();
      setCriptoNetwork(result.Data);
    };
    getApi();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.label}>Currency</Text>
        <Picker
          dropdownIconColor={Colors.fontOne}
          style={styles.select}
          selectedValue={changes.currency}
          onValueChange={handleChangeCurrency}>
          <Picker.Item label="- Select -" value="" color={Colors.fontOne} />
          {Currency.map((curr, index) => (
            <Picker.Item
              key={curr.id}
              label={curr.label}
              value={curr.value}
              color={
                changes.currency === curr.value ? Colors.fontOne : undefined
              }
            />
          ))}
        </Picker>
      </View>
      <View style={styles.group}>
        <Text style={styles.label}>Cripto Currency</Text>
        <Picker
          dropdownIconColor={Colors.fontOne}
          style={styles.select}
          selectedValue={changes.criptoCurrency}
          onValueChange={handleChangeCripto}>
          <Picker.Item label="- Select -" value="" color={Colors.fontOne} />
          {criptoNetwork.map((coin: CriptoResponse) => (
            <Picker.Item
              key={coin.CoinInfo.Id}
              label={coin.CoinInfo.FullName}
              value={coin.CoinInfo.Name}
              color={
                changes.criptoCurrency === coin.CoinInfo.Name
                  ? Colors.fontOne
                  : undefined
              }
            />
          ))}
        </Picker>
      </View>
      <Button disabled={loading} onPress={onSubmit}>
        Submit
      </Button>
    </View>
  );
};

export default Form;
