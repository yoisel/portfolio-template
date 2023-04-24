import React from "react";
import { AppBar, Toolbar, Avatar, Typography, IconButton, Button, Menu, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { SocialIcons } from "./SocialIcons";
import { AppHeaderConfig } from "../model/AppData.interface";

export const AppHeader = (props: AppHeaderConfig) => {

    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isSmallScreen);

    const handleMenuButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            handleMenuClose();
        }
    };

    return <AppBar position="static">
        <Toolbar>
            <div style={{ flexGrow: 1, display: 'flex', gap: '8px' }}>
                <Avatar alt='Picture of Fulano de Tal' src={props.avatarImage} />
                <Typography variant="h6" >
                    {props.title}
                </Typography>
                <SocialIcons {...props.social} />
            </div>
            {isSmallScreen ? (
                <IconButton onClick={handleMenuButtonClick} size="large" edge="end" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
            ) : (<div style={{ display: 'flex', flexGrow: 1, gap: '4px' }}>
                {props.sections?.map(section => <Button key={'buttons' + section.id} variant="contained" onClick={() => scrollToSection(section.id)} >{section.title}</Button>)}
            </div>)}
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                open={!!anchorEl}
                onClose={handleMenuClose}
                MenuListProps={{ 'aria-labelledby': 'basic-button' }}
            >
                {props.sections?.map(section => <MenuItem onClick={() => scrollToSection(section.id)}>{section.title}</MenuItem>)}
            </Menu>
        </Toolbar>
    </AppBar>;
}
