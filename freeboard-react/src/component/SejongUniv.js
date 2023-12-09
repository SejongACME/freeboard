import React, { useState, useEffect, useRef } from "react";
import { Container, Typography } from "@mui/material";

  export default function SejongUniv() {
    return (
        <div>
            <Container
                style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                <Typography
                    variant="h4" 
                    style={{color : "black"}}>
                    Open Source Software Design (009958-001)
                </Typography>
            </Container>
            
        </div>
    )
  }