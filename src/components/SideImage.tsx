import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const SideImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'backgroundColor'
})<{
  backgroundImage?: string;
  backgroundColor?: string;
}>(({ backgroundImage, backgroundColor }) => ({
  height: '300px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: `${backgroundColor}`,
  backgroundPosition: 'center'
}));
