'use client'

import { AppBar, Stack, Typography } from "@mui/material"
import ProfileImage from './ProfileImage'
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const pages = ['Home', 'About', 'Blog', 'Contact']

export default function NavBar() {

    return (
        <AppBar position="fixed" sx={{padding: 1}}>
            <Stack spacing={2} direction="row">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 1 }}>
                    BLOG
                </Typography>
                {/* --- Desktop menu start --- */}
                    {DesktopMenu({menuItems: pages})}
                {/* --- Destop menu end --- */}
                {/* --- Mobile menu start --- */}
                    {MobileMenu({menuItems: pages})}
                {/* --- Mobile menu end --- */}
                <ProfileImage src='/images/Chopin-1.jpg' alt='profile image'/>
            </Stack>
        </AppBar>
    )
}
