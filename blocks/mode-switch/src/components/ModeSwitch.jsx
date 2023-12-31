// import { IconContext } from 'react-icons'
// import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useState, useEffect } from '@wordpress/element';
import Popover from '@mui/material/Popover';

export default function ModeSwitch() {
  // OSのモード
  const isOsDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

  const initialMode = () => {
    if (localStorage.LITOB_THEME === 'light') {
      return false;
    } else if (localStorage.LITOB_THEME === 'dark') {
      return true;
    } else {
      return isOsDarkMode;
    }
  };

  const [darkmode, setDarkmode] = useState(initialMode());

  const changeMode = (newMode) => {
    if (newMode === 'dark') {
      setDarkmode(true);
      localStorage.LITOB_THEME = 'dark';
    } else if (newMode === 'light') {
      setDarkmode(false);
      localStorage.LITOB_THEME = 'light';
    } else {
      localStorage.removeItem('LITOB_THEME');
      setDarkmode(isOsDarkMode);
    }
  };

  const buttonIconLabel = darkmode ? 'dark_mode' : 'light_mode';
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'wp-block-lito-mode-switch' : undefined;

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });

  return (
    <div className="wp-block-lito-mode-switch">
      <button className="mode-switch-btn" aria-describedby={id} onClick={handleClick}>
        <span className="material-symbols-outlined">{buttonIconLabel}</span>
      </button>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className="mode-switch-popover-wrapper"
        classes={{ paper: 'mode-switch-popover' }}
        sx={{
          '.MuiPaper-root': {
            // MUIのPaperコンポーネントを指定
            boxShadow: 'none', // box-shadowを無効にする
            border: '1px solid var(--lito-light-gray)',
            padding: '0.5rem 0',
            borderRadius: 'var(--lito-radius-sm)',
          },
        }}
      >
        <div className="">
          <div className="mode-switch-popover-item" onClick={() => changeMode('light')}>
            <span className="material-symbols-outlined">light_mode</span>
            ライトモード
          </div>
          <div className="mode-switch-popover-item" onClick={() => changeMode('dark')}>
            <span className="material-symbols-outlined">dark_mode</span>
            ダークモード
          </div>
          <div className="mode-switch-popover-item" onClick={() => changeMode()}>
            <span className="material-symbols-outlined">contrast</span>
            システム
          </div>
        </div>
      </Popover>
    </div>
  );
}
