import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Avatar from '@mui/material/Avatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Drawer from '@mui/material/Drawer';
import ListIcon from '@mui/icons-material/List';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const drawerWidth = 240;

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                <Avatar src={'https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1658102400&Signature=JGpejD3dsbEUPq2dc9ARQjk3H3VjFWutgiEYvLm8dSJu13ZosXBzzJ3U-MBm4jKsEmvV81L~QUPIw3VOCjz7d2Y3gItDGmqu5cUTYJGkQ0ZFJ4Wfk2VjzzYrtLMfqQpOfwses21Wd03Ql5BkPXIMsLMqEUF6nF7Yacp3QQH2HxjWON0mh~v~emniCFZU1g6dZgqcK3z4~JUns3gnyyH96rTKf9Uz3XaryYHlWfkawnawSRG257ptdCjlgTThNboxnzP~U6pEOtc7QlxXt5cwGVv7i9Qqkgs4WswFepiZcRRRQGy9Ti2DTCr03dJAkzufoS-3xJs-FEtKod07vdl7wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} variant="square" sx={{ width: 48, height: 48, borderRadius: 3 }} />
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListIcon sx={{ backgroundColor: '#0F1E56', color: 'white', borderRadius: 2, fontSize: 36 }} />
                        <ListItemText primary={<b>Place</b>} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </Box>
    );

    return (
        <div>
            <Box sx={{ display: 'flex' }}>
                <AppBar component="nav" style={{ backgroundColor: '#134B8A' }}>
                    <Toolbar>
                        <Avatar aria-label="recipe" src={'https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1658102400&Signature=JGpejD3dsbEUPq2dc9ARQjk3H3VjFWutgiEYvLm8dSJu13ZosXBzzJ3U-MBm4jKsEmvV81L~QUPIw3VOCjz7d2Y3gItDGmqu5cUTYJGkQ0ZFJ4Wfk2VjzzYrtLMfqQpOfwses21Wd03Ql5BkPXIMsLMqEUF6nF7Yacp3QQH2HxjWON0mh~v~emniCFZU1g6dZgqcK3z4~JUns3gnyyH96rTKf9Uz3XaryYHlWfkawnawSRG257ptdCjlgTThNboxnzP~U6pEOtc7QlxXt5cwGVv7i9Qqkgs4WswFepiZcRRRQGy9Ti2DTCr03dJAkzufoS-3xJs-FEtKod07vdl7wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} variant="square" sx={{ width: 48, height: 48, borderRadius: 3, display: { xs: 'none', sm: 'block' } }} />
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <Avatar aria-label="recipe" src={'https://s3-alpha-sig.figma.com/img/116e/fdea/13280ace45de50a7dee4dfbe72ddf424?Expires=1658102400&Signature=JGpejD3dsbEUPq2dc9ARQjk3H3VjFWutgiEYvLm8dSJu13ZosXBzzJ3U-MBm4jKsEmvV81L~QUPIw3VOCjz7d2Y3gItDGmqu5cUTYJGkQ0ZFJ4Wfk2VjzzYrtLMfqQpOfwses21Wd03Ql5BkPXIMsLMqEUF6nF7Yacp3QQH2HxjWON0mh~v~emniCFZU1g6dZgqcK3z4~JUns3gnyyH96rTKf9Uz3XaryYHlWfkawnawSRG257ptdCjlgTThNboxnzP~U6pEOtc7QlxXt5cwGVv7i9Qqkgs4WswFepiZcRRRQGy9Ti2DTCr03dJAkzufoS-3xJs-FEtKod07vdl7wg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'} variant="square" sx={{ width: 48, height: 48, borderRadius: 3 }} />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton style={{ color: '#FFFFFF' }}>
                                <Badge color="error" overlap="circular" badgeContent=" " variant="dot">
                                    <NotificationsIcon />
                                </Badge>
                            </IconButton>
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <IconButton style={{ color: '#FFFFFF' }}>
                                <Avatar alt="Remy Sharp" src="https://s3-alpha-sig.figma.com/img/4269/07cc/458052afe359577a66f0cdac017ced71?Expires=1658102400&Signature=YNgvEDFXGNhSEeW4y1CRic7F8bIxMYb0XcfPfi9EGOPmw5cMV90melqpLnyW6A~xpv3cbgd2ZYu7yRDQweG4GCPV2MC0k5SouJaA6y~BvGg1hmXlOGePMwNUvY-vH2vsd2NB9q5~ZlcU3uESS3A~uRPYe-jkf8qaFQrWYdsiA7XvdrHQx-p0uf06wI1fIYZWUWOW7bMly8tAXZ5wwchJo9cPe2L2aZm438OplRf9XOw3HD1q5kZER9L~HUdsCke9VgRdDOGXOfFZ8V4YQKI7iQxGZCkd28ZIKqFuGQxgd9a46E079FWAh~DTAMkhxp2fiMXpMzZASpE2nagGpv4otA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <b>Akkarapol</b>
                        </Box>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <IconButton style={{ color: '#FFFFFF' }}>
                                <KeyboardArrowDownIcon sx={{ marginTop: '0.1rem' }} />
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
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, borderRadius: 6 },
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                        right: 0,
                        left: 0,
                        borderRadius: 10
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </div>
    )
}
