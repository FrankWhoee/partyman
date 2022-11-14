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
import Favourites from "./dashboard/favourites";

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
                          <Grid2  xs={6}>
                              <Stack direction="row" alignItems="center" gap={1}>
                                  <Icons.Star color={"warning"} />
                                  <Typography variant="h6" fontFamily={"Staatliches"}>FAVOURITES</Typography>
                              </Stack>
                          </Grid2>
                          <Grid2  xs={12}>
                              <Favourites></Favourites>
                          </Grid2>
                      </Grid2>
                      <Grid2  xs={4}>
                          <Grid2  xs={6}>
                              <Stack direction="row" alignItems="center" gap={1}>
                                  <Icons.History color={"secondary"} />
                                  <Typography variant="h6" fontFamily={"Staatliches"}>RECENT MATCHES</Typography>
                              </Stack>
                          </Grid2>
                          <Grid2  xs={12}>
                              <Card>xs=6</Card>
                          </Grid2>
                      </Grid2>
                      <Grid2  xs={8}>
                          <Grid2  xs={6}>
                              <Stack direction="row" alignItems="center" gap={1}>
                                  <Icons.BarChart color={"primary"} />
                                  <Typography variant="h6" fontFamily={"Staatliches"}>MOST FREQUENT</Typography>
                              </Stack>
                          </Grid2>
                          <Grid2  xs={12}>
                              <Card>xs=6</Card>
                          </Grid2>
                      </Grid2>

                  </Grid2>
              </Container>
              <Footer></Footer>
          </div>
      </ThemeProvider>
  );
}

