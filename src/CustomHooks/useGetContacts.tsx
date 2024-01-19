import { useState } from "react";
import {
  TContactsResopnse,
  UserData,
} from "../eWayAPI/ContactsResponse";
import connection from "../eWayAPI/Connector";
import useStorePreviousContacts from "./useStorePreviousContacts";

// const emailAddresses = [
//   "mroyster@royster.com",
//   "ealbares@gmail.com",
//   "oliver@hotmail.com",
//   "michael.ostrosky@ostrosky.com",
//   "kati.rulapaugh@hotmail.com",
// ];

const useGetContacts = () => {
  const [userData, setUserData] = useState<UserData | null>(
    null
  );
  const [error, setError] = useState<string | null>(null);
  const { addContact } = useStorePreviousContacts();

  const callApi = (email: string) => {
    connection.callMethod(
      "SearchContacts",
      {
        transmitObject: {
          Email1Address: email,
        },
        includeProfilePictures: false,
      },
      (result: TContactsResopnse) => {
        if (
          result.Data.length !== 0 &&
          !!result.Data[0].FileAs
        ) {
          setError("");
          setUserData(result.Data[0]);
          addContact(
            `${result.Data[0].FirstName} 
              ${result.Data[0].MiddleName} 
              ${result.Data[0].LastName}`,
            result.Data[0].Title,
            result.Data[0].Email1Address
          );
        } else {
          setError("No contact found");
        }
      }
    );
  };

  return { userData, getContacts: callApi, error };
};

export default useGetContacts;
