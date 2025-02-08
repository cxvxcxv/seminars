import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { useUpdateSeminar } from '../hooks/useUpdateSeminar';
import { ISeminar, TSeminarInput } from '../types/seminar.types';
import {
  formatDateForDatabase,
  formatDateForInput,
} from '../utils/convert-date';

import { Modal } from './Modal';
import { ButtonActive } from './ui/button/ButtonActive';

type TEditSeminarModalProps = {
  seminar: ISeminar | null;
  triggerEditSeminar: (seminar: ISeminar | null) => void;
};

export const EditSeminarModal = ({
  seminar,
  triggerEditSeminar,
}: TEditSeminarModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useUpdateSeminar();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TSeminarInput>({
    defaultValues: {
      photo: '',
      title: '',
      description: '',
      date: '',
      time: '',
    },
  });

  const photoUrl = watch('photo');

  const onClose = () => {
    setIsOpen(false);
    triggerEditSeminar(null);
  };

  const onSubmit: SubmitHandler<TSeminarInput> = data => {
    if (seminar) {
      const toastId = toast.loading('Загрузка...');
      mutate(
        { id: seminar.id, ...data, date: formatDateForDatabase(data.date) },
        {
          onSettled: () => toast.dismiss(toastId),
          onSuccess: () => toast.success('Семинар успешно отредактирован'),
          onError: () =>
            toast.error('Возникла ошибка при редактировании семинара'),
        },
      );
    }
    onClose();
  };

  useEffect(() => {
    if (seminar) {
      reset({
        photo: seminar.photo || '',
        title: seminar.title || '',
        description: seminar.description || '',
        date: formatDateForInput(seminar.date) || '',
        time: seminar.time || '',
      });
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seminar]);

  if (!seminar) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="w-full text-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-2"
      >
        <img
          src={photoUrl}
          alt=""
          className="my-1 w-1/2 rounded-md object-cover"
        />
        <p className="text-xs text-gray-500">Предварительный просмотр</p>
        <input
          type="text"
          placeholder="Название"
          defaultValue={seminar.title}
          className="w-full rounded-sm font-semibold placeholder-shown:outline"
          {...register('title', { required: 'Название обязательно' })}
        />
        <p className="text-red-500">{errors?.title?.message}</p>
        <textarea
          id="seminarDescription"
          placeholder="Описание"
          className="h-24 w-full resize-none rounded-sm placeholder-shown:outline"
          {...register('description')}
        ></textarea>
        <input
          type="date"
          className="w-2/3 rounded-sm"
          {...register('date', { required: 'Дата обязательна' })}
        />
        <p className="text-red-500">{errors?.date?.message}</p>
        <input
          type="time"
          className="w-2/3 rounded-sm"
          {...register('time', { required: 'Время обязательно' })}
        />
        <input
          type="text"
          placeholder="photo url"
          className="w-2/3 rounded-sm placeholder-shown:outline"
          {...register('photo')}
        />
        <p className="text-red-500">{errors?.time?.message}</p>
        <ButtonActive className="w-2/3 rounded-md border border-transparent p-2 hover:border-black">
          Сохранить
        </ButtonActive>
      </form>
    </Modal>
  );
};
