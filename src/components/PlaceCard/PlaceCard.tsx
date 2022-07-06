import React from 'react'
import './PlaceCard.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Grid from '@mui/material/Grid';

type OperationTime = {
    day: string;
    time_open: string;
    time_close: string;
}

type FoodPlaceProp = {
    id: number;
    name: string;
    categories: string[];
    profile_image_url: string;
    images: string[];
    operation_time: OperationTime[];
    address: string;
    rating: number;
}

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function PlaceCard(foodPlace: FoodPlaceProp) {
    let currentDate = new Date()

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

    return (
        <div>
            <Card sx={{ borderRadius: 4 }}>
                <CardActionArea>
                    <Link to={`/detail/${foodPlace.id}`} className="link">
                        <CardMedia
                            component="img"
                            height="140"
                            image={foodPlace.profile_image_url}
                            alt="header"
                            sx={{ display: { xs: 'block', sm: 'none' } }}
                        />
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" src={foodPlace.profile_image_url} variant="square" sx={{ width: 56, height: 56, borderRadius: 2, display: { xs: 'none', sm: 'block' } }} />
                            }
                            title={<b>{foodPlace.name}</b>}
                            subheader={foodPlace.operation_time.map((r) => {
                                if (r.day === weekday[currentDate.getDay()]) {
                                    if (r.time_open === "closed") {
                                        return r.time_open
                                    } else {
                                        return (
                                            <Grid container key={r.day} >
                                                <Grid item xs={1}>
                                                    <CalendarMonthIcon style={{ color: 'black' }} />
                                                </Grid>
                                                <Grid item xs={9} style={{ marginTop: '0.2rem' }}>
                                                    <b >{toHour12Format(r.time_open)} - {toHour12Format(r.time_close)}</b>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Badge color="primary" variant="dot" style={{ marginRight: '0.7rem' }} />
                                                    <b style={{ color: '#134B8A' }}>{foodPlace.rating}</b>
                                                </Grid>
                                            </Grid>
                                        )
                                    }
                                }
                            })}
                        />
                        <CardContent>
                            <ImageList sx={{ width: '100%', height: 225 }} cols={3} gap={0} >
                                {foodPlace.images.map((item) => (
                                    <ImageListItem key={item}>
                                        <img
                                            src={item}
                                            srcSet={item}
                                            loading="lazy"
                                            style={{ borderRadius: 3 }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </CardContent>
                    </Link>
                </CardActionArea>
            </Card>
        </div>

    )
}
