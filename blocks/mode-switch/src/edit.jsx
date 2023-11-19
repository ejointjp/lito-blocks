import { useBlockProps } from '@wordpress/block-editor';
import { useEffect, useState } from '@wordpress/element';

export default function edit() {
  const blockProps = useBlockProps();

  // ローカルストレージからテーマを読み込む
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('litography-theme-mode');
    return savedTheme ? savedTheme : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme());

  // テーマを切り替える関数
  const switchTheme = (newTheme) => {
    setTheme(newTheme);
    localStorage.setItem('litography-theme-mode', newTheme); // ローカルストレージに保存
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(newTheme);
  };

  // コンポーネントがマウントされたときにテーマを設定する
  useEffect(() => {
    document.body.classList.add(theme);
  }, []);

  return (
    <div {...blockProps}>
      <button onClick={() => switchTheme('light')}>Light Theme</button>
      <button onClick={() => switchTheme('dark')}>Dark Theme</button>
      <button onClick={() => switchTheme('system')}>System Theme</button>
    </div>
  );
}
