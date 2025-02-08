import { useState } from 'react';

import { DeleteSeminarModal } from './components/DeleteSeminarModal';
import { EditSeminarModal } from './components/EditSeminarModal';
import { SeminarCard } from './components/SeminarCard';
import { useGetSeminars } from './hooks/useGetSeminars';
import { ISeminar } from './types/seminar.types';

export const App = () => {
  const { data } = useGetSeminars();
  const [triggeredEditSeminar, setTriggeredEditSeminar] =
    useState<ISeminar | null>(null);
  const [triggeredDeleteSeminar, setTriggeredDeleteSeminar] =
    useState<ISeminar | null>(null);

  return (
    <section className="flex flex-col items-center p-16">
      <h1 className="mb-16 text-5xl">Активные семинары ({data?.length})</h1>
      <section className="grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {/* rendering seminars */}
        {data?.map(seminar => (
          <SeminarCard
            key={seminar.id}
            seminar={seminar}
            triggerEditSeminar={setTriggeredEditSeminar}
            triggerDeleteSeminar={setTriggeredDeleteSeminar}
          />
        ))}
      </section>
      {/* seminar modals moved 1 level above to avoid multiple renders of the same component */}
      <EditSeminarModal
        seminar={triggeredEditSeminar}
        triggerEditSeminar={setTriggeredEditSeminar}
      />

      <DeleteSeminarModal
        seminar={triggeredDeleteSeminar}
        triggerDeleteSeminar={setTriggeredDeleteSeminar}
      />
    </section>
  );
};
