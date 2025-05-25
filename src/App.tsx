import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';

import { AppHeader } from './components/AppHeader';
import { AppContents } from './components/AppContents';
import { darkBlueTheme } from './themes/dark-blue';
import { AppConfig } from './model/AppData.interface';
import { parseAppConfig } from './model/AppData';
import appConfigJson from './config/appConfig.json';

const theme = createTheme(darkBlueTheme);

const App = () => {
  const [appConfig, setAppConfig] = useState<AppConfig | null>(null);

  useEffect(() => {
    const fetchConfig = async () => {
      const config = await parseAppConfig(appConfigJson);
      setAppConfig(config);
    };
    fetchConfig();
  }, []);

  useLayoutEffect(() => {
    const docTitle = document.getElementById('app-title');
    if (appConfig && docTitle) {
      docTitle.textContent = appConfig.title;
    }
  }, [appConfig]);

  if (!appConfig) {
    return <div>Loading...</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppHeader {...appConfig} />
      <AppContents {...appConfig} />
    </ThemeProvider>
  );
};

export default App;
