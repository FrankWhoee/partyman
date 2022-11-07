import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './layout/Header'
import {ThemeProvider} from "@mui/material/styles";
import {themeMap, ThemeKey} from "./themes";
import Footer from "./layout/Footer";

export let theme: ThemeKey;
theme = "light";

export default function App() {
  return (
      <ThemeProvider theme={themeMap[theme]}>
          <div className="App">
              <Header></Header>
              <Footer></Footer>
          </div>
      </ThemeProvider>
  );
}

