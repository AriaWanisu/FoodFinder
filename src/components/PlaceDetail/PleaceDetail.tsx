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
import { CardHeader } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles({
  root: {
    '& .MuiBadge-colorPrimary': {
      color: '#134B8A'
    }
  },
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
    if (time.length < 5) timeString = "0" + time + ':00'
    else timeString = time + ':00'

    const timeString12hr = new Date('1970-01-01T' + timeString + 'Z')
      .toLocaleTimeString('en-US',
        { timeZone: 'UTC', hour12: true, hour: 'numeric', minute: 'numeric' }
      );
    return timeString12hr
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <div >
      <Box component="main" sx={{ p: 3, backgroundColor: '#E5E5E5', height: '100%', minHeight: '100vh' }} >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }} style={{ marginTop: '0.5rem' }}>
          <Grid item xs={8}>
            <Link to={`/`} className="link">
              <Button className={classes.button} variant="contained" style={{ borderRadius: 20 }}> {'<'} Back</Button>
            </Link>
          </Grid>
        </Grid>
        <Box component="main">
          <Grid container rowSpacing={2} columns={{ xs: 1, sm: 1, md: 12 }}
            sx={{
              backgroundColor: '#C4D3E9',
              marginTop: '1rem',
              borderRadius: 4
            }}
          >
            <Grid item md={7} xs={1} sm={1} style={{ marginLeft: '1rem', marginRight: '1rem' }} >
              <Card sx={{ display: { xs: 'none', sm: 'block' } }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={placeDetail[0].profile_image_url}
                  alt="place pic"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    <b>{placeDetail[0].name}
                    </b>
                    <Typography gutterBottom variant="subtitle1" align='right'>
                      <Badge color="primary" variant="dot" style={{ marginRight: '0.7rem' }} />
                      <b style={{ color: '#134B8A' }}>{placeDetail[0].rating}</b>
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
                </CardContent>
              </Card>
              <Card sx={{ display: { xs: 'block', sm: 'none' } }}>
                <CardMedia
                  component="img"
                  height="500"
                  image={placeDetail[0].profile_image_url}
                  alt="place pic"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div" >
                    <b>{placeDetail[0].name}
                    </b>
                    <Typography gutterBottom variant="subtitle1" align='right'>
                      <Badge color="primary" variant="dot" style={{ marginRight: '0.7rem' }} />
                      <b style={{ color: '#134B8A' }}>{placeDetail[0].rating}</b>
                    </Typography>
                  </Typography>
                  <Grid container>
                    <Grid item xs={8}>
                      <b style={{ color: 'black' }}>Address :</b>
                    </Grid>
                    <Grid item xs={12}>
                      <span style={{ color: 'black' }}>{placeDetail[0].address}</span>
                    </Grid>
                  </Grid>
                  <br />
                  <Grid container>
                    <Grid item xs={12}>
                      <b style={{ color: 'black' }}>Opening Hour :</b>
                    </Grid>
                    <Grid item xs={12}>
                      <ul>
                        {placeDetail[0].operation_time.map((res) => {
                          if (res.time_open === 'closed') {
                            return (
                              <li key={res.day}><span>{res.day}: Closed</span></li>
                            )
                          }
                          else {
                            return (
                              <li key={res.day}><span>{res.day}: {toHour12Format(res.time_open)} - {toHour12Format(res.time_close)}</span></li>
                            )
                          }
                        })}
                      </ul>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} style={{ marginLeft: '1rem', marginBottom: '1rem', marginRight: '1rem' }}>
              <Card>
                <CardHeader title={<b>Images</b>} />
                <CardContent>
                  <ImageList sx={{ width: '100%', height: '100%' }} cols={1} >
                    {placeDetail[0].images.map((item) => (
                      <ImageListItem key={item}>
                        <img
                          src={item}
                          srcSet={item}
                          alt={item}
                          loading="lazy"
                        />
                      </ImageListItem>
                    ))}
                  </ImageList>
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
