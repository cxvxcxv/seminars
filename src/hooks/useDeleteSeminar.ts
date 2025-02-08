import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '../constants/query-key.constants';
import { SeminarService } from '../services/seminar.service';

export const useDeleteSeminar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteSeminar'],
    mutationFn: (seminarId: number) => SeminarService.deleteSeminar(seminarId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_SEMINARS] }),
    onError: err => console.error(err),
  });
};
