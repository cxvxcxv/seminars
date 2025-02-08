import { useMutation, useQueryClient } from '@tanstack/react-query';

import { SeminarService } from '../services/seminar.service';

export const useDeleteSeminar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['deleteSeminar'],
    mutationFn: (seminarId: number) => SeminarService.deleteSeminar(seminarId),
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['getSeminars'] }),
    onError: err => console.log(err),
  });
};
