// "use client";

// import { ReactNode, createContext, useEffect, useState } from "react";
// import Header from "./conponents/Header";
// import Form from "./conponents/Form";
// import datajson from './data.json'


// export type GlobalContextType = {
//   isDesktop: boolean;
//   isTablet: boolean;
//   isMobile: boolean;
// };





// // export type DataType = {
// //   id: string;
// //   createdAt: string;
// //   paymentDue: string;
// //   description: string;
// //   paymentTerms: number;
// //   clientName: string;
// //   clientEmail: string;
// //   status: string;
// //   senderAddress: {
// //     street: string;
// //     city: string;
// //     postCode: string;
// //     country:string;
// //   },
// //   clientAddress: {
// //     street: string;
// //     city: string;
// //     postCode: string;
// //     country: string;
// //   },
// //   items?: [
// //     {
// //       name?:  string | undefined;
// //       quantity?: number;
// //       price?: number;
// //       total?: number;
// //     },
// //     {
// //       name?: string;
// //       quantity?: number;
// //       price?: number;
// //       total?: number;
// //     }
// //   ],
// //   total: number;
// // }


// export type DataType = {
//   id: string;
//   createdAt: string;
//   paymentDue: string;
//   description: string;
//   paymentTerms: number;
//   clientName: string;
//   clientEmail: string;
//   status: string;
//   senderAddress: {
//     street: string;
//     city: string;
//     postCode: string;
//     country: string;
//   },
//   clientAddress: {
//     street: string;
//     city: string;
//     postCode: string;
//     country: string;
//   },
//   items?:
//   {
//     name?: string;
//     quantity?: number;
//     price?: number;
//     total?: number;
//   }[],

//   total: number;
// }





// export const GlobalContext = createContext<GlobalContextType | null>(null);

// function GlobalContextProvider({ children }: { children: ReactNode }) {



//   const [data, setData] = useState<DataType[]>(datajson)
//   console.log(data)

//   const [isDesktop, setIsDesktop] = useState(false);
//   const [isTablet, setIsTablet] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);


//   const checkWindowSize = () => {
//     const windowWidth = window.innerWidth;
//     if (windowWidth >= 1024) {
//       setIsDesktop(true);
//       setIsTablet(false);
//       setIsMobile(false);
//     } else if (windowWidth >= 768) {
//       setIsDesktop(false);
//       setIsTablet(true);
//       setIsMobile(false);
//     } else {
//       setIsDesktop(false);
//       setIsTablet(false);
//       setIsMobile(true);
//     }
//   };

//   useEffect(() => {
//     checkWindowSize();
//     window.addEventListener("resize", checkWindowSize);

//     return () => {
//       window.removeEventListener("resize", checkWindowSize);
//     };
//   }, []);

//   if (typeof window !== "undefined") {
//     window.addEventListener("resize", checkWindowSize);
//   }

//   return (
//     <GlobalContext.Provider
//       value={{
//         isDesktop,
//         isTablet,
//         isMobile,
//       }}
//     >
//       {/* <div className={`flex ${isMobile && 'flex-col'} ${isTablet && 'flex-col'} ${isDesktop && 'flex-row'} 
//         bg-[#F8F8FB] h-full lg:gap-[17.5%] `}> */}
//       <div className={`flex ${isMobile && 'flex-col'} ${isTablet && 'flex-col'} ${isDesktop && 'flex-row'} 
//         bg-[#F8F8FB] h-full relative`}>

//         <div className={`h-full ${isMobile && 'flex-col'} ${isTablet && 'flex-col'} ${isDesktop && 'flex-row'}`}>
//           <Header />
//         </div>
//         {children}
//       </div>
//     </GlobalContext.Provider>
//   );
// }

// export default GlobalContextProvider;


// export type DataType = {
//   id: string;
//   createdAt: string;
//   paymentDue: string;
//   description: string;
//   paymentTerms: string;
//   clientName: string;
//   clientEmail: string;
//   status: string;
//   senderAddress: {
//     street: string;
//     city: string;
//     postCode: string;
//     country: string;
//   };
//   clientAddress: {
//     street: string;
//     city: string;
//     postCode: string;
//     country: string;
//   };
//   items: {
//     name: string;
//     quantity: string;
//     price: string;
//     total: string;
//   }[];
//   total: string;
// }[];
