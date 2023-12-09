import React, { useState, useEffect, useRef } from "react";
import CSEBase from './../acme/CSEBase';
import SejongUniv from './SejongUniv';

export default function SourceTreeBox() {
  return (
      <div>
          <div style = {{marginTop : "20px"}}></div>
          <SejongUniv />
          <div style = {{marginTop : "30px"}}></div>
          <CSEBase />
      </div>
  )
};