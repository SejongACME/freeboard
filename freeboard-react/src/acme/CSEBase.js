import React, { useState, useEffect, useRef } from "react";
import {
    Container,
    Paper,
    Typography,
    Button
  } from "@mui/material";

const CSEBase = () => {
    const [data, setData] = useState({
      CO: {
        강남구: "강남구 CO 농도 값",
        광진구: "광진구 CO 농도 값",
        성동구: "성동구 CO 농도 값",
        송파구: "송파구 CO 농도 값",
        중구: "중구 CO 농도 값",
      },
      NO2: {
        강남구: "강남구 NO2 농도 값",
        광진구: "광진구 NO2 농도 값",
        성동구: "성동구 NO2 농도 값",
        송파구: "송파구 NO2 농도 값",
        중구: "중구 NO2 농도 값",
      },
      O3: {
        강남구: "강남구 O3 농도 값",
        광진구: "광진구 O3 농도 값",
        성동구: "성동구 O3 농도 값",
        송파구: "송파구 O3 농도 값",
        중구: "중구 O3 농도 값",
      },
      PM10: {
        강남구: "강남구 PM10 농도 값",
        광진구: "광진구 PM10 농도 값",
        성동구: "성동구 PM10 농도 값",
        송파구: "송파구 PM10 농도 값",
        중구: "중구 PM10 농도 값",
      },
      PM25: {
        강남구: "강남구 PM25 농도 값",
        광진구: "광진구 PM25 농도 값",
        성동구: "성동구 PM25 농도 값",
        송파구: "송파구 PM25 농도 값",
        중구: "중구 PM25 농도 값",
      },
      prevPM: {
        강남구: "강남구 prevPM 농도 값",
        광진구: "광진구 prevPM 농도 값",
        성동구: "성동구 prevPM 농도 값",
        송파구: "송파구 prevPM 농도 값",
        중구: "중구 prevPM 농도 값",
      },
      SO2: {
        강남구: "강남구 SO2 농도 값",
        광진구: "광진구 SO2 농도 값",
        성동구: "성동구 SO2 농도 값",
        송파구: "송파구 SO2 농도 값",
        중구: "중구 SO2 농도 값",
      },
    });
  
    const [selectedCategory, setSelectedCategory] = useState("CO"); // 초기값
  
    const handleCategoryChange = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          CSEBase
        </Typography>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {Object.keys(data).map((category) => (
            <Button
              key={category}
              onClick={() => handleCategoryChange(category)}
              variant={selectedCategory === category ? "contained" : "outlined"}
              style={{ marginRight: "10px" }}
            >
              {category}
            </Button>
          ))}
        </div>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h5" gutterBottom>
            {selectedCategory} 농도
          </Typography>
          <div>
            {Object.keys(data[selectedCategory]).map((location) => (
              <div key={location}>
                <Typography variant="subtitle1">
                  {location}: {data[selectedCategory][location]}
                </Typography>
              </div>
            ))}
          </div>
        </Paper>
      </Container>
    );
  };
  
  export default CSEBase;