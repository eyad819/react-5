import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

import AvatarGroup from "@mui/material/AvatarGroup";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
const itemData = [
  {
    img: "https://images.pexels.com/photos/2995336/pexels-photo-2995336.jpeg",
    title: "Breakfast",
  },
  {
    img: "https://images.pexels.com/photos/3933239/pexels-photo-3933239.jpeg",
    title: "Burger",
  },
  {
    img: "https://images.pexels.com/photos/3934003/pexels-photo-3934003.jpeg",
    title: "Camera",
  },
];
const showLG = { xs: "none", lg: "block" };

const RightBar = ({ theme }) => {
  return (
    <Box
      sx={{
        minWidth:"516px",
        display: showLG,
        my: 5,
        flexGrow: "auto",
        bgcolor: theme.palette.favColor.main,
        pl: 2,
      }}
      component="section"
    >
    <Box sx={{position:"fixed"}}>
        <Typography sx={{ fontWeight: 300 }} mt={2} variant="h6">
          Online Frinds
        </Typography>
        <AvatarGroup sx={{ justifyContent: "center", my: 2 }} total={24}>
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Travis Howard"
            src="./imge/pexels-photo-7365020.jpeg"
          />
      
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Remy Sharp"
            src="./imge/pexels-photo-8669022.jpeg"
          />
      
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Agnes Walker"
            src="./imge/pexels-photo-8101622.webp"
          />
          <Avatar
            sx={{ width: 49, height: 45 }}
            alt="Trevor Henderson"
            src="./imge/pexels-photo-7365020.jpeg"
          />
        </AvatarGroup>
        <Typography sx={{ fontWeight: 300 }} my={2} variant="h6">
          Latest Photo
        </Typography>
        <ImageList
          gap={10}
          sx={{ width: 500, height: 160, overflowY: "hidden" }}
          cols={3}
          rowHeight={99}
        >
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                style={{ borderRadius: "5px" }}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography sx={{ fontWeight: 300 }} mb={1} mt={4} variant="h6">
          Latest Conversation
        </Typography>
      
        <List sx={{ width: "100%", maxWidth: 488, bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="./imge/pexels-photo-7365020.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors — I'll be in your neighborhood doing errands
                </Typography>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="./imge/pexels-photo-8669022.jpeg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="./imge/pexels-photo-8101622.webp" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations?"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
    </Box>
    </Box>
  );
};

export default RightBar;
