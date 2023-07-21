import { createContext, useState } from 'react';
import Router from './router/Router';
interface Theme {
  theme      : string;
  handleTheme: () => void;
}
export const ThemeContext = createContext<Theme>({} as Theme);

const App = () => {
  const [theme, setTheme] = useState<string>('dark');

  const handleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  }

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
      <div className='App' id={theme}>
        <Router />
      </div>
    </ThemeContext.Provider>
  )
}

export default App;
