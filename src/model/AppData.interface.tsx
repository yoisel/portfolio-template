import { ThemeOptions } from '@mui/material';

export interface PortfolioPageItem {
  image?: string;
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  contents: string | string[];
  backgroundColor?: string;
  link?: string;
  linkText?: string;
  imagePosition?: 'left' | 'right';
}

export interface PortfolioSection {
  id: string;
  title: string;
  description?: string;
  backgroundImage?: string;
  portfolioPageItems?: PortfolioPageItem[];
}

export interface SocialLinks {
  /**
   * Link to a stackoverflow profile
   */
  stackoverflow?: string;

  /**
   * Link to a linkedin profile
   */
  linkedin?: string;

  /**
   * Link to a github profile
   */
  github?: string;

  /**
   * Link to a facebook profile
   */
  facebook?: string;

  instagram?: string;
}

export interface LanguageOption {
  code: string;
  label: string;
  flag: string;
}

export interface AppHeaderConfig {
  /**
   * Main title for the website
   */
  title: string;

  /**
   * Configuration for icon-buttons pointing to linkedin, github, etc
   */
  social?: SocialLinks;

  /**
   * Image to be used in avatar component
   */
  avatarImage?: string;

  /**
   * List of sections of our single-page application
   */
  sections: Pick<PortfolioSection, 'id' | 'title'>[];

  /**
   * mui theme to be used
   */
  theme?: ThemeOptions;
  // For language dropdown (optional props)
  lang?: string;
  setLang?: (lang: string) => void;
  languages?: LanguageOption[];
}

// Define AppConfig interface based on AppHeaderConfig or import it if defined elsewhere
export interface AppConfig extends AppHeaderConfig {
  // Use full PortfolioSection[] for sections, not Pick
  sections: PortfolioSection[];
}

// Multi-language app config: { en: AppConfig, es: AppConfig, ... }
export type MultiLangAppConfig = {
  [lang: string]: AppConfig;
};
