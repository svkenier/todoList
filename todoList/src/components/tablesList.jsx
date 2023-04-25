import { Stack, Box, Typography } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useState } from "react";

const TablesList = ({ todo, handelDelete, handelChange }) => {
  const [completeTodo, setcompleteTodo] = useState([]);

  
  return (
    <>
      {todo.map(({ title, id , estado }) => (
        <Stack key={id}>
          <Box
            sx={{
              display: "flex",
              height: "30px",
              alignItems: "center",
            }}
          >
            {" "}
            <input  type="checkbox" onChange={handelChange}  />{" "}
            <Typography
              sx={{
                 textDecoration: estado ? "line-through" : "none",
              }}
            >
              {title}{" "}
            </Typography>
            <HighlightOffIcon color="error" onClick={() => handelDelete(id)} />
          </Box>
        </Stack>
      ))}
    </>
  );
};

export default TablesList;
