import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    Accordion,
    AccordionSummary,
    Avatar,
    Badge,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    CircularProgressProps, LinearProgress, LinearProgressProps,
    Stack
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {styled} from '@mui/material/styles';
import * as Icons from "@mui/icons-material";
import Party from "./Party";


export default class Favourites extends React.Component<any, any> {
    render() {
        return (<Box>
            <Grid2  xs={6}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Icons.Star color={"warning"} />
                    <Typography variant="h6" fontFamily={"Staatliches"}>FAVOURITES</Typography>
                </Stack>
            </Grid2>
            <Grid2  xs={12}>
                <Party></Party>
            </Grid2>
        </Box>)
    }
}