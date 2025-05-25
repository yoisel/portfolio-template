import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { SocialIcons } from './SocialIcons';
import { AppHeaderConfig, LanguageOption } from '../model/AppData.interface';
import React, { useState } from 'react';

export const AppHeader = (props: AppHeaderConfig) => {
  // Language dropdown state
  const [langMenuAnchor, setLangMenuAnchor] = useState<null | HTMLElement>(null);
  const handleLangMenuOpen = (event: React.MouseEvent<HTMLElement>) => setLangMenuAnchor(event.currentTarget);
  const handleLangMenuClose = () => setLangMenuAnchor(null);
  const handleLangSelect = (code: string) => {
    if (props.setLang) props.setLang(code);
    handleLangMenuClose();
  };
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      handleMenuClose();
    }
  };

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <div style={{ flexGrow: 1, display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Avatar alt='Picture of Fulano de Tal' src={props.avatarImage} />
          <Typography variant='h6'>{props.title}</Typography>
          <SocialIcons {...props.social} />
        </div>
        {/* Language Dropdown */}
        {props.languages && props.lang && props.setLang && (
          <>
            <Button
              aria-controls='lang-menu'
              aria-haspopup='true'
              onClick={handleLangMenuOpen}
              color='inherit'
              style={{ fontSize: 24, minWidth: 40 }}
              title='Change language'
            >
              {props.languages.find((l) => l.code === props.lang)?.flag || '🌐'}
            </Button>
            <Menu id='lang-menu' anchorEl={langMenuAnchor} open={!!langMenuAnchor} onClose={handleLangMenuClose}>
              {props.languages.map((l: LanguageOption) => (
                <MenuItem key={l.code} selected={l.code === props.lang} onClick={() => handleLangSelect(l.code)}>
                  <span style={{ fontSize: 22, marginRight: 8 }}>{l.flag}</span> {l.label}
                </MenuItem>
              ))}
            </Menu>
          </>
        )}
        {isSmallScreen ? (
          <IconButton onClick={handleMenuButtonClick} size='large' edge='end' color='inherit' aria-label='menu'>
            <MenuIcon />
          </IconButton>
        ) : (
          <div style={{ display: 'flex', flexGrow: 1, gap: '4px' }}>
            {props.sections?.map((section, index) => (
              <React.Fragment key={section.id ?? index}>
                {section?.id && section?.title && (
                  <Button key={'buttons' + section.id} variant='contained' onClick={() => scrollToSection(section.id)}>
                    {section.title}
                  </Button>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
        <Menu
          id='menu-appbar'
          anchorEl={anchorEl}
          open={!!anchorEl}
          onClose={handleMenuClose}
          MenuListProps={{ 'aria-labelledby': 'basic-button' }}
        >
          {props.sections?.map((section, index) => {
            return (
              section?.id &&
              section?.title && (
                <MenuItem key={section?.id ?? index} onClick={() => scrollToSection(section.id)}>
                  {section.title}
                </MenuItem>
              )
            );
          })}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
