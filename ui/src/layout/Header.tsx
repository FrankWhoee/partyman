import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import * as Icons from '@mui/icons-material';

export default class Header extends React.Component<any, any>{
    render(){
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="transparent"  elevation={0}>
                    <Toolbar>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: {xs: 'none', md: 'flex'},
                                fontFamily: 'Staatliches',
                                color: 'inherit',
                                letterSpacing: '.1rem',
                                textDecoration: 'none',
                                flexGrow: 1,
                            }}
                        >
                            🎉 PARTYMAN
                        </Typography>
                        <IconButton component="label">
                            <Icons.Search />
                        </IconButton>
                        <IconButton component="label">
                            <Icons.Person></Icons.Person>
                        </IconButton>
                        <IconButton component="label">
                            <Icons.AddBoxOutlined></Icons.AddBoxOutlined>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}