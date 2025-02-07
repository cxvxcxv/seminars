import { useGetSeminars } from './hooks/useGetSeminars';

export const App = () => {
  const { data } = useGetSeminars();
  return (
    <div className="">
      {data?.map(seminar => <div key={seminar.id}>{seminar.date}</div>)}
    </div>
  );
};
