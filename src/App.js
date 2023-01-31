import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Stack,
  Box,
  Divider,
} from "@mui/material";
import AppBarr from "./Components/AppBar";
import { useMemo, useState } from "react";
import getDesignTokens from "styles/MyTheme";
import MyList from "Components/List";
import MyCard from "Components/Card";
import RightBar from "Components/RightBar";
import AddPost from "Components/AddPost";

function App() {
  //dark mode

  const [mode, setmyMOde] = useState(
    localStorage.getItem("currentMode") === null
      ? "dark"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  const [showList, setshowList] = useState("none");
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Box className={theme.palette.mode}>
        <AppBarr showList={showList} setshowList={setshowList} />
        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          sx={{ flexDirection: "row" }}
        >
          <MyList {...{ setshowList, showList, setmyMOde, theme }} />
          <MyCard />
          <RightBar theme={theme} />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
}

export default App;
