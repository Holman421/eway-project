import React from "react";
import useStorePreviousContacts from "../CustomHooks/useStorePreviousContacts";
import { Box, Typography } from "@mui/material";
import UserCardWithApiCall from "./UserCardWithApiCall";

const PreviousContacts = () => {
  const { contacts } = useStorePreviousContacts();

  return (
    <Box sx={{ margin: "2rem" }}>
      <Typography variant="h4">
        Previous contacts
      </Typography>
      {contacts.map((contact) => {
        return (
          <UserCardWithApiCall
            key={contact.email}
            name={contact.name}
            title={contact.title}
            email={contact.email}
            profilePictureUrl={contact.profilePictureUrl}
          />
        );
      })}
    </Box>
  );
};

export default PreviousContacts;
