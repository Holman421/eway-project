import {
  Alert,
  Box,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import useGetContacts from "../CustomHooks/useGetContacts";
import UserCard from "./UserCard";

const SearchContactForm = () => {
  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const { userData, getContacts, error } = useGetContacts();

  function isValidEmail(email: string) {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  const handleSearchUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setEmailError("Email is required");
    } else {
      setEmailError("");
      getContacts(email);
    }
  };

  return (
    <>
      <Paper
        sx={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginTop: "5rem",
          width: "20rem",
        }}
      >
        <h1>Search contact</h1>
        <form onSubmit={handleSearchUser}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              type="email"
              error={!!emailError}
              helperText={emailError}
            />
            <Button variant="contained" type="submit">
              Find
            </Button>
            {error && (
              <Alert
                sx={{ marginTop: ".5rem" }}
                severity="error"
              >
                {error}
              </Alert>
            )}
          </Box>
        </form>
      </Paper>
      <UserCard userData={userData} />
    </>
  );
};

export default SearchContactForm;
