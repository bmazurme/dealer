import React, { MouseEvent, FormEvent } from 'react';
import { NavLink } from 'react-router-dom';

interface ILinkProps {
  className: string,
  to: string,
  label: string,
  onClick?: ((event: FormEvent | MouseEvent) => void),
}

function Link(props: ILinkProps) {
  const { label } = props;

  return (
    <li>
      <NavLink {...props}>{label}</NavLink>
    </li>
  );
}

export default function Links({ links }: { links: ILinkProps[] }) {
  return (
    <>
      {links.map((props, i) => (<Link key={i} {...props} />))}
    </>
  );
}

export { ILinkProps, Link };
