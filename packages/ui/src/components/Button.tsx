import React, { ReactNode } from 'react';
import { Intent } from '../types';


export type ButtonProps = {
  /**
   * Intent
   */
  kind?: Intent,
  /**
   * Foobar
   */
  foo?: boolean,
  children: ReactNode,
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button>
      {children}
    </button>
  )
}
Button.defaultProps = {
  kind: Intent.PRIMARY
};