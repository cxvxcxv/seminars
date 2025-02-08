import { Pencil, Trash2 } from 'lucide-react';

import { ISeminar } from '../types/seminar.types';

import { ButtonActive } from './ui/button/ButtonActive';
import { ButtonInactive } from './ui/button/ButtonInactive';

export const SeminarCard = ({ seminar }: { seminar: ISeminar }) => {
  return (
    <div className="flex flex-col border">
      <img src={seminar.photo} alt="" className="w-full object-cover" />
      <div className="flex w-full grow flex-col gap-4 p-4">
        <p className="text-black opacity-70">
          {seminar.date} - {seminar.time}
        </p>
        <h6>{seminar.title}</h6>
        <p className="grow text-sm">{seminar.description}</p>
        <div className="mt-4 flex justify-between">
          <ButtonActive className="flex items-center gap-1">
            <Pencil className="w-5" />
            Редактировать
          </ButtonActive>
          <ButtonInactive className="flex items-center gap-1">
            <Trash2 strokeWidth={1.5} className="w-5" /> Удалить
          </ButtonInactive>
        </div>
      </div>
    </div>
  );
};
