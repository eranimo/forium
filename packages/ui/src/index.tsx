import React, { ReactNode } from 'react';


export function ui() {
  return false;
}

export function Button({
  onClick,
  children,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  children: ReactNode,
}) {
  return <button onClick={onClick}>{children}</button>;
}