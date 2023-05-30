import Link from 'next/link';
import React from 'react';

type NavLinkProps = {
  href: string;
  label: string;
  target?: string;
  styles?: string;
  handleClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export const NavLink: React.FC<NavLinkProps> = ({
  href,
  label,
  target,
  styles,
  handleClick,
}: NavLinkProps) => {
  return (
    <Link
      href={href}
      onClick={handleClick}
      target={target}
      className={`text-white flex items-center font-bold text-xl hover:opacity-70 ${styles}`}
      aria-current='page'
    >
      {label}
    </Link>
  );
};
