import { Trash2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { useDeleteSeminar } from '../hooks/useDeleteSeminar';
import { ISeminar } from '../types/seminar.types';

import { Modal } from './Modal';
import { ButtonActive } from './ui/button/ButtonActive';

type TDeleteSeminarModalProps = {
  seminar: ISeminar | null;
  triggerDeleteSeminar: (seminar: ISeminar | null) => void;
};

export const DeleteSeminarModal = ({
  seminar,
  triggerDeleteSeminar,
}: TDeleteSeminarModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useDeleteSeminar();

  const onClose = () => {
    setIsOpen(false);
    triggerDeleteSeminar(null);
  };

  const onDelete = () => {
    if (seminar) {
      const toastId = toast.loading('Загрузка...');
      mutate(seminar.id, {
        onSettled: () => toast.dismiss(toastId),
        onSuccess: () => toast.success('Семинар успешно удален'),
        onError: () => toast.error('Возникла ошибка при удалении семинара'),
      });
    }
    onClose();
  };

  useEffect(() => {
    setIsOpen(!!seminar);
  }, [seminar]);

  if (!seminar) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="text-center">
      <div className="mx-auto w-fit rounded-full bg-gray-100 p-4">
        <Trash2 className="h-12 w-12 text-red-500" />
      </div>
      <h2 className="my-4">
        Вы уверены, что хотите удалить "{seminar.title}"?
      </h2>
      <ButtonActive
        onClick={onDelete}
        className="w-1/2 rounded-sm bg-red-500 p-2 text-white"
      >
        Удалить
      </ButtonActive>
    </Modal>
  );
};
