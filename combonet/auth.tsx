// import React from "react";
// import axios from "../axios/axios";

// import useSWR from "swr";
// import { PublicConfiguration } from "swr/_internal";
// import { LocaStorage } from "@/constant/locostorate";

// export interface User {
//   username: string;
//   city: string;
//   email: string;
// }

// function getUser(): {} | null {
//   try {
//     return JSON.parse(localStorage.getItem(LocaStorage.userInfo) || "");
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }

// export default function Auth(options?: Partial<PublicConfiguration>) {
//   const {
//     data: profile,
//     error,
//     mutate,
//   } = useSWR("/profile", {
//     revalidateOnFocus: false,
//     fallbackData: getUser(),
//     onSuccess(data) {
//       localStorage.setItem(LocaStorage.userInfo, JSON.stringify(data));
//     },
//     onError(err) {
//       localStorage.removeItem(LocaStorage.userInfo);
//       logout();
//     },
//     ...options,
//   });
//   let firtloading: boolean = profile === undefined && error === undefined;

//   const login = async (payload: any) => {
//     let data: any = await axios.post("login", payload);
//     if (data.error === 0) {
//       await mutate();
//     } else {
//       await mutate(data.message);
//     }
//   };
//   const logout = async () => {
//     await axios.post("logout");
//     await mutate(null, false);
//     localStorage.removeItem(LocaStorage.userInfo);
//   };

//   return {
//     profile,
//     error,
//     login,
//     logout,
//     firtloading,
//   };
// }
