import { useMutation } from '@tanstack/react-query';

import { SeminarService } from '../services/seminar.service';

export const useDeleteSeminar = () => {
  return useMutation({
    mutationKey: ['deleteSeminar'],
    mutationFn: (seminarId: number) => SeminarService.deleteSeminar(seminarId),
  });
};
