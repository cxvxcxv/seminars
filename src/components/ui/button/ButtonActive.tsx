'use client';

import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

export const ButtonActive = ({
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
          'cursor-pointer font-semibold': !disabled,
        },
        {
          'cursor-not-allowed opacity-50': disabled,
        },
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
