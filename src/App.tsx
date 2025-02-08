import { SeminarCard } from './components/SeminarCard';
import { useGetSeminars } from './hooks/useGetSeminars';

export const App = () => {
  const { data } = useGetSeminars();
  return (
    <section className="flex flex-col items-center p-16">
      <h1 className="mb-16 text-5xl">Активные семинары</h1>
      <section className="grid grid-cols-3 gap-x-8 gap-y-12">
        {data?.map(seminar => (
          <SeminarCard key={seminar.id} seminar={seminar} />
        ))}
      </section>
    </section>
  );
};
