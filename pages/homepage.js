import React, { Fragment, useEffect, useState } from "react";
import {
  Box,
  Button,
  Grid,
  InputBase,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Image from "next/image";
const Homepage = () => {
  const [giphyData, setGiphyData] = useState([]);
  const [filterContent, setFilterContent] = useState([]);
  const [search, setSearch] = useState("");
  const getAllData = async () => {
    const res = await axios.get(
      "https://api.giphy.com/v1/gifs/trending?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&limit=25&offset=0&rating=g&bundle=messaging_non_clips"
    );
    console.log(res);
    setGiphyData(res.data.data);
  };

  const searchGiphy = async () => {
    const res = await axios.get(
      `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${search}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    );
    console.log(res);
    setFilterContent(res.data.data);
  };
  useEffect(() => {
    getAllData();
  }, []);

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          overflowY: "auto",
          // border: "2px solid red",
          backgroundColor: "#e0e0e0",
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "10px",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            width: "100%",
            padding: "10px 20px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: "80%",
              border: "2px solid #000",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "18px",
              backgroundColor: "#fff",
            }}
            placeholder="SEARCH"
          />
          <Button
            onClick={() => searchGiphy()}
            sx={{
              width: "10%",
              border: "2px solid #000",
              padding: "20px",
              borderRadius: "10px",
              fontSize: "18px",
              backgroundColor: "#000",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            SEARCH
          </Button>
        </Box>
        {search ? (
          <Fragment>
             {filterContent.map((item) => (
              <Box
                sx={{
                  width: "20%",
                  height: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "80%",
                  }}
                >
                  <img
                    src={item.images?.fixed_height?.url}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    width: "100%",
                    padding: "10px",
                    // border: "2px solid red",
                    marginTop: "10px",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Fragment>
        ) : (
          <Fragment>
            {giphyData.map((item) => (
              <Box
                sx={{
                  width: "20%",
                  height: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "10px",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "80%",
                  }}
                >
                  <img
                    src={item.images?.fixed_height?.url}
                    style={{ width: "100%", height: "100%" }}
                    alt="photos"
                  />
                </Box>
                <Typography
                  variant="h5"
                  sx={{
                    width: "100%",
                    padding: "10px",
                    // border: "2px solid red",
                    marginTop: "10px",
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Fragment>
        )}
        {/*  */}
      </Box>
    </Fragment>
  );
};

export default Homepage;
