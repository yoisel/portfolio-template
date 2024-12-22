import styled from '@emotion/styled';
import { GridProps, Grid, Box, Typography, Link } from '@mui/material';
import { PortfolioPageItem, PortfolioSection } from '../model/AppData.interface';

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
  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8) ), url(${backgroundImage});`,
  /* required to account for our sticky header when scrolling */
  scrollMarginTop: '64px'
}));

const SideImage = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'backgroundImage' && prop !== 'backgroundColor'
})<{
  backgroundImage?: string;
  backgroundColor?: string;
}>(({ backgroundImage, backgroundColor }) => ({
  height: '300px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${backgroundImage})`,
  backgroundColor: `${backgroundColor}`
}));

type PageItemProps = PortfolioPageItem & { index: number; parentId: string };

const PageItem = ({
  index,
  parentId,
  backgroundColor,
  image,
  title,
  subTitle1,
  subTitle2,
  contents,
  link,
  linkText
}: PageItemProps) => {
  const _contents = Array.isArray(contents) ? contents : [contents];

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

  const styles = { style: { paddingTop: '30px' } };

  return (
    <>
      {image ? (
        <>
          <Grid item xs={12} md={4} key={parentId + '-image-' + index} {...styles}>
            <SideImage backgroundImage={image} backgroundColor={backgroundColor} />
          </Grid>
          <Grid item xs={12} md={8} key={parentId + '-text-' + index} {...styles}>
            {textContents}
          </Grid>
        </>
      ) : (
        <Grid item xs={12} md={12} key={parentId + '-text-' + index} {...styles}>
          {textContents}
        </Grid>
      )}
    </>
  );
};

export const PortfolioPage = ({ id, title, description, backgroundImage, portfolioPageItems }: PortfolioSection) => {
  return (
    <StyledSection id={id} container spacing={3} backgroundImage={backgroundImage || ''}>
      <Grid item xs={12} md={12}>
        <Typography variant='h4' component='h4'>
          {title}
        </Typography>
        <Typography variant='h6' component='h6'>
          {description}
        </Typography>
      </Grid>
      {portfolioPageItems &&
        portfolioPageItems.map((item, index) => <PageItem key={index} {...item} index={index} parentId={id} />)}
    </StyledSection>
  );
};
