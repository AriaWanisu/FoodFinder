import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" style={{ backgroundColor: '#134B8A' }}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            {/* MUI */}
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton style={{ color: '#FFFFFF' }}>
                                <Badge color="error" overlap="circular" badgeContent=" " variant="dot">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>

                            {navItems.map((item) => (
                                <Button key={item} sx={{ color: '#fff' }}>
                                    {item}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton style={{ color: '#FFFFFF' }}>
                                <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/4269/07cc/458052afe359577a66f0cdac017ced71?Expires=1658102400&Signature=YNgvEDFXGNhSEeW4y1CRic7F8bIxMYb0XcfPfi9EGOPmw5cMV90melqpLnyW6A~xpv3cbgd2ZYu7yRDQweG4GCPV2MC0k5SouJaA6y~BvGg1hmXlOGePMwNUvY-vH2vsd2NB9q5~ZlcU3uESS3A~uRPYe-jkf8qaFQrWYdsiA7XvdrHQx-p0uf06wI1fIYZWUWOW7bMly8tAXZ5wwchJo9cPe2L2aZm438OplRf9XOw3HD1q5kZER9L~HUdsCke9VgRdDOGXOfFZ8V4YQKI7iQxGZCkd28ZIKqFuGQxgd9a46E079FWAh~DTAMkhxp2fiMXpMzZASpE2nagGpv4otA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    style={{ borderRadius: 3 }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        right: 0,
                        left: 0,
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}
