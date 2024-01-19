import {
  Box,
  CircularProgress,
  Divider,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import useGetContacts from "../CustomHooks/useGetContacts";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

type UserCardWithApiCallProps = {
  name: string;
  title: string;
  email: string;
  profilePictureUrl: string;
};

const UserCardWithApiCall: React.FC<
  UserCardWithApiCallProps
> = ({ name, title, email, profilePictureUrl }) => {
  const [isOpen, setIsOpen] =
    React.useState<boolean>(false);
  const [isLoading, setIsLoading] =
    React.useState<boolean>(false);
  const { userData, getContacts } = useGetContacts();

  useEffect(() => {
    if (userData) {
      setIsLoading(false);
    } else if (isOpen) {
      setIsLoading(true);
      getContacts(email);
    }
  }, [isOpen, userData, getContacts, email]);

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
        maxHeight: isOpen ? "20rem" : "2rem",
        transition: "max-height .3s ease-in-out",
        overflow: "hidden",
        position: "relative",
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
          <img src={profilePictureUrl} alt="profile" />
        </Box>
        <Box
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <Typography sx={{ fontSize: "1.25rem" }}>
            {name}
          </Typography>
          <Typography
            sx={{ fontSize: ".75rem", color: "gray" }}
          >
            {title}
          </Typography>
        </Box>
        <IconButton
          sx={{
            transform: isOpen
              ? "rotate(-90deg)"
              : "rotate(90deg)",
            transition: "transform .3s ease-in-out",
            position: "absolute",
            top: "1.75rem",
            right: "1.5rem",
          }}
          onClick={() => {
            setIsOpen(!isOpen);
            // getContacts(email);
          }}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
      </Box>
      <Divider sx={{ margin: ".7rem 0 .75rem 0" }} />
      {isLoading ? (
        <CircularProgress />
      ) : (
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
            <Typography>
              {userData?.Email1Address}
            </Typography>
            <Typography>
              {userData?.TelephoneNumber1}
            </Typography>
            <Typography>
              {userData?.BusinessAddressStreet}
            </Typography>
            <Typography>{`${userData?.BusinessAddressCity}, ${userData?.BusinessAddressState}`}</Typography>
            <Typography>
              {userData?.BusinessAddressPostalCode}
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default UserCardWithApiCall;
