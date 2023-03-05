import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {ReactComponent as logo} from './logo.svg';
//import {ReactComponent as IUPUILogo} from ""

export const Header = () => {
    return (
        <>
        
        <nav> 
         <h1> IUPUI </h1>
        
         
        <Box
          sx={{
            display: "flex",
            flexDirection: "row-reverse",
            p: 1,
            m: 1,
            borderRadius: 1,
          }}
          >
            <Button 
            size="large"
            color="primary">
                Link 1
            </Button>
            <Button size="large">
                Link 2
            </Button>
            <Button size="large">
                Link 3
            </Button>
          </Box>
          </nav>
        </>
        
    )
}