import {ApiInit} from './api';

export const getQuotePrice = async (
  criptoCurrency: string,
  currency: string,
) => {
  const path = `/pricemultifull`;
  let params = {
    fsyms: criptoCurrency,
    tsyms: currency,
  };
  return await (await ApiInit().get(path, {params})).data;
};
