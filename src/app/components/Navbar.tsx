"use client"
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { styled } from '@mui/material/styles';
import { Logo1 } from '../assets/images/images';
import Image from 'next/image';

const StyledMenu = styled(Menu)(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 180,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgb(0, 0, 0, 0.1) 0px 0px 0px 1px, rgb(0, 0, 0, 0.1) 0px 4px 6px -1px, rgb(0, 0, 0, 0.1) 0px 1px 0px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: theme.palette.action.selected,
            },
        },
    },
}));

const Navbar: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [menuId, setMenuId] = React.useState<string | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>, id: string) => {
        setAnchorEl(event.currentTarget);
        setMenuId(id);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setMenuId(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" color="primary">
                <Toolbar>
                    <Image src={Logo1} alt="Life In Mind Logo" width={311} height={103} />
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'aboutUs')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        About Us
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'aboutUs'}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>About Life In Mind</MenuItem>
                        <MenuItem onClick={handleClose}>Team</MenuItem>
                        <MenuItem onClick={handleClose}>Careers</MenuItem>
                        <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                        <MenuItem onClick={handleClose}>FAQs</MenuItem>
                    </StyledMenu>
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'services')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Services
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'services'}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Mental health care
                                </Typography>
                                <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Therapy</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Psychometric Assessments</Typography>
                                    </li>
                                </ul>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Physical Health care
                                </Typography>
                                <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Nutrition Guidance</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Yoga Practices</Typography>
                                    </li>
                                </ul>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Spiritual Health and care
                                </Typography>
                                <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Sound Therapy Sessions</Typography>
                                    </li>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Workshops</Typography>
                                    </li>
                                </ul>
                            </div>
                        </MenuItem>
                    </StyledMenu>
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'experts')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Experts
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'experts'}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Therapists
                                </Typography>
                                <Typography variant="body2">
                                    Overcome personal challenges and grow with a dedicated therapist's support.
                                </Typography>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Yoga experts.
                                </Typography>
                                <Typography variant="body2">
                                    Achieve balance and peace with expert yoga and meditation guidance.
                                </Typography>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Nutritionists
                                </Typography>
                                <Typography variant="body2">
                                    Optimise your health with tailored advice from experienced dietitians.
                                </Typography>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Sound Therapists
                                </Typography>
                                <Typography variant="body2">
                                    Sound therapy provides deep relaxation, stress relief, and emotional balance, enhancing your overall well-being.
                                </Typography>
                            </div>
                        </MenuItem>
                    </StyledMenu>
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'associations')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Associations
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'associations'}
                        onClose={handleClose}
                    >
                        <MenuItem>
                            <div>
                                <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold' }}>
                                    Mumbai
                                </Typography>
                                <ul style={{ margin: 0, padding: '0 0 0 20px' }}>
                                    <li>
                                        <Typography variant="body2" onClick={handleClose}>Affiliated with KTCRC - Kiran Testing Counseling and Removal Centre. Mrs. Kiran Sheth</Typography>
                                    </li>
                                </ul>
                            </div>
                        </MenuItem>
                    </StyledMenu>
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'partners')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Partners
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'partners'}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>For organisations</MenuItem>
                        <MenuItem onClick={handleClose}>For colleges & universities</MenuItem>
                    </StyledMenu>
                    <Button
                        color="inherit"
                        onClick={(event) => handleClick(event, 'resources')}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        Resources
                    </Button>
                    <StyledMenu
                        anchorEl={anchorEl}
                        open={menuId === 'resources'}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Articles</MenuItem>
                        <MenuItem onClick={handleClose}>Blogs</MenuItem>
                        <MenuItem onClick={handleClose}>Videos</MenuItem>
                        <MenuItem onClick={handleClose}>Assessment</MenuItem>
                    </StyledMenu>
                    <Button variant="outlined" color="inherit">
                        Get started
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;
