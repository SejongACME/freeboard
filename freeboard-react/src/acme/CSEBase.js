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
  
    const [selectedContainer, setSelectedContainer] = useState("CO");

    const handleContainerChange = (gasContainer) => {
        setSelectedContainer(gasContainer);
    
        const locationsContainer = ["강남구", "광진구", "성동구", "송파구", "중구"];
        
        const updatedData = {};
    
        locationsContainer.forEach((locationContainer) => {
            const url = `http://192.168.219.103:65535/cse-in/${gasContainer}/${locationContainer}/la`;
            const headers = {
                "X-M2M-Origin": "CAdmin",
                "X-M2M-RI": "nh35k4rdrt",
                "X-M2M-RVI": "3",
            };
    
            const requestOptions = {
                method: "GET",
                headers: headers,
            };
    
            fetch(url, requestOptions)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then((res) => {
                    const updatedValue = res["m2m:cin"].con;
                    console.log(gasContainer, locationContainer, updatedValue);
   
                    if (!updatedData[gasContainer]) {
                        updatedData[gasContainer] = {};
                    }
                    updatedData[gasContainer][locationContainer] = updatedValue;
    
                    setData((prevData) => ({
                        ...prevData,
                        ...updatedData,
                    }));
                })
                .catch((error) => {
                    console.error("API 요청 중 오류 발생:", error);
                });
        });
    };

    useEffect(() => {
        handleContainerChange(selectedContainer);
    
        const intervalId = setInterval(() => {
          handleContainerChange(selectedContainer);
        }, 3600000);
    
        return () => clearInterval(intervalId);
      }, [selectedContainer]); 

  
    return (
      <Container>
        <Typography variant="h4" gutterBottom>
          CSEBase
        </Typography>
        <div style={{ display: "flex", marginBottom: "20px" }}>
          {Object.keys(data).map((gasContainer) => (
            <Button
              key={gasContainer}
              onClick={() => handleContainerChange(gasContainer)}
              variant={selectedContainer === gasContainer ? "contained" : "outlined"}
              style={{ marginRight: "10px" }}
            >
              {gasContainer}
            </Button>
          ))}
        </div>
        <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h5" gutterBottom>
                {selectedContainer} 농도
            </Typography>
            <div>
                {["강남구", "광진구", "성동구", "송파구", "중구"].map((locationContainer) => (
                    <div key={locationContainer}>
                        <Typography variant="subtitle1">
                            {locationContainer}: {data[selectedContainer][locationContainer]}
                        </Typography>
                    </div>
                ))}
            </div>
        </Paper>
      </Container>
    );
  };
  
  export default CSEBase;