import { useQuery } from '@tanstack/react-query';

import { SeminarService } from '../services/seminar.service';

export const useGetSeminars = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['getSeminars'],
    queryFn: () => SeminarService.getSeminars(),
  });

  return { data, isLoading };
};
