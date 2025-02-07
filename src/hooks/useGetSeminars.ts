import { useMutation } from '@tanstack/react-query';

import { SeminarService } from '../services/seminar.service';

export const useGetSeminars = () => {
  return useMutation({
    mutationKey: ['getSeminars'],
    mutationFn: () => SeminarService.getSeminars(),
  });
};
