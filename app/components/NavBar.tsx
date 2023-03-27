// Main navbar component

'use client'

import { AppBar, Stack, Typography } from "@mui/material"
import ProfileImage from './ProfileImage'
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenu } from "./MobileMenu";

const pages = ['Home', 'About', 'Blog', 'Contact']

const profileImageData = {
    src: '/images/Chopin-1.jpg',
    alt: 'profile image'
}

export default function NavBar() {

    return (
        <AppBar position="fixed" sx={{padding: 1}}>
            <Stack spacing={2} direction="row">
                {/* --- Logo start --- */}
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 1 }}>
                    BLOG
                </Typography>
                {/* --- Logo end --- */}

                {/* --- Desktop menu start --- */}
                    {DesktopMenu({menuItems: pages})}
                {/* --- Destop menu end --- */}

                {/* --- Mobile menu start --- */}
                    {MobileMenu({menuItems: pages})}
                {/* --- Mobile menu end --- */}
                <ProfileImage src={profileImageData.src} alt={profileImageData.alt}/>
            </Stack>
        </AppBar>
    )
}
