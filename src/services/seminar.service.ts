import axios from 'axios';

import { SERVER_ENDPOINTS } from '../constants/server-endpoint.constants';
import { ISeminar, TSeminarInput } from '../types/seminar.types';

const URL = import.meta.env.VITE_SERVER_URL;

export const SeminarService = {
  async getSeminars() {
    const response = await axios.get<ISeminar[]>(
      `${URL}/${SERVER_ENDPOINTS.SEMINARS}`,
    );
    return response.data;
  },

  async updateSeminar(seminarId: number, data: TSeminarInput) {
    const response = await axios.patch<ISeminar>(
      `${URL}/${SERVER_ENDPOINTS.SEMINARS}/${seminarId}`,
      data,
    );
    return response.data;
  },

  async deleteSeminar(seminarId: number) {
    const response = await axios.delete<ISeminar>(
      `${URL}/${SERVER_ENDPOINTS.SEMINARS}/${seminarId}`,
    );
    return response.data;
  },
};
