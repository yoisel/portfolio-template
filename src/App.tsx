import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { useEffect, useLayoutEffect, useState } from 'react';

import { grayscaleTheme } from './themes/grayscale';
import { AppHeader } from './components/AppHeader';
import { AppContents } from './components/AppContents';

import { MultiLangAppConfig, LanguageOption } from './model/AppData.interface';
import appConfigJson from './config/appConfig.json';

const theme = createTheme(grayscaleTheme);

const LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', flag: 'GB' },
  { code: 'es', label: 'Español', flag: 'ES' },
  { code: 'fr', label: 'Français', flag: 'FR' }
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
