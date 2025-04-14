import React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { GoGitCompare } from 'react-icons/go';
import { FaRegHeart } from 'react-icons/fa';
import { BsCart3 } from 'react-icons/bs';
import ToolTip from '../tooltip/ToolTip';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 1,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
    backgroundColor: '#FF5252',
  },
}));

const CartIcons = () => {
  return (
    <ul className="d-flex gap-2 Icon-cart align-items-center m-0 p-0 list-unstyled">
      <li title="Compare">
        <ToolTip title="compare">
          <IconButton aria-label="compare">
            <StyledBadge badgeContent={2}>
              <GoGitCompare />
            </StyledBadge>
          </IconButton>
        </ToolTip>
      </li>
      <li title="Wishlist">
        <ToolTip title="wishlist">
          <IconButton aria-label="wishlist">
            <StyledBadge badgeContent={3}>
              <FaRegHeart />
            </StyledBadge>
          </IconButton>
        </ToolTip>
      </li>
      <li title="Cart">
        <ToolTip title="cart">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4}>
              <BsCart3 />
            </StyledBadge>
          </IconButton>
        </ToolTip>
      </li>
    </ul>
  );
};

export default CartIcons;
