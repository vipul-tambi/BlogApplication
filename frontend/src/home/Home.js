import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box position={"relative"} width="100%" height="90vh">
      <img
        src="https://images.unsplash.com/photo-1600672196900-c98c011a0977?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80"
        alt="Road"
        width={"100%"}
        height="100%"
      />
      <Typography
        fontFamily={"Dancing Script,cursive"}
        variant="h3"
        fontWeight="bold"
        textAlign={"center"}
        width="100%"
        sx={{
          position: "absolute",
          top: "0px",
          color: "#111115de",
        }}
      >
        Camp freely, nature's retreat, where simplicity brings joy and peace.
      </Typography>
      <Box
        width="100%"
        height="30%"
        sx={{
          position: "absolute",
          top: "40%",
          color: "#111115de",
          backdropFilter: " blur(2px)",
        }}
        display={"flex"}
        flexDirection="column"
      >
        <Typography
          fontFamily={"quicksand"}
          textAlign={"center"}
          variant="h4"
          padding={4}
          sx={{ color: "yellow" }}
          fontWeight="bold"
        >
          SHARE YOUR TRAVEL DIARIES WITH US
        </Typography>
        <Box margin="auto">
          <Button
            LinkComponent={Link}
            to="/diaries"
            variant="contained"
            sx={{
              ml: 2,
            }}
          >
            View Diaries
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
