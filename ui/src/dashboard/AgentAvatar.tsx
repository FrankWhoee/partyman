import Box from "@mui/material/Box";
import {Avatar, Badge} from "@mui/material";
import Typography from "@mui/material/Typography";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import * as React from "react";
import { styled } from '@mui/material/styles';
import PlayerHover from "./PlayerHover";

interface AgentAvatarProps {
    roleDisplayIcon: string;
    avatarSize: number;
    agentDisplayIcon: string;
    playerName: string;
    playerTitle: string;
}

const SmallAvatar = styled(Avatar)(({theme}) => ({
    width: 15,
    height: 15,
    border: `2px solid black`,
    background: 'black'
}));

const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        width: 1000,
        fontSize: theme.typography.pxToRem(12),
        border: '0px solid #dadde9',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
    },
}));

export function AgentAvatar(props: AgentAvatarProps) {
    return (
        <HtmlTooltip

            title={
            <React.Fragment>
                <PlayerHover></PlayerHover>
            </React.Fragment>
            }
        sx={{
            border: 0,
            backgroundColor: "white"
        }}

        >
            <Box>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Badge
                    overlap="circular"
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    badgeContent={
                        <SmallAvatar
                            sx={{filter: 'invert(100%)'}}
                            src={props.roleDisplayIcon}/>
                    }
                >
                    <Avatar sx={{width: props.avatarSize, height: props.avatarSize}} src={props.agentDisplayIcon}></Avatar>
                </Badge>
            </Box>
            <br></br>
            <Typography variant="caption" component="div" fontFamily={"Staatliches"}>
                {props.playerName}
            </Typography>
            </Box>
        </HtmlTooltip>
    )
}