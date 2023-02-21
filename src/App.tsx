import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";


function App() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <div style={{ display: "flex", height: "100%" }}>
        <div style={{ flexGrow: 1 }}>
          <AppBar style={{ background: "#d62020" }} position="static">
            <Toolbar>
              <FormControl sx={{ m: 5, minWidth: 120}} size="small">
              <Button variant="text"
              sx={{ marginLeft: "auto"}}>
                Hello World
              </Button>
              </FormControl>
            </Toolbar>
          </AppBar>

        </div>
      </div>
    </div>
  
  );
}

export default App;
