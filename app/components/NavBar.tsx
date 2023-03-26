'use client'

import { AppBar, Button, Stack, Typography } from "@mui/material"
import ProfileImage from './ProfileImage'

const pages = ['Home', 'About', 'Blog', 'Contact']

export default function NavBar() {

    return (
        <AppBar position="fixed" sx={{padding: 1}}>
            <Stack spacing={2} direction="row">
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 1 }}>
                    BLOG
                </Typography>
                {pages.map((page, i) => (
                    <Button 
                        href={ page == 'Home' ? `/` : `${page.toLowerCase()}`} variant='text' 
                        key={i} 
                        color='inherit'
                    >
                        {page}
                    </Button>
                ))}
                <ProfileImage src='/images/Chopin-1.jpg' alt='profile image'/>
            </Stack>
        </AppBar>
    )
}
