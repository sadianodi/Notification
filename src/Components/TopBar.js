import * as React from "react";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import Typography from "@material-ui/core/es/Typography/Typography";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Badge from "@material-ui/core/es/Badge/Badge";
import Popover from "@material-ui/core/es/Popover/Popover";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/es/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import ListItemText from "@material-ui/core/es/ListItemText/ListItemText";

export default class TopBar extends React.Component{

    constructor(){
        super();
        this.state={
            notifications:[{patient:"Dave",condition:"Blood pressure high"},{patient:"John Doe",condition:"High fever"},{patient:"Sadia",condition:"Headache, Back pain etc"},{patient:"Imam",condition:"Insomnia"},{patient:"Safat",condition:"Heart Palpitations"},{patient:"Ancoln",condition:"Dead"}],
            showPopOver:false,

        };
        this.notifButton=React.createRef();
    }

    render(){
            let id=this.state.showPopOver?"notifPopOver":null;
        let notificationList=<List
            style={{
                width: '100%',
                maxWidth: '20em'
            }}
        >
            {this.state.notifications.map((obj,i)=>{
                return <ListItem>
                    <ListItemAvatar>
                        <Avatar style={{margin:'10'}}>{obj.patient.charAt(0)}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={obj.patient} secondary={obj.condition}/>
                </ListItem>;
            })}
        </List>
        return(<div >
            <AppBar position={"static"}>
                <Toolbar>
                    <Typography  variant={"h6"} noWrap>Dr. DashBoard</Typography>
                    <div style={{position:"absolute",right:"2em"}}>
                        <IconButton color={"inherit"}
                                    onClick={()=>{this.setState({showPopOver:!this.state.showPopOver})}}
                                    ref={this.notifButton}
                                    aria-describedby={id}
                        >
                            <Badge badgeContent={this.state.notifications.length} color={"secondary"}>
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                        <Popover
                            id={id}
                            open={this.state.showPopOver}
                            anchorEl={this.state.showPopOver?this.notifButton.current:null}
                            onClose={()=>{this.setState({showPopOver:false})}}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                        >{notificationList}</Popover>
                    </div>
                </Toolbar>
            </AppBar>
        </div>);
    }
}

