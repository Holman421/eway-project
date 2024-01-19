import {
  Box,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { UserData } from "../eWayAPI/ContactsResponse";

type UserCardProps = {
  userData: UserData | null;
};

const UserCard: React.FC<UserCardProps> = ({
  userData,
}) => {
  const {
    FirstName = "",
    MiddleName = "",
    LastName = "",
    BusinessAddressState = "Not provided",
    BusinessAddressCity = "Not provided",
    BusinessAddressPostalCode = "Not provided",
    BusinessAddressStreet = "Not provided",
    Title = "",
    Email1Address = "Not provided",
    ProfilePicture = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
    TelephoneNumber1 = "Not provided",
  } = userData || {};

  const userName = `${FirstName} ${MiddleName} ${LastName}`;

  const profileUrl =
    ProfilePicture ||
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg";

  if (!userData) return null;

  return (
    <Paper
      elevation={3}
      sx={{
        "@keyframes fadeIn": {
          "0%": {
            opacity: "0",
            transform: "translateY(-1rem)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        padding: "1.5rem 2rem 2rem 2rem",
        marginTop: "2rem",
        animation: "fadeIn 0.3s ease-in-out",
        minWidth: "20rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "2rem",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            "& > img": {
              width: "3rem",
              height: "3rem",
              borderRadius: "50%",
            },
          }}
        >
          <img src={profileUrl} alt="profile" />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography sx={{ fontSize: "1.25rem" }}>
            {userName}
          </Typography>
          <Typography
            sx={{ fontSize: ".75rem", color: "gray" }}
          >
            {Title}
          </Typography>
        </Box>
      </Box>
      <Divider sx={{ margin: ".5rem 0 .75rem 0" }} />
      <Box
        sx={{
          display: "flex",
          gap: "1rem",
          "& > div > *": {
            fontSize: ".9rem",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".4rem",
            color: "gray",
            maxWidth: "7rem !important",
          }}
        >
          <Typography>Email:</Typography>
          <Typography>Mobile:</Typography>
          <Typography>Address:</Typography>
          <Typography>City state:</Typography>
          <Typography>Postal Code:</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: ".4rem",
          }}
        >
          <Typography>{Email1Address}</Typography>
          <Typography>{TelephoneNumber1}</Typography>
          <Typography>{BusinessAddressStreet}</Typography>
          <Typography>{`${BusinessAddressCity}, ${BusinessAddressState}`}</Typography>
          <Typography>
            {BusinessAddressPostalCode}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
};

export default UserCard;
