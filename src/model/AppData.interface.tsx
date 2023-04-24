export interface PortfolioPageItem {
  image?: string;
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  contents: string | string[];
  backgroundColor?: string;
  link?: string;
  linkText?: string;
}

export interface PortfolioSection {
  id: string;
  title: string;
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
}

export interface AppConfig extends AppHeaderConfig {
  /**
   * List of sections of our single-page application
   */
  sections: PortfolioSection[];
}
