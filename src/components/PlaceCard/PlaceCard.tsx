import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
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
    // console.log(foodPlace);
    let currentDate = new Date()

    return (
        <Card sx={{ borderRadius: 2 }}>
            <CardActionArea>
                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" src={foodPlace.profile_image_url} variant="square" sx={{ width: 56, height: 56, borderRadius: 2 }} />
                    }
                    // action={
                    //     <>
                    //         <Badge color="primary" variant="dot" style={{ marginRight: '0.5rem' }} />
                    //         <b>{foodPlace.rating}</b>
                    //     </>
                    // }
                    title={<b>{foodPlace.name}</b>}
                    subheader={foodPlace.operation_time.map((r) => {
                        if (r.day === weekday[currentDate.getDay()]) {
                            if (r.time_open === "closed") {
                                return r.time_open
                            } else {
                                return (
                                    <Grid container key={r.day}>
                                        <Grid item xs={2}>
                                            <CalendarMonthIcon style={{ color: 'black' }} />
                                        </Grid>
                                        <Grid item xs={8} style={{ marginTop: '0.2rem' }}>
                                            <b >{r.time_open} - {r.time_close}</b>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Badge color="primary" variant="dot" style={{ marginRight: '0.7rem' }} />
                                            <b>{foodPlace.rating}</b>
                                        </Grid>
                                    </Grid>)
                            }
                        }
                    })}
                />
                <CardContent>
                    <ImageList sx={{ width: 370, height: 100 }} cols={3} gap={0} >
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
            </CardActionArea>
        </Card>
    )
}
