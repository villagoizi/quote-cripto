import React, {useEffect, useState} from 'react';
import {Alert, ActivityIndicator} from 'react-native';
import Layout from './layout';
import Form from './components/Form';
import Card from './components/Card';
import {getQuotePrice} from './services';
import Colors from './constants/Colors';

export interface ParamsGet {
  criptoCurrency: string;
  currency: string;
}

export interface Response {
  PRICE: string;
  LASTUPDATE: string;
  OPENDAY: string;
  HIGHDAY: string;
  LOWDAY: string;
  HIGH24HOUR: string;
}

let initialParamsChanges: ParamsGet = {criptoCurrency: '', currency: ''};
const showAlert = () => {
  Alert.alert('Error', 'All fields are obligatory', [{text: 'OK'}]);
};

const App: React.FC<{}> = () => {
  const [changes, setChanges] = useState<ParamsGet>(initialParamsChanges);
  const [fetching, setFetching] = useState(false);
  const [search, setSearch] = useState<Response & any>();

  const handleSubmit = () => {
    if (
      changes.currency.trim() === '' ||
      changes.criptoCurrency.trim() === ''
    ) {
      showAlert();
      return;
    }
    setFetching(true);
  };

  useEffect(() => {
    if (fetching) {
      const getQuote = async () => {
        const result = await getQuotePrice(
          changes.criptoCurrency,
          changes.currency,
        );
        setSearch(result.DISPLAY[changes.criptoCurrency][changes.currency]);
        setFetching(false);
      };
      getQuote();
    }
  }, [fetching]);

  return (
    <Layout>
      <Form onSubmit={handleSubmit} onChange={setChanges} changes={changes} />
      {fetching && (
        <ActivityIndicator
          style={{marginTop: 50}}
          size="large"
          color={Colors.fontOne}
        />
      )}
      {!fetching && (
        <Card
          quote={search}
          title={`${changes.criptoCurrency} to ${changes.currency}`}
        />
      )}
    </Layout>
  );
};

export default App;
