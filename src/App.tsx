import { useState } from 'react';

import { DeleteSeminarModal } from './components/DeleteSeminarModal';
import { SeminarCard } from './components/SeminarCard';
import { useGetSeminars } from './hooks/useGetSeminars';
import { ISeminar } from './types/seminar.types';

export const App = () => {
  const { data } = useGetSeminars();
  const [triggeredSeminar, setTriggeredSeminar] = useState<ISeminar | null>(
    null,
  );

  return (
    <section className="flex flex-col items-center p-16">
      <h1 className="mb-16 text-5xl">Активные семинары</h1>
      <section className="grid grid-cols-3 gap-x-8 gap-y-12">
        {data?.map(seminar => (
          <SeminarCard
            key={seminar.id}
            seminar={seminar}
            triggerSeminar={setTriggeredSeminar}
          />
        ))}
      </section>
      <DeleteSeminarModal
        seminar={triggeredSeminar}
        triggerSeminar={setTriggeredSeminar}
      />
    </section>
  );
};
