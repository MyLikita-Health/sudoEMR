import { REVENUEACCHEADS } from "../actions/actionTypes";
import {
  CREATE_ACC_HEAD,
  CREATE_ACC_HEAD_LOADING,
  GET_ACC_HEAD_LOADING,
  GET_ACC_HEAD,
  GET_REV_ACC_HEAD,
  GETTING_TOTAL_SALES_BY_USER,
  GET_TOTAL_SALES_BY_USER,
  GET_AMOUNT_HANDEDOVER,
  GET_AMOUNT_RECEIVED,
  GET_EXPENSES_ACC_HEAD_LOADING,
  GET_EXPENSES_ACC_HEAD,
  GET_GENERAL_ACC_REPORT_LOADING,
  GET_GENERAL_ACC_REPORT,
  GET_EXPENDITURE_ACC_REPORT,
  GET_REVENUE_ACC_REPORT,
  GETTING_PATIENT_ACC_STMT,
  GET_PATIENT_ACC_STMT,
  GET_ITEM_HEAD,
  NEW_ITEM_DESCRIPTION,
} from "../actions/types";

const initialState = {
  accHeads: [],
  revAccHeads: [],
  expensesHeads: [],
  generalAccReport: [],
  revenueReport: [],
  expenditureReport: [],
  patientAccStmt: [],
  totalSales: {
    totalSalesByUser: 0,
    amountReceived: 0,
    amountHandedover: 0,
  },
  loadingAccHead: false,
  creatingAccHead: false,
  expensesHeadsLoading: false,
  loadingTotalSalesByUser: false,
  generalAccReportLoading: false,
  patientAccStmtLoading: false,
  itemHead: [],
  itemDescription: [],
  revenueAccHeads:[],
  
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ACC_HEAD_LOADING:
      return {
        ...state,
        creatingAccHead: !state.creatingAccHead,
      };
    case CREATE_ACC_HEAD:
      return {
        ...state,
        accHeads: [...state.accHeads, action.payload],
      };
    case GET_ACC_HEAD_LOADING:
      return {
        ...state,
        loadingAccHead: !state.loadingAccHead,
      };
    case GET_ACC_HEAD:
      return {
        ...state,
        accHeads: action.payload,
      };
    case GET_REV_ACC_HEAD:
      return {
        ...state,
        revAccHeads: action.payload,
      };
    case GET_EXPENSES_ACC_HEAD_LOADING:
      return {
        ...state,
        expensesHeadsLoading: !state.expensesHeadsLoading,
      };
    case GET_EXPENSES_ACC_HEAD:
      return {
        ...state,
        expensesHeads: action.payload,
      };
    case GETTING_TOTAL_SALES_BY_USER:
      return {
        ...state,
        loadingTotalSalesByUser: !state.loadingTotalSalesByUser,
      };
    case GET_TOTAL_SALES_BY_USER:
      return {
        ...state,
        totalSales: {
          ...state.totalSales,
          totalSalesByUser: action.payload.totalSales,
          date: action.payload.date,
        },
      };
    case GET_AMOUNT_HANDEDOVER:
      return {
        ...state,
        totalSales: {
          ...state.totalSales,
          amountHandedover: action.payload.amountHandedover,
        },
      };
    case GET_AMOUNT_RECEIVED:
      return {
        ...state,
        totalSales: {
          ...state.totalSales,
          amountReceived: action.payload.amountReceived,
        },
      };
    case GET_GENERAL_ACC_REPORT_LOADING:
      return {
        ...state,
        generalAccReportLoading: !state.generalAccReportLoading,
      };
    case GET_GENERAL_ACC_REPORT:
      return {
        ...state,
        generalAccReport: action.payload,
      };
    case GET_EXPENDITURE_ACC_REPORT:
      return {
        ...state,
        expenditureReport: action.payload,
      };
    case GET_REVENUE_ACC_REPORT:
      return {
        ...state,
        revenueReport: action.payload,
      };

    case GETTING_PATIENT_ACC_STMT:
      return {
        ...state,
        patientAccStmtLoading: !state.patientAccStmtLoading,
      };

    case GET_PATIENT_ACC_STMT:
      return {
        ...state,
        patientAccStmt: action.payload,
      };
    case GET_ITEM_HEAD:
      return {
        ...state,
        itemHead: action.payload,
      };
    case NEW_ITEM_DESCRIPTION:
      return {
        ...state,
        itemDescription: [...state.itemDescription, action.payload],
      };
    case REVENUEACCHEADS :
      return {
        ...state,
        revenueAccHeads:action.payload,
      }
    default:
      return state;
  }
};

export default transactionsReducer;
