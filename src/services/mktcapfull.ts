import {ApiInit} from './api';

export const getCriptoCurrency = async (limit?: number, currency?: string) => {
  const path = `/top/mktcapfull`;
  let params = {
    limit: limit || 10,
    tsym: currency || 'USD',
  };
  return await (await ApiInit().get(path, {params})).data;
};
