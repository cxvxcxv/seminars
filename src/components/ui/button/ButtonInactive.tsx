'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const ButtonInactive = ({
  children,
  className,
  disabled,
  ...rest
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) => {
  return (
    <button
      className={clsx(
        '',
        className,
        {
          'cursor-pointer': !disabled,
        },
        {
          'cursor-not-allowed opacity-50': disabled,
        },
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
