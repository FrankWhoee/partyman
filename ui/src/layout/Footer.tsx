import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as Icons from '@mui/icons-material';
import {BottomNavigation, Container, Grid, Paper, Stack, tooltipClasses} from "@mui/material";

export default class Footer extends React.Component<any, any>{
    render(){
        return (
            <Stack direction="column" justifyContent="center" textAlign={"center"}
                sx={{
                    alignContent: 'center',
                    justifyContent: 'center',
                    maxWidth: '100%',
                    width: '100%',
                    height: '25vh',
                    bottom: 0
                }}
            >
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        sx={{
                            fontFamily: 'Staatliches',
                            color: 'inherit',
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                        }}
                    >
                        🎉 PARTYMAN
                    </Typography>
                <br></br>
                <Box>
                    <Typography
                        variant="body1"
                        noWrap
                        component="a"
                        href={'https://github.com/FrankWhoee/partyman'}
                        target="_blank"
                        sx={{
                            fontFamily: 'Staatliches',
                            color: 'inherit',
                            letterSpacing: '.1rem',
                            textDecoration: 'none'
                        }}
                    >
                        <Icons.GitHub></Icons.GitHub>
                    </Typography>
                </Box>
            </Stack>
        );
    }
}