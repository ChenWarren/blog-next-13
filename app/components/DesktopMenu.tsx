// Desktop menu component

'use client'
import { Button, Box } from "@mui/material"

export function DesktopMenu({ menuItems }: { menuItems: string[] }) {
    return (
        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((menuItem, i) => (
                <Button
                    href={menuItem == 'Home' ? `/` : `${menuItem.toLowerCase()}`} variant='text'
                    key={i}
                    color='inherit'
                >
                    {menuItem}
                </Button>
            ))}
        </Box>
    );
}
