"use client";
import React, {
  ReactNode,
  createContext,
  useEffect,
  useState,
} from "react";
import datajson from "./data.json";
import Header from "./conponents/Header";
import { DataType, GlobalContextType, ItemType } from "./interfaces";



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
  const [markAsPaid, setMarkAsPaid] = useState(false);
  const [newInvoicePage, setNewInvoicePage] = useState(false);
  const [editParams, setEditParams] = useState("");
  const [itemName, setItemName] = useState("");
  const [itemPrice, setItemPrice] = useState(0);
  const [itemQty, setItemQty] = useState(0);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(itemQty * total);
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientStreet, setClientStreet] = useState("");
  const [clientCity, setClientCity] = useState("");
  const [clientPostCode, setClientPostCode] = useState("");
  const [clientCountry, setClientCountry] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [paymentTermsDropDown, setPaymentTermsDropDown] = useState(false);
  const [randomID, setRandomID] = useState("");
  const [paymentDue, setPaymentDue] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [handlePaymentTerm, setHandlePaymentTerm] = useState("Net 30 Days");
  const [paymentTerms, setPaymentTerms] = useState(30);
  const [status, setStatus] = useState("");
  const [updatedDataEl, setUpdatedDataEl] = useState<DataType>();
  const [length, setLength] = useState(data.length);
  const [deleteSectionOverlay, setDeleteSectionOverlay] = useState(false);
  const [statusDropdown, setStatusDropdown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [checkBox, setCheckBox] = useState(0);
  const [newArr, setNewArr] = useState<ItemType[]>([]);
  const [error, setError] = useState(false);
  const [newItemArr, setNewItemArr] = useState<ItemType[]>([]);
  const [item, setItem] = useState<ItemType>({});



  useEffect(() => {
    const newArrItem = data
      .filter((item) => item.id === editParams)
      .find((el) => el.items !== undefined)?.items;

    if (newArrItem) {
      setNewArr(newArrItem);
    }
  }, [editParams]);

  useEffect(() => {
    setLength(data.length);
  }, [data.length]);


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


  const createNewItems = (params: string) => {
    if (!itemName && !itemQty && !itemPrice && !total) {
      setNewItemArr([
        ...newItemArr,
        { name: "", quantity: 0, price: 0, total: 0 },
      ]);
    } else {
      setNewItemArr([
        ...newItemArr,
        {
          name: itemName,
          quantity: itemQty,
          price: itemPrice,
          total: itemQty * itemPrice,
        },
      ]);
    }
  };

  const addNewInvoice = (newInvoiceObj: DataType) => {
    const newDataObj = newInvoiceObj;
    setData([...data, newDataObj]);
  };

  let newItemInInvoiceObj: ItemType;
  const editExistingInvoice = (params: string) => {
    setEditParams(params);
    if (params) {
      const existingInvoiceIndex = data.findIndex((el) => el.id === params);
      if (existingInvoiceIndex !== -1) {
        const existingInvoice = data[existingInvoiceIndex];
        if (itemName && itemQty && itemPrice) {
          newItemInInvoiceObj = {
            name: itemName,
            quantity: itemQty,
            price: itemPrice,
            total: itemQty * itemPrice,
          };
        }
        const updatedItems = [
          ...(existingInvoice.items || []),
          ...(newItemArr.slice(1) || []),
          newItemInInvoiceObj,
        ];
        let elTotal;
        if (newItemArr) {
          elTotal = newItemArr.reduce(
            (acc, item) => acc + Number(item.total),
            0
          );
        }

        const newInvoiceObj: DataType = {
          ...existingInvoice,
          id: params,
          createdAt,
          paymentDue,
          description: projectDesc,
          paymentTerms,
          clientName,
          clientEmail,
          status: "pending",
          senderAddress: {
            street: "19 Union Terrace",
            city: "London",
            postCode: "E1 3EZ",
            country: "United Kingdom",
          },
          clientAddress: {
            street: clientStreet,
            city: clientCity,
            postCode: clientPostCode,
            country: clientCountry,
          },
          items: updatedItems,
          total: total + Number(elTotal),
        };

        const updatedData = [...data];
        updatedData[existingInvoiceIndex] = newInvoiceObj;
        setUpdatedDataEl(newInvoiceObj);
        setData(updatedData);
      }
    }
  };




  console.log(error, 'error')
  const createNewInvoice = () => {
    if (
      createdAt &&
      handlePaymentTerm &&
      projectDesc &&
      clientName &&
      clientEmail &&
      clientStreet &&
      clientCity &&
      clientPostCode &&
      clientCountry &&
      itemName &&
      itemQty &&
      itemPrice &&
      totalPrice
    ) {
      const newItemInInvoiceObj = {
        name: itemName,
        quantity: itemQty,
        price: itemPrice,
        total: itemQty * itemPrice,
      };

      let arrTotal = 0;
      if (newItemArr) {
        newItemArr.forEach((el) => {
          arrTotal += Number(el.quantity) * Number(el.price);
        });
      }

      let newInvoiceObj = {
        id: randomID,
        createdAt: createdAt,
        paymentDue: paymentDue,
        description: projectDesc,
        paymentTerms: paymentTerms,
        clientName: clientName,
        clientEmail: clientEmail,
        status: "pending",
        senderAddress: {
          street: "19 Union Terrace",
          city: "London",
          postCode: "E1 3EZ",
          country: "United Kingdom",
        },
        clientAddress: {
          street: clientStreet,
          city: clientCity,
          postCode: clientPostCode,
          country: clientCountry,
        },
        items: [...newItemArr.slice(1), newItemInInvoiceObj],
        total: arrTotal + newItemInInvoiceObj.total,
      };

      if (updatedDataEl) {
        for (let key in newInvoiceObj) {
          setError(!error)
          console.log(key, 'key')
        }
      }
      setData((prevData) => [...prevData, newInvoiceObj]);
    }
  };


  const deleteDataItems = (itemId: string) => {
    console.log(itemId, ">>>itemId");
    const deleteById = data.filter((item) => item.id !== itemId);
    setData(deleteById);
    setLength(deleteById.length);
  };



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

  const calculatePaymentTerms = (createdAt: string, paymentDays: number) => {
    setPaymentTerms(paymentDays);
    const createdDate = new Date(createdAt);
    const dueDate = new Date(createdDate);
    dueDate.setDate(dueDate.getDate() + paymentDays);
    const formattedDueDate = dueDate.toISOString().split("T")[0];
    setPaymentDue(formattedDueDate);
  };

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
        setData,
        markAsPaid,
        setMarkAsPaid,
        newInvoicePage,
        setNewInvoicePage,
        editParams,
        setEditParams,
        editExistingInvoice,
        setItemName,
        setItemPrice,
        setItemQty,
        setTotal,
        setTotalPrice,
        itemQty,
        itemPrice,
        totalPrice,
        itemName,
        setClientName,
        clientName,
        setClientEmail,
        clientEmail,
        setClientStreet,
        clientStreet,
        setClientCity,
        clientCity,
        setClientPostCode,
        clientPostCode,
        setClientCountry,
        clientCountry,
        setCreatedAt,
        createdAt,
        setPaymentTermsDropDown,
        paymentTermsDropDown,
        createNewInvoice,
        setProjectDesc,
        setHandlePaymentTerm,
        calculatePaymentTerms,
        generateRandomID,
        projectDesc,
        setPaymentDue,
        setStatus,
        length,
        status,
        setCheckBox,
        checkBox,
        statusDropdown,
        isChecked,
        setIsChecked,
        handleCheckBox,
        setStatusDropdown,
        newArr,
        createNewItems,
        newItemArr,
        handlePaymentTerm,
        setNewItemArr,
        setDeleteSectionOverlay,
        deleteSectionOverlay,
        deleteDataItems,
        randomID,
        paymentDue,
        paymentTerms,
        setUpdatedDataEl,
        addNewInvoice,
        error,
        setError,
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
