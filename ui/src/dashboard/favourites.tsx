import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Avatar, Card, CardContent, CardMedia, CircularProgress, CircularProgressProps} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";

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

interface AgentAvatarProps {
    avatarSize: number;
    agentDisplayIcon: string;
    playerName: string;
    playerTitle: string;
}

interface StatBoxProps{
    label: string;
    value: string;
}

function AgentAvatar(props: AgentAvatarProps) {
    return (<Box>
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
            <Avatar sx={{width: props.avatarSize, height: props.avatarSize}} src={props.agentDisplayIcon}></Avatar>
        </Box>
        <br></br>
        <Typography gutterBottom variant="body1" component="div" fontFamily={"Staatliches"}>
            {props.playerName}
        </Typography>
        <Typography gutterBottom variant="caption" component="div" fontFamily={"Staatliches"}>
            {props.playerTitle}
        </Typography>
    </Box>)
}

function StatBox(props: StatBoxProps){
    return(<Grid2 xs={2}>
        <Typography gutterBottom variant="caption" component="div" fontFamily={"Staatliches"}>
            {props.label}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
            {props.value}
        </Typography>
    </Grid2>)
}

export default class Favourites extends React.Component<any, any> {
    render() {
        const avatarSize = 80;

        return (
            <Card>
                <CardMedia
                    component="img"
                    height="140"
                    image="https://media.valorant-api.com/maps/e2ad5c54-4114-a870-9641-8ea21279579a/splash.png"
                    alt="green iguana"
                >

                </CardMedia>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={"Staatliches"}>
                        SDN-01
                    </Typography>
                    <Grid2 container>
                        <Grid2 xs textAlign={"center"}>
                            <AgentAvatar
                                avatarSize={avatarSize}
                                playerTitle={"TRADER PLANTER DUELIST"}
                                playerName={"SDN TreeRacks#004"}
                                agentDisplayIcon={"https://media.valorant-api.com/agents/eb93336a-449b-9c1b-0a54-a891f7921d69/displayicon.png"}
                            />
                        </Grid2>
                        <Grid2 xs textAlign={"center"}>
                            <AgentAvatar
                                avatarSize={avatarSize}
                                playerTitle={"ENTRY DUELIST"}
                                playerName={"SDN FrankWhoee#005"}
                                agentDisplayIcon={"https://media.valorant-api.com/agents/f94c3b30-42be-e959-889c-5aa313dba261/displayicon.png"}
                            />
                        </Grid2>
                        <Grid2 xs textAlign={"center"}>
                            <AgentAvatar
                                avatarSize={avatarSize}
                                playerTitle={"BAITER SENTINEL"}
                                playerName={"Oblivious#006"}
                                agentDisplayIcon={"https://media.valorant-api.com/agents/22697a3d-45bf-8dd7-4fec-84a9e28c69d7/displayicon.png"}
                            />
                        </Grid2>
                        <Grid2 xs textAlign={"center"}>
                            <AgentAvatar
                                avatarSize={avatarSize}
                                playerTitle={"DUELIST"}
                                playerName={"SDN KazzaZoo#001"}
                                agentDisplayIcon={"https://media.valorant-api.com/agents/add6443a-41bd-e414-f6ad-e58d267f4e95/displayicon.png"}
                            />
                        </Grid2>
                        <Grid2 xs textAlign={"center"}>
                            <AgentAvatar
                                avatarSize={avatarSize}
                                playerTitle={"INITIATOR"}
                                playerName={"TheFlash1205#003"}
                                agentDisplayIcon={"https://media.valorant-api.com/agents/5f8d3a7f-467b-97f3-062c-13acf203c006/displayicon.png"}
                            />
                        </Grid2>
                        <Grid2 xs={12} container>
                            <Grid2 xs={2}>
                                <Typography gutterBottom variant="caption" component="div" fontFamily={"Staatliches"}>
                                    WINRATE
                                </Typography>
                                <WinrateCircle value={67}/>
                            </Grid2>
                            <StatBox
                                label={"BEST MAP"}
                                value={"Icebox"}
                            />
                            <StatBox
                                label={"WORST MAP"}
                                value={"Haven"}
                            />
                            <StatBox
                                label={"Games"}
                                value={"1984"}
                            />
                            <StatBox
                                label={"Thrifty WR"}
                                value={"30%"}
                            />
                            <StatBox
                                label={"Anti-Eco WR"}
                                value={"90%"}
                            />
                            <StatBox
                                label={"FB CR"}
                                value={"78%"}
                            />
                            <StatBox
                                label={"Ult CR"}
                                value={"50%"}
                            />
                            <StatBox
                                label={"Ult Rate"}
                                value={"30%"}
                            />
                            <StatBox
                                label={"Comeback WR"}
                                value={"20%"}
                            />
                            <StatBox
                                label={"ATK WR"}
                                value={"40%"}
                            />
                            <StatBox
                                label={"DEF WR"}
                                value={"60%"}
                            />
                            <StatBox
                                label={"Revenge Time"}
                                value={"10.4s"}
                            />
                            <StatBox
                                label={"FB Revenge Time"}
                                value={"0.8s"}
                            />
                            <StatBox
                                label={"Postplant WR"}
                                value={"100%"}
                            />
                            <StatBox
                                label={"Plant Rate"}
                                value={"80%"}
                            />
                        </Grid2>
                    </Grid2>
                </CardContent>
            </Card>
        );
    }
}

