import React, { useState, useEffect } from "react";

import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";

function Contact() {
  const [users, setUsers] = useState([]);
  const [filteredData, setFilteredData] = useState(users);

  //   const getUsers = async () => {
  //     const response = await fetch("https://api.github.com/users");
  //     setUsers(await response.json());
  //   };

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
        setFilteredData(response.data);
      })
      .catch((error) => {
        console.log("Error Getting fake data: " + error);
      });
  }, []);

  const handleSearch = (e) => {
    let value = e.target.value.toLowerCase();

    let result = [];

    console.log(value);

    result = users.filter((data) => {
      return data.name.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <>
      <div>
        <lable>Search</lable>
        <input type="text" onChange={(e) => handleSearch(e)} />
      </div>
      {filteredData.map((curElem, index) => {
        const { name, username, id } = curElem;
        return (
          <div>
            <List
              sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src={"https://robohash.org/1?set=set2"}
                    alt=""
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        sx={{ display: "inline" }}
                        component="span"
                        variant="body2"
                        color="text.primary"
                      >
                        {username}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          </div>
        );
      })}
    </>
  );
}

export default Contact;
