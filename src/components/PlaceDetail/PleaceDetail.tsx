import React, { useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import data from '../../data/example_data.json'
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  flexGrow: {
    flex: '1',
  },
  button: {
    backgroundColor: '#134B8A',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#0F1E56',
      color: '#fff',
    },
  }
})

export default function PleaceDetail() {
  const classes = useStyles();
  const params = useParams();
  const placeId = Number(params.id);
  const placeDetail = data.filter(r => r.id === placeId);
  console.log(placeDetail);

  const toHour12Format = (time: string) => {
    let timeString = ''
    if(time.length < 5) timeString = "0" + time + ':00'
    else timeString = time + ':00'
    console.log(timeString);
    
    // Prepend any date. Use your birthday.
    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
      .toLocaleTimeString('en-US',
        {timeZone:'UTC',hour12:true,hour:'numeric',minute:'numeric'}
      );
    return timeString12hr
  }

  return (
    <div >
      <Box component="main" sx={{
        p: 3, backgroundColor: '#E5E5E5', height: '100vh', minHeight: '100vh'
      }} >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: '0.5rem' }}>
          <Grid item xs={8}>
            <Link to={`/`} className="link">
              <Button className={classes.button} variant="contained" style={{ borderRadius: 20 }}> {'<'} Back</Button>
            </Link>
          </Grid>
        </Grid>
        <Box
          component="main"
          sx={{
            backgroundColor: '#C4D3E9',
            height: '90vh',
            minWidth: '90vh',
            marginTop: '1rem'
          }}
        >
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            <Grid item xs={7} style={{ marginLeft: '1rem' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={placeDetail[0].profile_image_url}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    <b>{placeDetail[0].name}
                    </b>
                    <Typography gutterBottom variant="subtitle1" align='right'>
                      {placeDetail[0].rating}
                    </Typography>
                  </Typography>
                  <Grid container>
                    <Grid item xs={2}>
                      <b style={{ color: 'black' }}>Address :</b>
                    </Grid>
                    <Grid item xs={8}>
                      <b style={{ color: 'black' }}>{placeDetail[0].address}</b>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container>
                    <Grid item xs={2}>
                      <b style={{ color: 'black' }}>Opening Hour :</b>
                    </Grid>
                    <Grid item xs={6}>
                      <ul>
                        {placeDetail[0].operation_time.map((res) => {
                          if (res.time_open === 'closed') {
                            return (
                              <li key={res.day}><b>{res.day}: Closed</b></li>
                            )
                          }
                          else {
                            return (
                              <li key={res.day}><b>{res.day}: {toHour12Format(res.time_open)} - {toHour12Format(res.time_close)}</b></li>
                            )
                          }

                        })}
                      </ul>
                    </Grid>
                  </Grid>

                  {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>

          </Grid>

        </Box>
        {/* </Grid> */}
      </Box>
    </div >
  )
}
