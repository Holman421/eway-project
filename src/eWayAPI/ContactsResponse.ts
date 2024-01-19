import { IApiResult } from "@eway-crm/connector";

export type TContactsResopnse = IApiResult & {
  Data: UserData[];
};

export type TContact = {
  FileAs: string | null;
};

export interface UserData {
  ItemGUID: string;
  ItemVersion: number;
  AdditionalFields: any | null; // Replace 'any' with more specific type if known
  CreatedByGUID: string;
  FileAs: string;
  IsPrivate: boolean;
  ItemChanged: string;
  ItemCreated: string;
  ModifiedByGUID: string;
  OwnerGUID: string;
  Relations: any | null; // Replace 'any' with more specific type if known
  Server_ItemChanged: string | null;
  Server_ItemCreated: string | null;
  BusinessAddressCity: string;
  BusinessAddressCountryEn: string;
  BusinessAddressPOBox: string;
  BusinessAddressPostalCode: string;
  BusinessAddressState: string;
  BusinessAddressStreet: string;
  Company: string;
  Department: string;
  DoNotSendNewsletter: boolean;
  Email1Address: string;
  Email2Address: string;
  Email3Address: string;
  FirstName: string;
  HomeAddressCity: string;
  HomeAddressCountryEn: string | null;
  HomeAddressPOBox: string;
  HomeAddressPostalCode: string;
  HomeAddressState: string;
  HomeAddressStreet: string;
  ICQ: string;
  ImportanceEn: string;
  LastActivity: string;
  LastName: string;
  MSN: string;
  MiddleName: string;
  NextStep: any | null; // Replace 'any' with more specific type if known
  Note: string;
  OtherAddressCity: string;
  OtherAddressCountryEn: string | null;
  OtherAddressPOBox: string;
  OtherAddressPostalCode: string;
  OtherAddressState: string;
  OtherAddressStreet: string;
  PrefixEn: string;
  PrevStateEn: string | null;
  ProfilePicture: string | null; // Replace 'any' with more specific type if known
  ProfilePictureHeight: number;
  ProfilePictureWidth: number;
  Skype: string;
  StateEn: string | null;
  SuffixEn: string | null;
  TelephoneNumber1: string;
  TelephoneNumber1Normalized: string;
  TelephoneNumber2: string | null;
  TelephoneNumber2Normalized: string | null;
  TelephoneNumber3: string | null;
  TelephoneNumber3Normalized: string | null;
  TelephoneNumber4: string | null;
  TelephoneNumber4Normalized: string | null;
  TelephoneNumber5: string | null;
  TelephoneNumber5Normalized: string | null;
  TelephoneNumber6: string | null;
  TelephoneNumber6Normalized: string | null;
  Title: string;
  TypeEn: string | null;
  WebPage: string;
}
