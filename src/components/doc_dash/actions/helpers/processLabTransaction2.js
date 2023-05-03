import {
  generateReceiptNo,
  // _convertArrOfObjToArr,
} from "../../../utils/helpers";
import store from "../../../../redux/store";
import { apiURL } from "../../../../redux/actions";
import { _postApi } from "../../../../redux/actions/api";
// import { GiConsoleController } from "react-icons/gi";

export const processLabTransaction = (
  patient,
  //   labno,
  grouped,
  singular,
  receiptList,
  cb = (f) => f,
  error = (f) => f
) => {
  generateReceiptNo((rec, receiptNo) => {
    console.log(grouped, grouped.length)
    let patientId = patient.patientHospitalId
      ? patient.patientHospitalId
      : patient.patientId;
    let accountNo = patient.clientAccount;
    const user = store.getState().auth.user;
    // const isHospital = store.getState().facility.info.type === "hospital";
    // console.log(grouped,'<=====+++====', singular, '==============><===========')
    // console.log(
    //   "CHECKMATE ++++++++++++++++++++++++++++++++++++++++++++++ CHECKMATE"
    // );

    // let labNumbers = []
    // _postApi(
    //   `${apiURL()}/lab/client/lab-number`,
    //   {
    //     id: patientId,
    //     accountNo,
    //     labno,
    //   },

    // _postApi(
    //   `${apiURL()}/lab/requests/new`,
    //   {
    //     data: _convertArrOfObjToArr(final),
    //   },

    let transactionsList = [];
    receiptList.forEach((lab) => {
      transactionsList.push({
        transactionType:
          patient.accountType === "Walk-In" ? "insta" : "deposit",
        facilityId: user.facilityId,
        department: lab.department,
        amount: lab.price,
        serviceHead: lab.account,
        modeOfPayment: "",
        source: lab.account,
        destination: "Cash",
        // description: `New Lab Request for account ${patientInfo.clientAccount}`,
        description: lab.description,
        receiptsn: rec,
        receiptno: receiptNo,
        userId: user.id,
        credit: lab.account,
        debit: patientId,
        patientId,
        clientAccount: accountNo,
        status: "",
      });
      // }
    });

    const reqObj = {
      grouped,
      singular,
      transactionsList,
      patient,
    };

    console.log(reqObj);
    _postApi(
      `${apiURL()}/lab/requests/save-new`,
      reqObj,
      (data) => {
        console.log(data);
      },
      (err) => console.log(err)
    );

    //   if (isHospital) {
    //     transactionsList.forEach((trans) => {
    //       _postApi(
    //         `${apiURL()}/transactions/lab-new-service/instant-payment`,
    //         trans,
    //         () => {
    //           // cb();
    //           console.log("success");
    //         },
    //         (err) => {
    //           error(err);
    //         }
    //       );
    //     });
    //   } else {
    //     transactionsList.forEach((trans) => {
    //       _postApi(
    //         `${apiURL()}/transactions/new-service/instant-payment`,
    //         trans,
    //         () => {
    //           // cb();
    //           console.log("success");
    //           // reset();
    //         },
    //         (err) => {
    //           error(err);
    //         }
    //       );
    //     });
    //   }
    //   },
    //   (err) => {
    //     error(err);
    //   }
    // );
    //   },
    //   (err) => {
    //     error(err);
    //   }
    // );
  });

  // if (singular.length) {
  //   let _list = [];
  //   singular.forEach((i) =>
  //     _list.push({
  //       id: patientId,
  //       accountNo: accountNo,
  //       labno: i.booking_no,
  //     })
  //   );

  //   for (let k = 0; k < _list.length; k++) {
  // let currLab = _list[k];
  // _postApi(
  //   `${apiURL()}/lab/client/lab-number`,
  //   currLab,
  //   () => {
  //     console.log("success");
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // );

  // if (k === _list.length - 1) {
  //   for (let l = 0; l < singular.length; l++) {
  //     let _th = { ...singular[l], receiptNo: rec };
  //     // console.log(_th);
  //     _postApi(
  //       `${apiURL()}/lab/requests/new`,
  //       {
  //         data: _convertArrOfObjToArr([_th]),
  //       },
  //       () => {
  //         console.log("success");
  //       },
  //       (err) => {
  //         console.log(err);
  //         // setLoading(false);
  //       }
  //     );

  // if (l === singular.length - 1) {
  //   let transactionsList = [];
  //   for (let h = 0; h < receiptList; h++) {
  //     let item = receiptList[h];
  //     if (item.print_type === "single") {
  //       transactionsList.push({
  //         transactionType:
  //           patient.accountType === "Walk-In" ? "insta" : "deposit",
  //         facilityId: user.facilityId,
  //         department: item.department,
  //         amount: item.price,
  //         serviceHead: item.account,
  //         modeOfPayment: "",
  //         source: item.account,
  //         destination: "Cash",
  //         // description: `New item Request for account ${patientInfo.clientAccount}`,
  //         description: item.description,
  //         receiptsn: rec,
  //         receiptno: receiptNo,
  //         userId: user.id,
  //         credit: totalPerDept[lab.department].acct,
  //         debit: patient.patientHospitalId,
  //         patientId: patient.patientHospitalId,
  //         clientAccount: patient.clientAccount,
  //       });
  //     }
  //   }
  // receiptList.forEach((item) => {

  // });

  //   transactionsList.forEach((trans) => {
  //     _postApi(
  //       `${apiURL()}/transactions/new-service/instant-payment`,
  //       trans,
  //       () => {
  //         console.log("success");
  //         // setLoading(false);
  //         // reset();
  //       },
  //       (err) => {
  //         console.log(err);
  //         // setLoading(false);
  //       }
  //     );
  //   });

  // setMainTxnList(transactionsList);
  //       cb();
  //     }
  //   }
  // }
  //   }
  // }

  // cb();
  //   });
};
