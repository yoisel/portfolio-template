import { Container } from '@mui/material';
import { AppConfig } from '../model/AppData.interface';
import { PortfolioPage } from './PortfolioPage';

export const AppContents = (appConfig: AppConfig) => {
  return (
    <Container maxWidth='lg' style={{ paddingTop: '30px' }}>
      {appConfig.sections?.map((section) => {
        return (
          <PortfolioPage
            key={'page-' + section.id}
            id={section.id}
            title={section.title}
            backgroundImage={section.backgroundImage}
            portfolioPageItems={section.portfolioPageItems}
          />
        );
      })}
    </Container>
  );
};
