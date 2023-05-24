import React, { ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  listClasses?: string;
  itemClasses?: string;
  getItem: (value: T, index: number) => string | ReactNode;
  handleRemove?: (item: T) => void;
};

export const List = <T,>({
  items,
  listClasses,
  itemClasses,
  getItem,
  handleRemove,
}: React.PropsWithChildren<ListProps<T>>): JSX.Element => (
  <ul className={`${listClasses}`}>
    {items.map((item, index) => (
      <li key={index} className={`${itemClasses} flex justify-between`}>
        {getItem(item, index)}
        {handleRemove && (
          <svg
            className='h-6 w-6'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
            onClick={() => handleRemove(item)}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        )}
      </li>
    ))}
  </ul>
);
