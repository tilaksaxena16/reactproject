import React, { useState } from "react";
import "./Project.css";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';



const Project = () => {

    const [num, setNum] = useState(0);

    const incnum = () => {
        setNum(num + 1);
    }

    const decnum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("Sorry, Zero Limit Reached");
            setNum(0);
        }
    };
    return (
        <>
            <Box className="main_div">
                <div className="main_center">
                    <h1> {num} </h1>
                    <div className="button_div">
                        <Tooltip title="Add">
                            <Button onClick={incnum} className="btn_green">
                                <AddIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick={decnum} className="btn_red">
                                <DeleteIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </Box>
        </>
    )
}

export { Project }