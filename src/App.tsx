import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useEffectOnce } from 'usehooks-ts';

import { themeOptions } from './themes/grayscale';
import { AppHeader } from './components/AppHeader';
import { AppContents } from './components/AppContents';
import { appConfig } from './model/AppData';

const theme = createTheme(themeOptions);

const App = () => {
  useEffectOnce(() => {
    const docTitle = document.getElementById('app-title') || {
      textContent: ''
    };
    docTitle.textContent = appConfig.title;
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader {...appConfig} />
      <AppContents {...appConfig} />
    </ThemeProvider>
  );
};

export default App;
