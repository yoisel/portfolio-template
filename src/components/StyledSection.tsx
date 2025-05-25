import styled from '@emotion/styled';
import { Grid, GridProps } from '@mui/material';

interface StyledSectionProps extends GridProps {
  backgroundImage?: string;
}

export const StyledSection = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage'
})<StyledSectionProps>(({ backgroundImage }) => ({
  paddingTop: '24px',
  paddingBottom: '48px',
  backgroundSize: 'cover',
  /* making the background image opaque without affecting the rest of the contents */
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${backgroundImage})`,
  /* required to account for our sticky header when scrolling */
  scrollMarginTop: '64px'
}));
