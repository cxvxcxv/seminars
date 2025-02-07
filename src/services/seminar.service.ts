import axios from 'axios';

import { SERVER_ENDPOINTS } from '../constants/server-endpoint.constants';

export const SeminarService = {
  async getSeminars() {
    const response = await axios.get(
      `${import.meta.env.VITE_SERVER_URL}/${SERVER_ENDPOINTS.SEMINARS}`,
    );
    return response.data;
  },
};
