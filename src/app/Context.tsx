"use client";
import React, { ReactNode, createContext, useEffect, useState } from "react";
import datajson from "./data.json";
import Header from "./conponents/Header";

export type ListItemType = {
  name?: string;
  quantity?: number;
  price?: number;
  total?: number;
};



export type GlobalContextType = {
  isDesktop: boolean;
  isTablet: boolean;
  isMobile: boolean;
  data: DataType[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
  setStatusDropdown: React.Dispatch<React.SetStateAction<boolean>>;
  statusDropdown: boolean;
  checkBox: number;
  setCheckBox: React.Dispatch<React.SetStateAction<number>>;
  setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
  isChecked: Boolean;
  handleCheckBox: (value: string) => void;
  filtredData: DataType[];
  showInvoice: boolean;
  setShowInvoice: React.Dispatch<React.SetStateAction<boolean>>;
  length: Number;
  setLength: React.Dispatch<React.SetStateAction<number>>;
  setData: React.Dispatch<React.SetStateAction<DataType[]>>;
  newInvoicePage: boolean;
  setNewInvoicePage: React.Dispatch<React.SetStateAction<boolean>>;
  setClientName: React.Dispatch<React.SetStateAction<string>>;
  setClientEmail: (value: React.SetStateAction<string>) => void;
  setClientStreet: React.Dispatch<React.SetStateAction<string>>;
  setClientCity: React.Dispatch<React.SetStateAction<string>>;
  setClientPostCode: React.Dispatch<React.SetStateAction<string>>;
  setClientCountry: React.Dispatch<React.SetStateAction<string>>;
  setCreatedAt: React.Dispatch<React.SetStateAction<string>>;
  setPaymentTermsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  paymentTermsDropDown: boolean;
  setHandlePaymentTerm: React.Dispatch<React.SetStateAction<string>>;
  handlePaymentTerm: string;
  setProjectDesc: React.Dispatch<React.SetStateAction<string>>;
  setItemName: React.Dispatch<React.SetStateAction<string>>;
  setItemPrice: React.Dispatch<React.SetStateAction<number>>;
  setItemQty: React.Dispatch<React.SetStateAction<number>>;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
  generateRandomID: () => void;
  randomID: string;
  clientCity: string;
  addNewInvoice: (value: DataType) => void;
  createdAt: string;
  projectDesc: string;
  clientName: string;
  clientEmail: string;
  clientStreet: string;
  clientPostCode: string;
  clientCountry: string;
  totalPrice: number;
  itemName: string;
  itemPrice: number;
  itemQty: number;
  newInvoiceItem: DataType;
  setNewInvoiceItem: React.Dispatch<React.SetStateAction<DataType>>;
  markAsPaid: boolean;
  setMarkAsPaid: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  error: boolean;
  calculatePaymentTerms: (createdAt: string, paymentDays: number) => void;
  paymentTerms: number;
  paymentDue: string;
  deleteDataItems: (value: string) => void;
  setDeleteSectionOverlay: React.Dispatch<React.SetStateAction<boolean>>;
  deleteSectionOverlay: boolean;
  editParams: string;
  setEditParams: React.Dispatch<React.SetStateAction<string>>;
  addNewItem: boolean;
  getEditParams: (value: string) => void;

  addNewListItem: (newItem: ListItemType) => void;
  newListItem: ListItemType;

  newListItemArray: ListItemType[];

  setAddNewItem: React.Dispatch<React.SetStateAction<boolean>>;
  deleteItemsFromItemList: (value: string, index: number) => void;
};

export type DataType = {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: string;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items?: {
    name?: string;
    quantity?: number;
    price?: number;
    total?: number;
  }[];

  total: number;
};



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
//   };
//   clientAddress: {
//     street: string;
//     city: string;
//     postCode: string;
//     country: string;
//   };
//   items?: ListItemType[]; 
//   total: number;
// };

export const GlobalContext = createContext<GlobalContextType | null>(null);

export default function GlobalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState<DataType[]>(datajson);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [status, setStatus] = useState("");
  const [checkBox, setCheckBox] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [filtredData, setFilterdData] = useState<DataType[]>([]);
  const [showInvoice, setShowInvoice] = useState(false);
  const [newInvoicePage, setNewInvoicePage] = useState(false);
  const [length, setLength] = useState(data.length);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientStreet, setClientStreet] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPostCode, setClientPostCode] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [paymentTermsDropDown, setPaymentTermsDropDown] = useState(false);
  const [handlePaymentTerm, setHandlePaymentTerm] = useState("Net 30 Days");
  const [projectDesc, setProjectDesc] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [markAsPaid, setMarkAsPaid] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState(30);
  const [paymentDue, setPaymentDue] = useState("");
  const [error, setError] = useState(false);
  const [deleteSectionOverlay, setDeleteSectionOverlay] = useState(false);
  const [editParams, setEditParams] = useState("");
  const [addNewItem, setAddNewItem] = useState(false);
  const [newInvoiceItem, setNewInvoiceItem] = useState<DataType>({
    id: "",
    createdAt: "",
    paymentDue: "",
    description: "",
    paymentTerms: 0,
    clientName: "",
    clientEmail: "",
    status: "",
    senderAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    clientAddress: {
      street: "",
      city: "",
      postCode: "",
      country: "",
    },
    items: [],
    total: 0,
  });
  const [newListItem, setNewListItem] = useState<ListItemType>({
    name: "",
    quantity: 0,
    price: 0,
    total: 0,
  });
  const [newListItemArray, setNewListItemArray] = useState<ListItemType[]>([]);

  console.log(editParams, 'editParams')

  const calculatePaymentTerms = (createdAt: string, paymentDays: number) => {
    setPaymentTerms(paymentDays);
    const createdDate = new Date(createdAt);
    const dueDate = new Date(createdDate);
    dueDate.setDate(dueDate.getDate() + paymentDays);
    const formattedDueDate = dueDate.toISOString().split("T")[0];
    setPaymentDue(formattedDueDate);
  };

  let newData: DataType[];
  const handleCheckBox = (checkName: string) => {
    if (isChecked !== false) {
      newData = datajson.filter((item) => item.status === `${checkName}`);
      setData(newData);
      setStatusDropdown(!statusDropdown);
      setLength(newData.length);
      setStatus(checkName);
    } else {
      setData(data);
    }
  };

  const addNewInvoice = (newInvoiceObj: DataType) => {
    const newDataObj = newInvoiceObj;
    setData([...data, newDataObj]);
  };

  const deleteDataItems = (itemId: string) => {
    console.log(itemId, ">>>itemId");
    const deleteById = data.filter((item) => item.id !== itemId);
    setData(deleteById);
    setLength(deleteById.length);
  };

  const addNewListItem = (newItem: ListItemType) => {
    setNewListItem(newItem);
    setNewListItemArray([...newListItemArray, newItem]);
  };





  const [editedNewDataEl, setEditedNewDataEl] = useState({});
  // console.log(editedNewDataEl, "editedNewDataEl");

  // const deleteItemsFromItemList = (elId: string, index: number) => {
  //   const newDataEl = data.find((item) => item.id === elId);

  //   const newItemArr = newDataEl?.items;

  //   if (newItemArr) {
  //     const editedNewItemArr = newItemArr.filter((el, i) => i !== index);
  //     setEditedNewDataEl({ ...newDataEl, items: editedNewItemArr });
  //   }

  //   //  console.log( data.map(item => item.id === editedNewDataEl.id))
  // };


  const deleteItemsFromItemList = (elId: string, index: number) => {
    const newData = data.map(item => {
      if(item.id === elId) {
        const updatedItems = item.items?.filter((el, i) => i !== index)
        return { ...item, items: updatedItems };
      }
      return item;
    })
    setData(newData);
  }
















  
  const getEditParams = (itemId: string) => {
    setEditParams(itemId);
    setAddNewItem(true);
  };

  const [randomID, setRandomID] = useState("");
  function generateRandomID() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomStr = "";
    for (let i = 0; i < 2; i++) {
      randomStr += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      randomStr += Math.floor(Math.random() * 10);
    }
    setRandomID(randomStr);
  }

  const checkWindowSize = () => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setIsDesktop(true);
      setIsTablet(false);
      setIsMobile(false);
    } else if (windowWidth >= 768) {
      setIsDesktop(false);
      setIsTablet(true);
      setIsMobile(false);
    } else {
      setIsDesktop(false);
      setIsTablet(false);
      setIsMobile(true);
    }
  };

  useEffect(() => {
    checkWindowSize();
    window.addEventListener("resize", checkWindowSize);

    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", checkWindowSize);
  }

  return (
    <GlobalContext.Provider
      value={{
        isDesktop,
        isTablet,
        isMobile,
        data,
        status,
        setStatus,
        setStatusDropdown,
        statusDropdown,
        setCheckBox,
        checkBox,
        setIsChecked,
        isChecked,
        handleCheckBox,
        filtredData,
        showInvoice,
        setShowInvoice,
        length,
        setLength,
        setData,
        newInvoicePage,
        setNewInvoicePage,
        setClientName,
        setClientEmail,
        setClientStreet,
        setClientCity,
        setClientPostCode,
        setClientCountry,
        setCreatedAt,
        setPaymentTermsDropDown,
        paymentTermsDropDown,
        setHandlePaymentTerm,
        handlePaymentTerm,
        setProjectDesc,
        setItemName,
        setItemPrice,
        setItemQty,
        setTotal,
        setTotalPrice,
        generateRandomID,
        randomID,
        addNewInvoice,
        createdAt,
        projectDesc,
        clientName,
        clientEmail,
        clientStreet,
        clientCity,
        clientPostCode,
        clientCountry,
        totalPrice,
        itemName,
        itemPrice,
        itemQty,
        newInvoiceItem,
        setNewInvoiceItem,
        markAsPaid,
        setMarkAsPaid,
        setError,
        error,
        calculatePaymentTerms,
        paymentTerms,
        paymentDue,

        deleteDataItems,
        setDeleteSectionOverlay,
        deleteSectionOverlay,
        addNewListItem,
        // setEditInvoice,
        setEditParams,
        editParams,
        addNewItem,

        getEditParams,
        // setNewListItem,
        newListItem,

        newListItemArray,
        setAddNewItem,
        deleteItemsFromItemList,
      }}
    >
      <div
        className={`flex ${isMobile && "flex-col"} ${isTablet && "flex-col"} ${
          isDesktop && "flex-row"
        } 
       bg-[#F8F8FB] h-full relative`}
      >
        <div
          className={`h-full ${isMobile && "flex-col"} ${
            isTablet && "flex-col"
          } ${isDesktop && "flex-row"}`}
        >
          <Header />
        </div>
        {children}
      </div>
    </GlobalContext.Provider>
  );
}
