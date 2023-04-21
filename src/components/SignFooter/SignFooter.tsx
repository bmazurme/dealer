import React from 'react';
import { NavLink } from 'react-router-dom';

type TypeProps = {
  text: string;
  link: Record<string, string>;
}

export default function SignFooter({ links }: { links: TypeProps[] }) {
  return (
    <>
      {links.map(({ text, link }) => (
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
