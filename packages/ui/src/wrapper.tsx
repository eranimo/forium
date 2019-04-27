import React, { useState } from 'react';
import { Theme } from './components/Theme';
import { ETheme } from './theme';



const buttonStyle: React.CSSProperties = {
  position: 'fixed',
  zIndex: 10000,
  bottom: 0,
  width: '280px',
  height: '43px',
  color: '#13161F',
  background: '#F5F6F7',
  border: 'none',
  borderTop: '1px dashed #CED4DE',
};

const Wrapper = ({ children }) => {
  const [theme, setTheme] = useState(ETheme.LIGHT);
  
  return (
    <React.Fragment>
      <button
        style={buttonStyle}
        onClick={() => setTheme(theme === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT)}
      >
        Theme: <b>{theme}</b>
      </button>
      <Theme value={theme}>
        {children}
      </Theme>
    </React.Fragment>
  );
}

export default Wrapper;