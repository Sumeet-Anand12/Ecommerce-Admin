import React, { useEffect, useState } from 'react'
import TopStrip from './topStrip/TopStrip'
import logo from '../../assets/Image/Banner/logo.jpg'
import { NavLink } from "react-router-dom"
import Search from './Search'
import { BsCart3 } from "react-icons/bs";
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import { GoGitCompare } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import Tooltip from '@mui/material/Tooltip';
import Navbar from './Navbar'
import ResponsiveHeader from './ResponsiveHeader'
import ResponsiveNav from './ResponsiveNav'



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 1,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
        backgroundColor: "#FF5252"
    },
}));


const Header = ({toggleSidebar}) => {

    const [isSticky, setIsSticky] = useState(false);
    const [width, setWidth]=useState(0)

    const handleScroll = () => {
        if (window.scrollY > 120) {
            setIsSticky(true);
        } else {
            setIsSticky(false);
        }
    };

    useEffect(() => {
        setWidth(window.innerWidth)
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);



    return (
        <header>
            <div className='header'>
                <div>
                    <TopStrip />
                    <hr />
                    {

                    }
                    <div className='header-section p-2 d-none d-lg-block '>
                        <div className='container-fluid'>
                            <div className='row justify-content-center align-items-center justify-content-between'>
                                <div className='logo col col-lg-2'>
                                    <img src={logo} alt="" />
                                </div>
                                <div className='search-section col col-lg-5'>
                                    <Search />
                                </div>
                                <div className='right-section d-none d-lg-block col col-lg-3 '>
                                    <ul className="list-unstyled d-flex align-items-center justify-content-end">
                                        <li>
                                            <NavLink className="text-decoration-none text-black" to="#">Login</NavLink>
                                        </li>
                                        <span className='m-2'>|</span>
                                        <li>
                                            <NavLink className="text-decoration-none text-black" to="#">Register</NavLink>
                                        </li>
                                        <ul className='d-flex gap-2 Icon-cart' >
                                            <Tooltip title="comapre">
                                                <IconButton aria-label="cart">
                                                    <StyledBadge badgeContent={2} color="default">
                                                        <GoGitCompare />
                                                    </StyledBadge>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="whishlist">
                                                <IconButton aria-label="cart">
                                                    <StyledBadge badgeContent={3} color="default">
                                                        <FaRegHeart />
                                                    </StyledBadge>
                                                </IconButton>
                                            </Tooltip>
                                            <Tooltip title="cart">
                                                <IconButton aria-label="cart">
                                                    <StyledBadge badgeContent={4} color="default">
                                                        <BsCart3 />
                                                    </StyledBadge>
                                                </IconButton>
                                            </Tooltip>
                                        </ul>
                                    </ul>
                                </div>
                             
                            </div>

                        </div>
                    </div>
                      <div className='d-block d-lg-none'>
                        <ResponsiveHeader toggleSidebar={toggleSidebar} />

                      </div>

                    

                    <hr />

                    <div className={`d-lg-block d-none ${isSticky ? 'sticky-navbar active' : ' Inactive-sticky-navbar'}`}>
                        <Navbar />
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header