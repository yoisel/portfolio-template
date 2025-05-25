import { IconButton, SvgIcon } from '@mui/material';
import { ReactComponent as StackoverflowIcon } from '../assets/social/stackoverflow.svg';
import { ReactComponent as GithubIcon } from '../assets/social/github.svg';
import { ReactComponent as LinkedinIcon } from '../assets/social/linkedin.svg';
import { ReactComponent as FacebookIcon } from '../assets/social/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/social/instagram.svg';
import { SocialLinks } from '../model/AppData.interface';

export const SocialIcons = (props: SocialLinks) => (
  <div style={{ display: 'flex', gap: '2px' }}>
    {props.stackoverflow && (
      <IconButton color='default' href={props.stackoverflow} target='_blank'>
        <SvgIcon component={StackoverflowIcon} inheritViewBox />
      </IconButton>
    )}
    {props.github && (
      <IconButton color='default' href={props.github} target='_blank'>
        <SvgIcon component={GithubIcon} inheritViewBox />
      </IconButton>
    )}
    {props.linkedin && (
      <IconButton color='default' href={props.linkedin} target='_blank'>
        <SvgIcon component={LinkedinIcon} inheritViewBox />
      </IconButton>
    )}
    {props.facebook && (
      <IconButton color='default' href={props.facebook} target='_blank'>
        <SvgIcon component={FacebookIcon} inheritViewBox />
      </IconButton>
    )}
    {props.instagram && (
      <IconButton color='default' href={props.instagram} target='_blank'>
        <SvgIcon component={InstagramIcon} inheritViewBox />
      </IconButton>
    )}
  </div>
);
