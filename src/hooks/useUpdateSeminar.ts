import { useMutation } from '@tanstack/react-query';

import { SeminarService } from '../services/seminar.service';
import { ISeminar } from '../types/seminar.types';

export const useUpdateSeminar = () => {
  return useMutation({
    mutationKey: ['updateSeminar'],
    mutationFn: ({ id, ...data }: ISeminar) =>
      SeminarService.updateSeminar(id, data),
  });
};
