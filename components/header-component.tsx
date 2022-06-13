import {useState} from "react";
import {useRouter} from "next/router";
import {
    AppBar,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Toolbar
} from "@mui/material";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faClose} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const drawerWidth = 240;

const HeaderComponent = () => {

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const router = useRouter();
    let pathTitle;
    switch (router.pathname) {
        case "/work-experience":
            pathTitle = "Work experience"
            break
        default:
            pathTitle = ""
            break
    }

    return (<>
        <AppBar position={"fixed"}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{mr: 2, display: {sm: 'none'}}}
                >
                    <FontAwesomeIcon icon={faBars} color={'white'}/>
                </IconButton>

                <Drawer open={mobileOpen} anchor={"left"} onClose={() => handleDrawerToggle()}>
                    <Toolbar>

                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{mr: 2, display: {sm: 'none'}}}
                        >
                            <FontAwesomeIcon icon={faClose} color={"primary"}/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List>
                        <ListItem onClick={() => handleDrawerToggle()} disablePadding>
                            <Link href={'/'}>
                                <ListItemButton>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary={'Personal info'}/>
                                </ListItemButton></Link>
                        </ListItem>
                        <ListItem onClick={() => handleDrawerToggle()} disablePadding>
                            <Link href={'/work-experience'}>
                                <ListItemButton>
                                    <ListItemIcon></ListItemIcon>
                                    <ListItemText primary={'Work experience'}/>
                                </ListItemButton></Link>
                        </ListItem>
                    </List>
                </Drawer>
            </Toolbar>
        </AppBar>
    </>)
        ;
}

export default HeaderComponent;