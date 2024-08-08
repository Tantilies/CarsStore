import axios from 'axios';

import { GRAPHQL_IPI, GETALL_CARS_QUERY } from './constants';
export const getCars = async () => {
  const QueryResponse = await axios.post(
    GRAPHQL_IPI, {
    query: GETALL_CARS_QUERY
  }
  );
  return QueryResponse.data.data.cars
}