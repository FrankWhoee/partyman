import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header'
import {ThemeProvider} from "@mui/material/styles";
import {themeMap, ThemeKey} from "./themes";
import Footer from "./layout/Footer";
import {Card, Container, Stack} from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2';
import * as Icons from '@mui/icons-material';
import Typography from "@mui/material/Typography";
import Favourites from "./dashboard/Favourites";
import Recents from "./dashboard/Recents";
import Popular from "./dashboard/Popular";

export let theme: ThemeKey;
theme = "light";

export default function App() {
  return (
      <ThemeProvider theme={themeMap[theme]}>
          <div className="App">
              <Header></Header>
              <Container maxWidth={"xl"}>
                  <Grid2 container spacing={5} >
                      <Grid2  xs={8}>
                         <Favourites></Favourites>
                      </Grid2>
                      <Grid2  xs={4}>
                         <Recents></Recents>
                      </Grid2>
                      <Grid2  xs={8}>
                          <Popular></Popular>
                      </Grid2>
                  </Grid2>
              </Container>
              <Footer></Footer>
          </div>
      </ThemeProvider>
  );
}

