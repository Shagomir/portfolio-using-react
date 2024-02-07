import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PropaneSharp } from '@mui/icons-material';

export default function ProjectCard(props) {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.data.projectImage}
        title={props.data.imageDescription}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.projectName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.projectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Visit Project</Button>
      </CardActions>
    </Card>
  );
}