import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';

import { AppHeader } from './components/AppHeader';
import { AppContents } from './components/AppContents';
import { darkBlueTheme } from './themes/dark-blue';

import { MultiLangAppConfig } from './model/AppData.interface';
import appConfigJson from './config/appConfig.json';

const theme = createTheme(darkBlueTheme);

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' }
];

const App = () => {
  const [multiLangConfig, setMultiLangConfig] = useState<MultiLangAppConfig | null>(null);
  const [lang, setLang] = useState('en');

  useEffect(() => {
    // No need to parse, just set as MultiLangAppConfig
    setMultiLangConfig(appConfigJson as MultiLangAppConfig);
  }, []);

  const appConfig = multiLangConfig?.[lang];

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
      <AppHeader {...appConfig} lang={lang} setLang={setLang} languages={LANGUAGES} />
      <AppContents {...appConfig} />
    </ThemeProvider>
  );
};

export default App;
