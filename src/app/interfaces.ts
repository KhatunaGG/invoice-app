export type ItemType = {
    name?: string;
    quantity?: number;
    price?: number;
    total?: number;
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
    items?: ItemType[];
    total: number;
};


export type GlobalContextType = {
    isDesktop: boolean;
    isTablet: boolean;
    isMobile: boolean;
    data: DataType[];
    setData: React.Dispatch<React.SetStateAction<DataType[]>>;
    markAsPaid: boolean;
    setMarkAsPaid: React.Dispatch<React.SetStateAction<boolean>>;
    newInvoicePage: boolean;
    setNewInvoicePage: React.Dispatch<React.SetStateAction<boolean>>;
    editParams: string;
    setEditParams: React.Dispatch<React.SetStateAction<string>>;
    totalPrice: number;
    itemName: string;
    itemPrice: number;
    itemQty: number;
    setItemName: React.Dispatch<React.SetStateAction<string>>;
    setItemPrice: React.Dispatch<React.SetStateAction<number>>;
    setItemQty: React.Dispatch<React.SetStateAction<number>>;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    setTotalPrice: React.Dispatch<React.SetStateAction<number>>;
    setClientName: React.Dispatch<React.SetStateAction<string>>;
    clientName: string;
    setClientEmail: React.Dispatch<React.SetStateAction<string>>;
    clientEmail: string;
    setClientStreet: React.Dispatch<React.SetStateAction<string>>;
    clientStreet: string;
    setClientCity: React.Dispatch<React.SetStateAction<string>>;
    clientCity: string;
    setClientPostCode: React.Dispatch<React.SetStateAction<string>>;
    clientPostCode: string;
    setClientCountry: React.Dispatch<React.SetStateAction<string>>;
    clientCountry: string;
    setCreatedAt: React.Dispatch<React.SetStateAction<string>>;
    createdAt: string;
    setPaymentTermsDropDown: React.Dispatch<React.SetStateAction<boolean>>;
    paymentTermsDropDown: boolean;
    createNewInvoice: () => void;
    setProjectDesc: React.Dispatch<React.SetStateAction<string>>;
    setHandlePaymentTerm: React.Dispatch<React.SetStateAction<string>>;
    calculatePaymentTerms: (createdAt: string, paymentDays: number) => void;
    generateRandomID: () => void;
    editExistingInvoice: (value: string) => void;
    projectDesc: string;
    setPaymentDue: React.Dispatch<React.SetStateAction<string>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    length: number;
    status: string;
    setCheckBox: React.Dispatch<React.SetStateAction<number>>;
    checkBox: number;
    statusDropdown: boolean;
    isChecked: boolean;
    setIsChecked: React.Dispatch<React.SetStateAction<boolean>>;
    handleCheckBox: (value: string) => void;
    setStatusDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    newArr: ItemType[];
    createNewItems: (value: string) => void;
    newItemArr: ItemType[];
    handlePaymentTerm: string;
    setNewItemArr: React.Dispatch<React.SetStateAction<ItemType[]>>;
    setDeleteSectionOverlay: React.Dispatch<React.SetStateAction<boolean>>;
    deleteSectionOverlay: boolean;
    deleteDataItems: (value: string) => void;
    randomID: string;
    paymentDue: string;
    paymentTerms: number;
    setUpdatedDataEl: React.Dispatch<React.SetStateAction<DataType | undefined>>;
    addNewInvoice: (value: DataType) => void;
    setError: React.Dispatch<React.SetStateAction<boolean>>;
    error: boolean;
};


export type ParamsPropsType = {
    params: {
        id: string;
    }
}

export type ItemSectionPropsType = {
    el?: ItemType;
};
