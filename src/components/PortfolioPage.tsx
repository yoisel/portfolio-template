import styled from '@emotion/styled';
import { GridProps, Grid, Box, Typography, Link } from '@mui/material';
import { PortfolioPageItem, PortfolioSection } from '../model/AppData.interface';

interface StyledSectionProps extends GridProps {
  backgroundImage?: string;
}

export const StyledSection = styled(Grid)<StyledSectionProps>(({ backgroundImage }) => ({
  paddingBottom: '48px',
  backgroundSize: 'cover',
  backgroundImage: `url(${backgroundImage})`,
  scrollMarginTop: '64px' /* required to account for our sticky header when scrolling */
}));

const SideImage = styled(Box)<{
  backgroundImage?: string;
  backgroundColor?: string;
}>(({ backgroundImage, backgroundColor }) => ({
  height: '300px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundImage: `url(${backgroundImage})`,
  backgroudColor: `${backgroundColor}`
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
        {_contents.map((paragraph) => (
          <Typography component='p' paddingTop={'10px'}>
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
          <Grid item xs={12} md={4} key={parentId + '-image-' + index}>
            <SideImage backgroundImage={image} backgroundColor={backgroundColor} />
          </Grid>
          <Grid item xs={12} md={8} key={parentId + '-text-' + index}>
            {textContents}
          </Grid>
        </>
      ) : (
        <Grid item xs={12} md={12} key={parentId + '-text-' + index}>
          {textContents}
        </Grid>
      )}
    </>
  );
};

export const PortfolioPage = ({ id, title, backgroundImage, portfolioPageItems }: PortfolioSection) => {
  return (
    <StyledSection id={id} container spacing={3} backgroundImage={backgroundImage || ''}>
      <Grid item xs={12} md={12}>
        <Typography variant='h4' component='h4'>
          {title}
        </Typography>
      </Grid>
      {portfolioPageItems &&
        portfolioPageItems.map((item, index) => <PageItem {...item} index={index} parentId={id} />)}
    </StyledSection>
  );
};
