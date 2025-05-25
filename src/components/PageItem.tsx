import { Typography, Link, Grid, useTheme, useMediaQuery } from '@mui/material';
import { PortfolioPageItem } from '../model/AppData.interface';
import { SideImage } from './SideImage';

type PageItemProps = PortfolioPageItem & { imagePosition?: 'left' | 'right' };

const styles = { style: { paddingTop: '30px' } };

export const PageItem = ({
  backgroundColor,
  image,
  title,
  subTitle1,
  subTitle2,
  contents,
  link,
  linkText,
  imagePosition = 'left' // Default to 'left'
}: PageItemProps) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const _contents = Array.isArray(contents) ? contents : [contents];
  imagePosition = isSmallScreen ? 'left' : imagePosition;

  const textContents = (
    <>
      <Typography variant='h6' component='h6' lineHeight={'32px'}>
        {subTitle1}
      </Typography>
      <Typography variant='h5' component='h3' lineHeight={'32px'}>
        {title}
      </Typography>
      <Typography variant='h6' component='h6' lineHeight={'32px'}>
        {subTitle2}
      </Typography>
      {link && (
        <Link lineHeight={'32px'} href={link}>
          {linkText || link}
        </Link>
      )}
      <div style={{ paddingTop: '10px' }}>
        {_contents.map((paragraph, index) => (
          <Typography key={index} component='p' paddingTop={'10px'}>
            {paragraph}
          </Typography>
        ))}
      </div>
    </>
  );
  return (
    <>
      {image ? (
        <>
          {imagePosition === 'left' && image && (
            <Grid item xs={12} md={4} {...styles}>
              <SideImage backgroundImage={image} backgroundColor={backgroundColor} />
            </Grid>
          )}
          <Grid item xs={12} md={8} {...styles}>
            {textContents}
          </Grid>
          {imagePosition === 'right' && image && (
            <Grid item xs={12} md={4} {...styles}>
              <SideImage backgroundImage={image} backgroundColor={backgroundColor} />
            </Grid>
          )}
        </>
      ) : (
        <Grid item xs={12} md={12} {...styles}>
          {textContents}
        </Grid>
      )}
    </>
  );
};
