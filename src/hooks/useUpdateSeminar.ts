import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEYS } from '../constants/query-key.constants';
import { SeminarService } from '../services/seminar.service';
import { ISeminar } from '../types/seminar.types';

export const useUpdateSeminar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateSeminar'],
    mutationFn: ({ id, ...data }: ISeminar) =>
      SeminarService.updateSeminar(id, data),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.GET_SEMINARS] }),
    onError: err => console.error(err),
  });
};
