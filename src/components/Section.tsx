import { Paper, Typography } from '@mui/material';

const Section = (props: { header?: string, id: string }) => {
  return (
    <Paper id={props.id} >
      <Typography variant="h2" component="h1" align="center">
        {props.header || props.id}
      </Typography>
      <Typography variant="body1" component="div" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod sem vel justo dapibus, vel eleifend turpis mollis. Praesent semper massa a augue faucibus, in laoreet elit luctus. Sed rhoncus enim non nunc tristique tristique. Sed a nulla bibendum, feugiat massa eget, hendrerit metus. Nullam dictum ex id libero bibendum fringilla. Suspendisse potenti. In vel erat leo. Integer aliquam ante vitae lacus sagittis, quis lacinia turpis malesuada. Suspendisse eu turpis nunc. Maecenas venenatis augue at posuere lobortis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
      </Typography>
    </Paper>
  );
};

export default Section;
