import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {
    autocompleteClasses,
    Avatar, Badge,
    Card,
    CardContent,
    CircularProgress,
    CircularProgressProps,
    LinearProgress,
    LinearProgressProps
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import {styled} from '@mui/material/styles';
import {valorantColours} from "../themes";
import {AgentAvatar} from "./AgentAvatar";


function WinrateCircle(
    props: CircularProgressProps & { value: number },
) {
    return (
        <Box sx={{position: 'relative', display: 'inline-flex'}}>
            <CircularProgress variant="determinate" {...props} />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    color="text.secondary"
                >{`${Math.round(props.value)}%`}</Typography>
            </Box>
        </Box>
    );
}

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value,
                )}%`}</Typography>
            </Box>
        </Box>
    );
}





interface StatBoxProps {
    label: string;
    value: string;
}

function StatBox(props: StatBoxProps) {
    return (<Grid2 xs>
        <Typography gutterBottom variant="caption" component="div" fontFamily={"Staatliches"}>
            {props.label}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
            {props.value}
        </Typography>
    </Grid2>)
}

interface PercentBoxProps {
    label: string;
    value: number;
}

function PercentBox(props: PercentBoxProps) {
    return (<Grid2 xs={6}>
        <Typography gutterBottom variant="caption" component="div" fontFamily={"Staatliches"}>
            {props.label}
        </Typography>
        <LinearProgressWithLabel
            value={props.value}
        />
    </Grid2>)
}

const SmallAvatar = styled(Avatar)(({theme}) => ({
    width: 15,
    height: 15,
    border: `2px solid black`,
    background: 'black'
}));

export default class PlayerHover extends React.Component<any, any> {
    render() {
        const avatarSize = 60;

        return (
                    <Box sx={{p:2}}>
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                mb: 2
                        }}>
                            <Badge
                                overlap="circular"
                                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                                badgeContent={
                                    <SmallAvatar
                                        sx={{filter: 'invert(100%)'}}
                                        src={"https://media.valorant-api.com/agents/roles/dbe8757e-9e92-4ed4-b39f-9dfc589691d4/displayicon.png"}/>
                                }
                            >
                                <Avatar sx={{width: 80, height: 80}} src={"https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"}></Avatar>
                            </Badge>
                            <Typography variant="caption" component="div" fontFamily={"Staatliches"} sx={{mx:2}}>
                                SDN FrankWhoee#005
                            </Typography>
                            <Typography variant="caption" component="div" fontFamily={"Staatliches"} sx={{mx:2}}>
                                ENTRY DUELIST
                            </Typography>
                        </Box>
                        <Grid2 container>
                            <Grid2 xs={3}>
                                <Typography gutterBottom variant="caption" component="div"
                                            fontFamily={"Staatliches"}>
                                    WR
                                </Typography>
                                <WinrateCircle value={67}/>
                            </Grid2>
                        </Grid2>
                    </Box>
        );
    }
}

