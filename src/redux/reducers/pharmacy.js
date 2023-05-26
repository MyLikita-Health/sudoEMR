import {
  GET_INVENTORY,
  ADD_DRUG,
  INVENTORY_LOADING,
  SUBMIT_DRUG_LOADING,
  UPDATE_DRUG,
  UPDATING_DRUG,
  LOAD_EXPIRY_ALERT,
  LOAD_QTTY_ALERT,
  LOAD_EXPIRED,
  PURCHASE_RECORDS_LOADING,
  GET_PURCHASE_RECORDS,
  PENDING_PURCHASES_LOADING,
  GET_PENDING_PURCHASES,
  DISPENSING_DRUGS,
  DISPENSE_DRUGS,
  GET_DRUG_LIST_COUNT,
  GETTING_ALL_SUPPLIERS,
  GET_ALL_SUPPLIERS,
  CREATING_SUPPLIERS,
  CREATE_SUPPLIER,
  DRUGS_LOADING,
  GET_DRUGS,
  DELETING_DRUG,
  ADDING_DRUG,
  UPDATING_SUPPLIER,
  DELETING_SUPPLIER,
  GETTING_PHARM_SALES_SUMMARY,
  GET_PHARM_SALES_SUMMARY,
  CLEAR_PHARM_SALES_SUMMARY,
  GETTING_TOP_5_POPULAR_DRUGS,
  GET_TOP_5_POPULAR_DRUGS,
  GETTING_CUSTOMERS,
  GET_CUSTOMERS,
  GET_OTHER_EXPENSES,
  SET_PENDING_PHARMACY_REQUEST,
  GET_CLIENT_INFO,
  GET_CLIENT_STATEMENT,
  GET_DRUG_LIST,
  GET_PHARM_STORE,
  GET_PURCHASE_ITEM,
  GET_STOCK_INFO,
  GET_STOCK_INFO_STORE,
  GET_STOCK_INFO_STORE_SHELF,
  GET_SUPPLIER_INFO,
  GET_SUPPLIER_STATEMENT,
  GET_TOP_SALES,
  PHARM_LOADING,
  PHARM_USER,
  RECEIPT_DATA,
  SALES,
  SUPPLIER_COUNT,
  GET_EXPIRY_ALERT,
  GET_REORDER_LEVEL,
  GET_TOTAL_DRUG,
  OUT_OF_STOCK_LIST,
} from "../actions/actionTypes";

const initialState = {
  test: "Hello there",
  drugs: [],
  inventory: [],
  purchaseRecords: [],
  pendingPurchases: [],
  expiredDrugs: [],
  expiryAlert: [],
  quantityAlert: [],
  suppliers: [],
  inventoryLoading: false,
  drugSubmitLoading: false,
  updatingDrug: false,
  loadingPurchaseRecords: false,
  loadingPendingPurchases: false,
  dispensingDrugs: false,
  suppliersLoading: false,
  creatingSupplier: false,
  updatingSupplier: false,
  deletingSupplier: false,
  drugListLoading: false,
  addingDrug: false,
  deletingDrug: false,
  gettingPharmSalesSummary: false,
  pharmSalesSummary: {
    totalSales: 0,
    totalAmount: 0,
    totalStock: 0,
    totalStockAmount: 0,
    totalDisp: 0,
    totalDispAmount: 0,
    otherExpenses: 0,
  },
  gettingTop5: false,
  top5PopularDrugsToday: [],
  loadingCustomers: false,
  customersList: [],
  pharmHasStore: false,
  otherExpenses: [],
  pendingPharmRequest: [],

  bankList: [
    "Access Bank",
    "Citi Bank",
    "EcoBank PLC",
    "First Bank PLC",
    "First City Monument Bank",
    "Fidelity Bank",
    "Guaranty Trust Bank",
    "Polaris bank",
    "Stanbic IBTC Bank",
    "Standard Chaterted bank PLC",
    "Sterling Bank PLC",
    "United Bank for Africa",
    "Union Bank PLC",
    "Wema Bank PLC",
    "Zenith bank PLC",
    "Unity Bank PLC",
    "ProvidusBank PLC",
    "Keystone Bank",
    "Jaiz Bank",
    "Heritage Bank",
    "Suntrust Bank",
    "FINATRUST MICROFINANCE BANK",
    "Rubies Microfinance Bank",
    "Kuda",
    "TCF MFB",
    "FSDH Merchant Bank",
    "Rand merchant Bank",
    "Globus Bank",
    "Paga",
    "Taj Bank Limited",
    "GoMoney",
    "AMJU Unique Microfinance Bank",
    "BRIDGEWAY MICROFINANCE BANK",
    "Eyowo MFB",
    "Mint-Finex MICROFINANCE BANK",
    "Covenant Microfinance Bank",
    "VFD Micro Finance Bank",
    "PatrickGold Microfinance Bank",
  ],
  supplierInfo: [],
  supplierStatement: [],
  drugList: [],
  outOfStock: [],
  purchaseItems: [],
  pharmStore: [],
  loading: false,
  clientInfo: [],
  clientStatement: [],
  saleItems: [],
  pharmUsers: [],
  receiptData: [],
  supplierCount: 0,
  stockInfo: {},
  stockInfoStore: {},
  stockInfoShelf: {},
  topSales: [],
  // expiryAlert:[],
  reorderLevel: [],
  totalDrugs: 0,
  drugListCount:0
};

const pharmacyReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_EXPIRY_ALERT:
      return {
        ...state,
        expiryAlert: action.payload,
      };

    case LOAD_QTTY_ALERT:
      return {
        ...state,
        quantityAlert: action.payload,
      };
    case GET_DRUG_LIST_COUNT:
      return {
        ...state,
        quantityAlert: action.payload,
      };
    case LOAD_EXPIRED:
      return {
        ...state,
        expiredDrugs: action.payload,
      };

    case INVENTORY_LOADING:
      return {
        ...state,
        inventoryLoading: !state.inventoryLoading,
      };

    case DRUGS_LOADING:
      return {
        ...state,
        drugListLoading: !state.drugListLoading,
      };

    case GET_DRUGS:
      return {
        ...state,
        drugListLoading: false,
        drugs: action.drugs,
      };

    case PURCHASE_RECORDS_LOADING:
      return {
        ...state,
        loadingPurchaseRecords: !state.loadingPurchaseRecords,
      };

    case PENDING_PURCHASES_LOADING:
      return {
        ...state,
        loadingPendingPurchases: !state.loadingPendingPurchases,
      };

    case GET_PURCHASE_RECORDS:
      return {
        ...state,
        loadingPurchaseRecords: false,
        purchaseRecords: action.purchaseRecords,
      };

    case GET_PENDING_PURCHASES:
      return {
        ...state,
        loadingPendingPurchases: false,
        pendingPurchases: action.pendingPurchases,
      };

    case SUBMIT_DRUG_LOADING:
      return {
        ...state,
        drugSubmitLoading: !state.drugSubmitLoading,
      };

    case GET_INVENTORY: {
      // let drugs = [];
      // action.inventory.forEach(item => drugs.push(item.drug));
      return {
        ...state,
        // drugs:,
        inventoryLoading: false,
        inventory: action.inventory,
      };
    }

    case UPDATE_DRUG: {
      let { drug_id } = action.payload;
      let newList = state.inventory.filter((item) => item.drug_id !== drug_id);
      return {
        ...state,
        inventory: [action.payload, ...newList],
      };
    }

    case UPDATING_DRUG:
      return {
        ...state,
        updatingDrug: !state.updatingDrug,
      };

    case ADD_DRUG:
      return {
        ...state,
        inventory: [...state.inventory, action.payload],
      };
    case ADDING_DRUG:
      return {
        ...state,
        addingDrug: !state.addingDrug,
      };

    case DISPENSING_DRUGS:
      return {
        ...state,
        dispensingDrugs: !state.dispensingDrugs,
      };

    case DISPENSE_DRUGS: {
      const { dispensed } = action.payload;
      const { inventory } = state;
      let newInventory = [];
      dispensed.forEach((drug) => {
        let currentDrug = inventory.filter((item) => item.drug === drug.drug);
        if (currentDrug.length) {
          let newDrugQtty =
            parseInt(currentDrug[0].quantity) -
            parseInt(drug.quantity_dispensed);
          let newInventoryItem = { ...currentDrug[0], quantity: newDrugQtty };
          newInventory.push(newInventoryItem);
        }
      });
      console.log(newInventory);

      return {
        ...state,
        dispensingDrugs: false,
        inventory: newInventory,
      };
    }

    case GETTING_ALL_SUPPLIERS:
      return {
        ...state,
        suppliersLoading: !state.suppliersLoading,
      };

    case GET_ALL_SUPPLIERS:
      // console.log('action',action)
      return {
        ...state,
        suppliers: action.suppliers,
      };

    case CREATING_SUPPLIERS:
      return {
        ...state,
        creatingSupplier: !state.creatingSupplier,
      };

    case CREATE_SUPPLIER:
      return {
        ...state,
        suppliers: [action.payload, ...state.suppliers],
      };
    case UPDATING_SUPPLIER:
      return {
        ...state,
        updatingSupplier: !state.updatingSupplier,
      };
    case DELETING_SUPPLIER:
      return {
        ...state,
        deletingSupplier: !state.deletingSupplier,
      };
    case DELETING_DRUG:
      return {
        ...state,
        deletingDrug: !state.deletingDrug,
      };
    case GETTING_PHARM_SALES_SUMMARY:
      return {
        ...state,
        gettingPharmSalesSummary: !state.gettingPharmSalesSummary,
      };
    case GET_PHARM_SALES_SUMMARY:
      return {
        ...state,
        pharmSalesSummary: {
          ...state.pharmSalesSummary,
          ...action.payload,
        },
      };
    case CLEAR_PHARM_SALES_SUMMARY:
      return {
        ...state,
        pharmSalesSummary: {
          totalStock: 0,
          totalSales: 0,
          totalAmount: 0,
        },
      };
    case GETTING_TOP_5_POPULAR_DRUGS:
      return {
        ...state,
        gettingTop5: !state.gettingTop5,
      };
    case GET_TOP_5_POPULAR_DRUGS:
      return {
        ...state,
        top5PopularDrugsToday: action.payload,
      };
    case GETTING_CUSTOMERS:
      return {
        ...state,
        loadingCustomers: !state.loadingCustomers,
      };
    case GET_CUSTOMERS:
      return {
        ...state,
        customersList: action.payload,
      };
    case GET_OTHER_EXPENSES:
      return {
        ...state,
        otherExpenses: action.payload,
      };
    case SET_PENDING_PHARMACY_REQUEST:
      return {
        ...state,
        pendingPharmRequest: action.payload,
      };

    // moved code
    case GET_SUPPLIER_INFO:
      return {
        ...state,
        supplierInfo: action.payload,
      };
    case GET_TOTAL_DRUG:
      return {
        ...state,
        totalDrugs: action.payload,
      };
    case GET_STOCK_INFO:
      return {
        ...state,
        stockInfo: action.payload,
      };
    case GET_EXPIRY_ALERT:
      return {
        ...state,
        expiryAlert: action.payload,
      };
    case GET_REORDER_LEVEL:
      return {
        ...state,
        reorderLevel: action.payload,
      };
    case GET_TOP_SALES:
      return {
        ...state,
        topSales: action.payload,
      };
    case GET_STOCK_INFO_STORE:
      return {
        ...state,
        stockInfoStore: action.payload,
      };
    case GET_STOCK_INFO_STORE_SHELF:
      return {
        ...state,
        stockInfoShelf: action.payload,
      };
    case SALES:
      return {
        ...state,
        saleItems: action.payload,
      };

    case RECEIPT_DATA:
      return {
        ...state,
        receiptData: action.payload,
      };
    case PHARM_USER:
      return {
        ...state,
        pharmUsers: action.payload,
      };
    case GET_SUPPLIER_STATEMENT:
      return {
        ...state,
        supplierStatement: action.payload,
      };
    case GET_DRUG_LIST:
      return {
        ...state,
        drugList: action.payload,
      };
    case OUT_OF_STOCK_LIST:
      return {
        ...state,
        outOfStock: action.payload,
      };
    case SUPPLIER_COUNT:
      return {
        ...state,
        supplierCount: action.payload,
      };
    case GET_PURCHASE_ITEM:
      return {
        ...state,
        purchaseItems: action.payload,
      };
    case GET_PHARM_STORE:
      return {
        ...state,
        pharmStore: action.payload,
      };
    case PHARM_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case GET_CLIENT_INFO:
      return {
        ...state,
        clientInfo: action.payload,
      };
    case GET_CLIENT_STATEMENT:
      return {
        ...state,
        clientStatement: action.payload,
      };

    default:
      return state;
  }
};

export default pharmacyReducer;
