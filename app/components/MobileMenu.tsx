'use client';
import { useState, MouseEvent } from "react";
import { Box, IconButton, Menu, MenuItem, Link } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

// Mobile menu component
export function MobileMenu({ menuItems }: { menuItems: string[]; }) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
            <IconButton
                id='mobile-menu'
                aria-controls={open ? 'mobile-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                color='inherit'
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id='mobile-menu'
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'mobile-menu' }}
            >
                {menuItems.map((menuItem, i) => (
                    <MenuItem
                        key={i}
                    >
                        <Link
                            href={menuItem == 'Home' ? `/` : `${menuItem.toLowerCase()}`}
                            underline='none'
                            color='inherit'
                        >
                            {menuItem}
                        </Link>
                    </MenuItem>
                ))}
            </Menu>
        </Box>
    );
}
