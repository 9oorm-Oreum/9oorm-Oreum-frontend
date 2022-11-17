import axios, { AxiosResponse } from 'axios';
import { MyOreumRequestBody, MyOreumResponse } from './types';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': '*/*',
  },
});

export const postMyOreum = async (requestBody: MyOreumRequestBody) => {
  const response = await axiosInstance.request({
    method: 'POST',
    url: '/oreum',
    data: requestBody,
  });
  return response;
};

export const getMyOreum = async (myOreumID: number) => {
  const response = await axiosInstance.request<AxiosResponse<MyOreumResponse>>({
    method: 'GET',
    url: `oreum/${myOreumID}`,
  });
};
