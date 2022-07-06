import React, { useState, useEffect } from 'react'
import './PlaceList.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import data from '../../data/example_data.json'
import PlaceCard from '../PlaceCard';
import usePagination from "./Pagination";
import Pagination from '@mui/material/Pagination';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    '& .MuiPaginationItem-root': {
      backgroundColor: '#FFF',
    },
    '& .Mui-selected': {
      backgroundColor: '#134B8A',
      color: '#FFF',
    },
    '& .MuiSelect-select': {
      // border: '#134B8A',
      // color: '#FFF',
    },
  },
});

const type = [
  'restaurant',
  'bakery',
  'cafe',
];

export default function PlaceList() {
  const classes = useStyles();
  const [foodData, setFoodData] = useState(data);
  const [placeList, setPlaceList] = useState([]);
  const [page, setPage] = useState(1);
  const PER_PAGE = 9;
  let count = Math.ceil(placeList.length / PER_PAGE);
  let _DATA = usePagination(placeList, PER_PAGE);
  let [placeType, setPlaceType] = React.useState('restaurant');

  const handleSelectChange = (event: SelectChangeEvent) => {
    setPlaceType(event.target.value as string);
    filterPlace(event.target.value);
    _DATA.jump(1);
    setPage(1);
    window.scrollTo(0, 0)
  };

  useEffect(() => {
    // console.log(placeType);
    filterPlace(placeType);
  }, [])

  const handleChange = (e: any, p: any) => {
    setPage(p);
    _DATA.jump(p);
    window.scrollTo(0, 0)
  };

  const filterPlace = (filter: string) => {
    let arr: any = [];
    foodData.map((res) => {
      res.categories.forEach((item) => {
        if (item === filter) {
          arr.push(res);
        }
      })
    })
    console.log(arr);
    setPlaceList(arr);
    count = Math.ceil(arr.length / PER_PAGE);
  }

  return (
    <div >
      <Box component="main" sx={{ p: 3, backgroundColor: '#E5E5E5', height: '100%', minHeight: '100vh' }} >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ marginTop: '0.5rem' }}>
          <Grid item xs={8}>
            <h2>Place List</h2>
          </Grid>
          <Grid item xs={4}>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <Select
                  className={classes.root}
                  value={placeType}
                  onChange={handleSelectChange}
                  displayEmpty
                  inputProps={{ 'aria-label': 'Without label' }}
                  sx={{ backgroundColor: "white", borderRadius: 6 }}
                >
                  {type.map((type) => (
                    <MenuItem
                      key={type}
                      value={type}
                    // style={getStyles(name, personName, theme)}
                    // style={{ borderRadius: 4 }}
                    >
                      <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Box>
          <Grid container spacing={{ xs: 1, md: 3 }} columns={{ xs: 1, sm: 1, md: 12 }} >
            {_DATA ? _DATA.currentData().map((v: any) => {
              return (
                <Grid item key={v.id} xs={1} sm={1} md={4}>
                  <PlaceCard {...v} />
                </Grid>
              );
            }) : (<></>)}
            {/* {foodData ? (<>
              {foodData.map((res) => {
                return (
                  <Grid item key={res.id} xs={1} sm={1} md={4} >
                    <PlaceCard {...res} />
                  </Grid>
                )
              })}
            </>) : (<></>)} */}
          </Grid>
          <Box>
            <Grid container spacing={{ flexGrow: 1 }} style={{ marginTop: '2rem' }} >
              <Grid item xs={12}>
                <Grid container justifyContent="center">
                  <Pagination
                    className={classes.root}
                    count={count}
                    size="large"
                    page={page}
                    variant="outlined"
                    // shape="rounded"
                    color="primary"
                    onChange={handleChange}
                    sx={{ borderColor: "red", color: "black" }}
                  />
                </Grid>

              </Grid>

            </Grid>

          </Box>
        </Box>
      </Box>
    </div >
  )
}
