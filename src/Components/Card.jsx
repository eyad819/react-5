import { Box, Card, Checkbox, useTheme } from "@mui/material";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import { Avatar } from "@mui/material";
import React from "react";
import {
  Block,
  Delete,
  Favorite,
  FavoriteBorder,
  Person,
} from "@mui/icons-material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const myCards = [
  {
    letter: "E",
    color: "#053ea8",
    userName: "Eyad Ibrahim",
    imgLink:
      "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    letter: "A",
    color: "#a020f0",
    userName: "do3aa Hassan",
    imgLink:
      "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    letter: "N",
    color: "#008080",
    userName: "Alaa Hassan",
    imgLink:
      "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    letter: "M",
    color: "#053ea8",
    userName: "Walaa Hassan",
    imgLink:
      "https://images.pexels.com/photos/307008/pexels-photo-307008.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const MyCard = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const renderMobileMenu = (
    <Menu
      sx={{ top: "45px" }}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
    >
      <MenuItem onClick={handleClose}>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Person />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Delete />
        </IconButton>
        <p>Delete</p>
      </MenuItem>
      <MenuItem onClick={handleClose}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Block />
        </IconButton>
        <p>Block</p>
      </MenuItem>
    </Menu>
  );

  const theme = useTheme();
  return (
    <Box       component="main"
    sx={{ flexGrow: "3" }}>
      {myCards.map((item) => {
        return (
          <Card key={item.imgLink} sx={{ mx: "auto", my: 5, maxWidth: {xs:"97%",sm:444} }}>
            <CardHeader
              avatar={
                <Avatar
                  sx={{
                    color: theme.palette.getContrastText(item.color),
                    bgcolor: item.color,
                  }}
                  aria-label="recipe"
                >
                  {item.letter}
                </Avatar>
              }
              action={
                <IconButton onClick={handleClick} aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={item.userName}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={item.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to
                cook together with your guests. Add 1 cup of frozen peas along
                with the mussels, if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <Checkbox
                {...label}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{ color: "red" }} />}
              />
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <Box sx={{ flexGrow: 1 }}></Box>
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
          </Card>
        );
      })}

      {renderMobileMenu}
    </Box>
  );
};

export default MyCard;
