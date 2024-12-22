import { Container } from '@mui/material';
import { AppConfig } from '../model/AppData.interface';
import { PortfolioPage } from './PortfolioPage';

export const AppContents = (appConfig: AppConfig) => {
  return (
    <Container maxWidth='lg' style={{ paddingTop: '30px' }}>
      {appConfig.sections?.map((section, index) => {
        return (
          <PortfolioPage
            key={index}
            id={section.id}
            title={section.title}
            description={section.description}
            backgroundImage={section.backgroundImage}
            portfolioPageItems={section.portfolioPageItems}
          />
        );
      })}
    </Container>
  );
};
