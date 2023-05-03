const allModule = {
  records: {
    name: 'Records',
    type: ['Add New Patient', 'Bed Allocation'],
  },
  doctor: {
    name: 'Doctor',
    type: [
      'Patient List',
      'Appointments',
      'Consultations',
      'Lab Results',
      'Video Chat',
    ],
  },
  nurse: {
    name: "Nurse",
    type: [
      "In-Patient Vitals",
      "Drug Schedule",
      "Nursing Requests",
      "Out-Patient Prescriptions",
      "Nursing Report",
    ],
  },
  pharmacy: {
    name: 'Pharmacy',
    type: [
      'Drug Sales',
      'Drug Dispensary',
      'Store Record',
      'Returned Drugs',
      'Manage Suppliers',
      'Drug List',
      'Dashboard',
    ],
  },
  laboratory: {
    name: 'Laboratory',
    type: [
      'Dashboard',
      'Setup Lab Test',
      'Registrations',
      'Client Registrations',
      'Customer Approval',
      'Donations Report',
      'Organization Report',
      'Report Form',
      'Sample Collection',
      'Sample Analysis',
      'Chemical Pathology Analysis',
      'Hematology Analysis',
      'Microbiology Analysis',
      'Radiology Scan',
      'Radiology Analysis',
      'Cardiology Analysis',
      'Doctor Comment',
      // 'Completed Lab Test',
      // 'Print Lab Test',
      'Antibiotics Form',
      'Lab Archive',
      // 'Inventary',
      // 'Track Lab Test',
      // 'Online Lab Requisition',
      // 'Online Lab Analysis',
      // 'Doctor Payment Wallet',
      // 'Generate Bar Code'
    ],
  },
  account: {
    name: 'Account',
    type: [
      'Other Incomes',
      'Create a Client Account',
      'Make Deposit',
      'Record Expenses',
      'Generate Account Report',
      'Opening Balance',
      'Account Statement',
      // "Asset Register",
      // "Rent Register",
      'Create/Edit Services',
      'Setup Account Chart',
      // "Setup Transactions",
      'Cash Handover',
      'Account Review',
      'Purchase Record',
      'Pending Discount Requests',
      'Discount Setup',
    ],
  },
  theater: {
    name: 'Theater',
    type: ['Add New Account Note'],
  },
  admin: {
    name: 'Admin',
    type: ['Create User', 'Manage Users', 'Patients List', 'Settings'],
  },
  reports: {
    name: 'Reports',
    type: [
      'Report Summary',
      'Inventory Overview',
      'Analytics',
      'Daily Sales',
      'Profit',
      'Suppliers Overview',
    ],
  },
  humanResource: {
    name: 'Human Resource',
    type: ['Application', 'Staff Salary'],
  },
  inventory: {
    name: 'Inventory',
    type: [
      'Store Management',
      'Requisition',
      'Manage Suppliers',
      'Purchase Other',
      'Inventory Table',
      'GRN',
      'Goods Transfer Form',
      'Item Description',
      'Manage Suppliers',
    ],
  },
  appointments: {
    name: 'Appointments',
    type: [
      'Bookings',
      'Messages',
      'Integration'
    ]
  }
}

export default allModule
