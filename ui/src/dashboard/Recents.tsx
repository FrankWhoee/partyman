import * as React from "react";
import Grid2 from "@mui/material/Unstable_Grid2";
import {Stack} from "@mui/material";
import * as Icons from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import GameShort from "./GameShort";
import Box from "@mui/material/Box";

export default class Recents extends React.Component<any, any> {
    render(){
        return (<Box>
            <Grid2  xs={6}>
                <Stack direction="row" alignItems="center" gap={1}>
                    <Icons.History color={"secondary"} />
                    <Typography variant="h6" fontFamily={"Staatliches"}>RECENT MATCHES</Typography>
                </Stack>
            </Grid2>
            <Grid2  xs={12}>
                <GameShort></GameShort>
            </Grid2>
        </Box>)
    }
}