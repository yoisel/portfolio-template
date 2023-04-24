import styled from "@emotion/styled";
import { GridProps, Grid, Box, Typography } from "@mui/material";
import { PortfolioSection } from "../model/AppData.interface";

interface StyledSectionProps extends GridProps {
    backgroundImage?: string;
}

export const StyledSection = styled(Grid)<StyledSectionProps>(({ backgroundImage }) => ({
    paddingBottom: '48px',
    backgroundSize: 'cover',
    backgroundImage: `url(${backgroundImage})`,
}));

const SideImage = styled(Box)<{ backgroundImage?: string; backgroundColor?: string; }>(({ backgroundImage, backgroundColor }) => ({
    height: '300px',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${backgroundImage})`,
    backgroudColor: `${backgroundColor}`
}));

export const PortfolioPage = ({ id, title, backgroundImage, portfolioPageItems }: PortfolioSection) => {

    return <StyledSection id={id} container spacing={3} backgroundImage={backgroundImage || ''}>
        <Grid item xs={12} md={12}>
            <Typography variant="h4" component="h4">
                {title}
            </Typography>
        </Grid>
        {portfolioPageItems && portfolioPageItems.map(
            ((item, index) => <>
                <Grid item xs={12} md={4} key={id + '-image-' + index}>
                    <SideImage backgroundImage={item.image} backgroundColor={item.backgroundColor} />
                </Grid>
                <Grid item xs={12} md={8} key={id + '-text-' + index}>
                    <Typography variant="h6" component="h6">
                        {item.subTitle1}
                    </Typography>
                    <Typography variant="h5" component="h3">
                        {item.title}
                    </Typography>
                    <Typography variant="h6" component="h4">
                        {item.subTitle2}
                    </Typography>
                    <Typography component="p">
                        {item.contents}
                    </Typography>
                </Grid>
            </>)
        )}
    </StyledSection>
}
