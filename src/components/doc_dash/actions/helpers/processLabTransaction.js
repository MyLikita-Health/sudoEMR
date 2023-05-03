import {
  generateReceiptNo,
  _convertArrOfObjToArr,
} from '../../../utils/helpers'
import store from '../../../../redux/store'
import { apiURL } from '../../../../redux/actions'
import { _postApi } from '../../../../redux/actions/api'

export const processLabTransaction = (
  patient,
  labList,
  // grouped,
  // singular,
  receiptList,
  cb = (f) => f,
  error = (f) => f,
  // department_groups,
  // singular_groups,
  otherOptions,
  printReceipt = (f) => f,
) => {
  console.log('hhhhhhhhhhhheeeeeeeeeeeerrrrrrrrrrrr', receiptList)
  generateReceiptNo((rec, receiptNo) => {
    let patientId = patient.patientHospitalId
      ? patient.patientHospitalId
      : patient.patientId
    let accountNo = patient.clientAccount
    const user = store.getState().auth.user
    // console.log(patient, '====================================')
    // const isHospital = store.getState().facility.info.type === "hospital";
    // console.log(grouped,'<=====+++====', singular, '==============><===========')
    // console.log(
    //   "CHECKMATE ++++++++++++++++++++++++++++++++++++++++++++++ CHECKMATE"
    // );
    // test,patient_id,facilityId,booking_no,price,percentage,
    // department,test_group,code,status,created_by,receiptNo
    let fullTestList = labList.map((i) => ({ ...i, receiptNo: rec }))
    // ...singular.map((i) => ({ ...i, receiptNo: rec })),

    // console.log("department_g", department_groups);
    // department_groups.forEach((it, i) => {
    //   // console.log(i);
    //   department_groups[i].forEach((j) => {
    //     fullTestList.push({ ...j, receiptNo: rec });
    //   });
    // });
    // Object.keys(singular_groups).forEach((i) => {
    //   singular_groups[i].forEach((j) => {
    //     j.forEach((k) => fullTestList.push({ ...k, receiptNo: rec }));
    //   });
    // });

    // console.log(fullTestList, labList)

    let full2 = []
    let request_id = null
    // list for generating barcode
    // let listForBarcode = []
    let isCorporateAcct = patient.accountType !== 'Family'
    const { discount } = otherOptions
    let totalAmount = fullTestList.reduce((a, b) => a + parseFloat(b.price), 0)
    fullTestList.forEach((i) => {
      let totalDiscountAmount = 0

      if (discount.discountType === 'Fixed') {
        totalDiscountAmount = discount.discountAmount
      } else {
        totalDiscountAmount = totalAmount * (discount.discountAmount / 100)
      }

      full2.push({
        test: i.test,
        patient_id: i.patient_id,
        facilityId: i.facilityId,
        // booking_no: i.booking_no,
        price: i.price,
        percentage: i.percentage,
        department: i.department,
        group: i.group,
        // code: i.code,
        status: i.status,
        userId: i.userId,
        receiptNo: i.receiptNo,
        payment_status: otherOptions.partPayment.enabled
          ? 'pending'
          : 'completed',
        label_type: i.label_type,
        noOfLabels: i.noOfLabels,
        print_type: i.print_type,
        old_price: i.old_price,
        payable_head: patient.payable_head,
        // payable_head: (isCorporateAcct ? patient.payable_head : i.payable_head) || "",
        // payable_head_name: isCorporateAcct? patient.payable_head : i.payable_head_name,
        receivable_head: patient.receivable_head,
        receivable_head_name: (patient.receivable_head_name
          ? patient.receivable_head_name
          : i.receivable_head_name)||"",
        account: i.account,
        account_name: i.account_name,
        patientName: patient.name,
        department_code: i.department_code,
        unit_code: i.unit_code,
        unit_name: i.unit_name,
        unit: i.unit,
        range_from: i.range_from,
        range_to: i.range_to,
        client_type: patient.accountType,
        client_acc: patient.clientAccount,
        discountName: otherOptions.discount.discountName
          ? otherOptions.discount.discountName
          : '',
        discountHead: otherOptions.discount.discountHead
          ? otherOptions.discount.discountHead
          : '',
        discountHeadName: otherOptions.discount.discountHeadName
          ? otherOptions.discount.discountHeadName
          : '',
        approval_status: otherOptions.discount.discountName
          ? 'pending_discount'
          : 'pending',
        totalDiscountAmount: totalDiscountAmount ? totalDiscountAmount : 0,
        group_head: i.group,
        department_head: i.department,
        // request_id: i.request_id
      })
      if (i.request_id) {
        request_id = i.request_id
      }
    })

    if (otherOptions.toBeRemoved && otherOptions.toBeRemoved.length) {
      _postApi(`${apiURL()}/lab/update-test-status`, {
        list: otherOptions.toBeRemoved,
      })
    }

    _postApi(
      `${apiURL()}/lab/requests/new`,
      {
        data: _convertArrOfObjToArr(full2),
        full_data: full2,
        request_id,
        patientInfo: patient,
      },
      async (resp) => {
        console.log("receiptListpppppppppppppppppppppppppppppppppppppp", receiptList)
        // let code = await resp.json()
        let code = resp

        _postApi(`${apiURL()}/lab-receipt/update`, {
          oldReceipt: otherOptions.oldReceiptNo,
          newReceipt: rec,
          patient_id: patientId,
        })

        printReceipt(code.barcode)
        saveTransaction(
          receiptList,
          patientId,
          patient,
          user,
          rec,
          receiptNo,
          otherOptions,
        )
        // if (otherOptions.partPayment.enabled) {
        //   const { amount } = otherOptions.partPayment;
        //   saveDeposit(patient, amount, { rec, receiptNo });
        //   console.log('========================================= calling save deposit', otherOptions)
        // }
      },
      (err) => {
        console.log(err)
        // setLoading(false);
      },
    )

    // console.log(full2)

    // console.log(receiptList, fullTestList)
    // receiptList.forEach(i => {
    //   let testInstance = fullTestList.find(a => a.test === i.test || a.group === i.test)
    //   // console.log(testInstance)
    //   listForBarcode.push({...i, booking_no: testInstance.booking_no})
    //   // if(fullTestList.findIndex(a => a.description === i.description)!==-1){
    //   //   listForBarcode.push({
    //   //     booking_no: i.booking_no, label_type:i.label_type, department:i.department,
    //   //     specimen: i.specimen, noOfLabels: i.noOfLabels, test: i.test
    //   //   })
    //   // }
    // })

    // console.log(full2);
    // let labNoList = []
    // full2.forEach((o) => {
    //   // console.log(o);
    //   if (!labNoList.includes(o.booking_no)) {
    //     labNoList.push(o.booking_no)
    //   }
    // })
    // console.log(labNoList);
    // let completeLabNoList = labNoList.map((i) => ({
    //   id: patientId,
    //   accountNo,
    //   labno: i,
    // }))
    // console.log(completeLabNoList);

    // for (let k = 0; k < completeLabNoList.length; k++) {
    //   let currLab = completeLabNoList[k]
    //   _postApi(
    //     `${apiURL()}/lab/client/lab-number`,
    //     currLab,
    //     () => {
    //       console.log('success')
    //     },
    //     (err) => {
    //       console.log(err)
    //     },
    //   )

    // if (k === completeLabNoList.length - 1) {
    // for (let l = 0; l < singular.length; l++) {
    //   let _th = { ...singular[l], receiptNo: rec };
    // console.log(_th);

    // if (l === singular.length - 1) {

    //   // setMainTxnList(transactionsList);
    //   // cb();
    // }
    // }
    // }
    // }
    // }

    cb()
  })
}

export function saveTransaction(
  receiptList,
  patientId,
  patient,
  user,
  rec,
  receiptNo,
  otherOptions,
) {
  let transactionsList = []
  let isPartment = otherOptions.partPayment && otherOptions.partPayment.enabled
  let totalAmount = receiptList.reduce((a, b) => a + parseInt(b.price), 0)
  let amountPaid = !isPartment ? totalAmount : otherOptions.partPayment && otherOptions.partPayment.amount

  for (let h = 0; h < receiptList.length; h++) {
    let item = receiptList[h]

    // let amount = 0;
    // if (isPartment) {
    //   amount = (parseFloat(item.price) / parseFloat(totalAmount)) * amountPaid;
    // } else {
    //   amount = item.price;
    // }
    // console.log("calling some motherfucking transactions", item);
    // if (item.print_type === "single") {
    transactionsList.push({
      transactionType: patient.accountType === 'Walk-In' ? 'insta' : 'deposit',
      facilityId: user.facilityId,
      department: item.department,
      amount: item.price,
      serviceHead: item.account,
      serviceHeadName: item.account_name,
      modeOfPayment: patient.modeOfPayment,
      source: item.account,
      destination: 'Cash',
      // description: `New item Request for account ${patientInfo.clientAccount}`,
      description: item.description,
      receiptsn: rec,
      receiptno: receiptNo,
      userId: user.id,
      credit: item.account,
      debit: patientId,
      patientId: patientId,
      clientAccount: patient.clientAccount,
      isPartment,
      totalAmount,
      amountPaid: h === receiptList.length-1 ? amountPaid : 0,
      services_list: h === receiptList.length-1 ? receiptList.map(i => i.description).join(", ") : 0,
      txn_status: otherOptions.partPayment && otherOptions.partPayment.enabled ? 'pending' : 'completed',
      payable_head: item.payable_head&&item.payable_head !=="" ? item.payable_head : patient.payable_head,
      payable_head_name: item.payable_head_name,
      receivable_head: item.receivable_head&&item.receivable_head!=="" ? item.receivable_head : patient.receivable_head,
      receivable_head_name: item.receivable_head_name,
    })
    // }
  }

  transactionsList.forEach((trans) => {
    _postApi(
      `${apiURL()}/transactions/new-service/instant-payment`,
      trans,
      () => {
        console.log('success')
        // setLoading(false);
        // reset();
      },
      (err) => {
        console.log(err)
        // setLoading(false);
      },
    )
  })
}

function saveDeposit(patient, amount, receipt) {
  const { rec, receiptNo } = receipt
  const txObj = {
    clientAccount: patient.clientAccount,
    depositAmount: amount,
    modeOfPayment: patient.modeOfPayment,
    source: 'Deposit',
    destination: patient.modeOfPayment,
    receiptsn: rec,
    receiptno: receiptNo,
    description: `Part Payment Deposit`,
    name: patient.fullname,
    accountType: patient.accountType,
    guarantor_name: '',
    guarantor_address: '',
    guarantor_phoneNo: '',
    bankName: '',
  }
  _postApi(
    `${apiURL()}/transactions/deposit`,
    txObj,
    () => {
      console.log('Deposit recorded successfully')
    },
    (err) => {
      console.log('Error depositing', err)
    },
  )
}
