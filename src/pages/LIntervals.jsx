import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Box from '@mui/material/Box';

export default function LIntervals({
  title,
  description,
  origin,
  fitness_level,
  buttonText = 'Share', 
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh', 
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            alt="runner"
            image="https://www.shutterstock.com/shutterstock/photos/2485563017/display_1500/stock-photo-music-exercise-and-woman-running-at-park-for-healthy-body-wellness-or-fitness-workout-earphones-2485563017.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {origin}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {fitness_level}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">{buttonText}</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
