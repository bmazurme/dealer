/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { NavLink } from 'react-router-dom';

interface IProps {
  text: string;
  link: Record<string, string>;
}

export default function SignFooter({ links }: { links: Array<IProps> }) {
  return (
    <>
      {links.map(({ text, link }: IProps) => (
        <div className="sign__footer" key={link.label}>
          <p className="sign__help">{text}</p>
          <NavLink className="sign__link" to={link?.url}>
            {link?.label}
          </NavLink>
        </div>
      ))}
    </>
  );
}
