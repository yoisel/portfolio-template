import { Grid, Typography } from '@mui/material';
import { PortfolioSection } from '../model/AppData.interface';
import { StyledSection } from './StyledSection';
import { PageItem } from './PageItem';

export const PortfolioPage = ({ id, title, description, backgroundImage, portfolioPageItems }: PortfolioSection) => {
  return (
    <StyledSection id={id} container spacing={3} backgroundImage={backgroundImage || ''}>
      {(title || description) && (
        <Grid item xs={12} md={12}>
          {title && (
            <Typography variant='h4' component='h4'>
              {title}
            </Typography>
          )}
          {description && (
            <Typography variant='h6' component='h6'>
              {description}
            </Typography>
          )}
        </Grid>
      )}
      {portfolioPageItems && portfolioPageItems.map((item, index) => <PageItem key={index} {...item} />)}
    </StyledSection>
  );
};
