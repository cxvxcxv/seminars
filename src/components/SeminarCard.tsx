import { Pencil, Trash2 } from 'lucide-react';

import { ISeminar } from '../types/seminar.types';

import { ButtonActive } from './ui/button/ButtonActive';
import { ButtonInactive } from './ui/button/ButtonInactive';

type TSeminarCardProps = {
  seminar: ISeminar;
  triggerSeminar: (seminar: ISeminar) => void;
};

export const SeminarCard = ({ seminar, triggerSeminar }: TSeminarCardProps) => {
  return (
    <div className="flex flex-col rounded-md border border-gray-400">
      <img
        src={seminar.photo}
        alt=""
        className="w-full rounded-t-md object-cover"
      />
      <div className="flex w-full grow flex-col gap-4 p-4">
        <p className="text-black opacity-70">
          {seminar.date} - {seminar.time}
        </p>
        <h6>{seminar.title}</h6>
        <p className="grow text-sm">{seminar.description}</p>
        <div className="mt-4 flex justify-between">
          <ButtonActive className="flex items-center gap-1 rounded-sm border border-transparent p-2 transition-colors hover:border-yellow-400 hover:text-yellow-500">
            <Pencil className="w-5" />
            Редактировать
          </ButtonActive>
          <ButtonInactive
            onClick={() => triggerSeminar(seminar)}
            className="flex items-center gap-1 rounded-sm border border-transparent p-2 transition-colors hover:border-red-500 hover:text-red-500"
          >
            <Trash2 strokeWidth={1.5} className="w-5" /> Удалить
          </ButtonInactive>
        </div>
      </div>
    </div>
  );
};
