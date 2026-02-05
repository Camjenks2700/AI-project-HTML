const STORAGE_KEY = "form1040Wizard2025";

const SECTIONS = [
  "Header / Filing Status / Dependents",
  "Income (Lines 1–8)",
  "Total Income / Adjustments / AGI (Lines 9–11)",
  "Deductions (Lines 12–14)",
  "Taxable Income (Line 15)",
  "Tax & Credits (Lines 16–24)",
  "Payments (Lines 25–33)",
  "Refund / Amount You Owe (Lines 34–37)",
  "Signature / Third Party Designee"
];

const LINE_ITEMS = [
  {
    line: "Header-Name",
    label: "Taxpayer name (use placeholder)",
    type: "text",
    section: SECTIONS[0],
    schedule: "Taxpayer record",
    notes: "Name as it appears on the return.",
    manual: true
  },
  {
    line: "Header-Spouse",
    label: "Spouse name (if joint)",
    type: "text",
    section: SECTIONS[0],
    schedule: "Taxpayer record",
    notes: "Only for joint returns.",
    manual: true
  },
  {
    line: "Header-Address",
    label: "Mailing address",
    type: "text",
    section: SECTIONS[0],
    schedule: "Taxpayer record",
    notes: "Street, city, state, ZIP.",
    manual: true
  },
  {
    line: "Header-Filing",
    label: "Filing status",
    type: "select",
    options: [
      "Single",
      "Married Filing Jointly",
      "Married Filing Separately",
      "Head of Household",
      "Qualifying Surviving Spouse"
    ],
    section: SECTIONS[0],
    schedule: "Taxpayer record",
    notes: "Choose one status for the entire return.",
    manual: true
  },
  {
    line: "Header-Dependents",
    label: "Number of dependents (count)",
    type: "number",
    section: SECTIONS[0],
    schedule: "Dependent records",
    notes: "Enter the number of dependents you plan to claim.",
    manual: true
  },
  {
    line: "Header-Dependents-List",
    label: "Dependents list (names only, optional)",
    type: "text",
    section: SECTIONS[0],
    schedule: "Dependent records",
    notes: "Optional names or identifiers (no SSNs).",
    manual: true
  },
  {
    line: "1a",
    label: "Wages, salaries, tips",
    type: "number",
    section: SECTIONS[1],
    schedule: "W-2",
    notes: "Total wages from all W-2s.",
    manual: false
  },
  {
    line: "1b",
    label: "Household employee wages not reported on W-2",
    type: "number",
    section: SECTIONS[1],
    schedule: "Household employer records",
    notes: "Cash wages paid to household employees.",
    manual: true
  },
  {
    line: "1c",
    label: "Tip income not reported on W-2",
    type: "number",
    section: SECTIONS[1],
    schedule: "Form 4137",
    notes: "Tips not included on W-2.",
    manual: true
  },
  {
    line: "1d",
    label: "Medicaid waiver payments",
    type: "number",
    section: SECTIONS[1],
    schedule: "Notice 2014-7",
    notes: "Certain Medicaid waiver payments.",
    manual: true
  },
  {
    line: "1e",
    label: "Nontaxable combat pay election",
    type: "number",
    section: SECTIONS[1],
    schedule: "Military records",
    notes: "Enter if electing to include combat pay for credits.",
    manual: true
  },
  {
    line: "1z",
    label: "Total wages and tips",
    type: "number",
    section: SECTIONS[1],
    schedule: "W-2",
    notes: "Sum of lines 1a–1e as applicable.",
    manual: true,
    auto: true
  },
  {
    line: "2a",
    label: "Tax-exempt interest",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-INT",
    notes: "Interest that is exempt from federal tax.",
    manual: false
  },
  {
    line: "2b",
    label: "Taxable interest",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-INT",
    notes: "Taxable interest income.",
    manual: false
  },
  {
    line: "3a",
    label: "Qualified dividends",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-DIV",
    notes: "Qualified dividends eligible for lower rates.",
    manual: false
  },
  {
    line: "3b",
    label: "Ordinary dividends",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-DIV",
    notes: "Total ordinary dividends.",
    manual: false
  },
  {
    line: "4a",
    label: "IRA distributions",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-R",
    notes: "Total IRA distributions.",
    manual: false
  },
  {
    line: "4b",
    label: "Taxable IRA distributions",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-R",
    notes: "Taxable portion of IRA distributions.",
    manual: true
  },
  {
    line: "5a",
    label: "Pensions and annuities",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-R",
    notes: "Total pension/annuity distributions.",
    manual: false
  },
  {
    line: "5b",
    label: "Taxable pensions and annuities",
    type: "number",
    section: SECTIONS[1],
    schedule: "1099-R",
    notes: "Taxable portion of pensions/annuities.",
    manual: true
  },
  {
    line: "6a",
    label: "Social security benefits",
    type: "number",
    section: SECTIONS[1],
    schedule: "SSA-1099",
    notes: "Total social security benefits.",
    manual: false
  },
  {
    line: "6b",
    label: "Taxable social security benefits",
    type: "number",
    section: SECTIONS[1],
    schedule: "SSA-1099",
    notes: "Taxable portion of social security.",
    manual: true
  },
  {
    line: "7",
    label: "Capital gain or (loss)",
    type: "number",
    section: SECTIONS[1],
    schedule: "Schedule D",
    notes: "Net capital gain or loss.",
    manual: true
  },
  {
    line: "8",
    label: "Other income",
    type: "number",
    section: SECTIONS[1],
    schedule: "Schedule 1",
    notes: "Business income, rental, unemployment, etc.",
    manual: true
  },
  {
    line: "9",
    label: "Total income",
    type: "number",
    section: SECTIONS[2],
    schedule: "Form 1040",
    notes: "Sum of income lines.",
    manual: true,
    auto: true
  },
  {
    line: "10",
    label: "Adjustments to income",
    type: "number",
    section: SECTIONS[2],
    schedule: "Schedule 1",
    notes: "Student loan interest, IRA deduction, etc.",
    manual: true
  },
  {
    line: "11",
    label: "Adjusted gross income (AGI)",
    type: "number",
    section: SECTIONS[2],
    schedule: "Form 1040",
    notes: "Total income minus adjustments.",
    manual: true,
    auto: true
  },
  {
    line: "12-Standard-Method",
    label: "Standard deduction method",
    type: "select",
    options: ["Standard deduction (auto)", "Itemized deductions (enter amount)"],
    section: SECTIONS[3],
    schedule: "Form 1040",
    notes: "Choose standard deduction or enter itemized deductions manually.",
    manual: true
  },
  {
    line: "12",
    label: "Standard or itemized deductions",
    type: "number",
    section: SECTIONS[3],
    schedule: "Schedule A",
    notes: "Auto-filled with the standard deduction unless itemized is selected.",
    manual: true
  },
  {
    line: "13",
    label: "Qualified business income deduction",
    type: "number",
    section: SECTIONS[3],
    schedule: "Form 8995/8995-A",
    notes: "QBI deduction from qualified businesses.",
    manual: true
  },
  {
    line: "14",
    label: "Total deductions",
    type: "number",
    section: SECTIONS[3],
    schedule: "Form 1040",
    notes: "Sum of deductions lines 12–13.",
    manual: true,
    auto: true
  },
  {
    line: "15",
    label: "Taxable income",
    type: "number",
    section: SECTIONS[4],
    schedule: "Form 1040",
    notes: "AGI minus total deductions.",
    manual: true,
    auto: true
  },
  {
    line: "16",
    label: "Tax",
    type: "number",
    section: SECTIONS[5],
    schedule: "Tax tables/Worksheet",
    notes: "Auto-estimated from taxable income using 2024 brackets (study tool).",
    manual: true,
    auto: true
  },
  {
    line: "17",
    label: "Amount from Schedule 2",
    type: "number",
    section: SECTIONS[5],
    schedule: "Schedule 2",
    notes: "Additional taxes from Schedule 2.",
    manual: true
  },
  {
    line: "18",
    label: "Total tax",
    type: "number",
    section: SECTIONS[5],
    schedule: "Form 1040",
    notes: "Sum of lines 16 and 17.",
    manual: true,
    auto: true
  },
  {
    line: "19",
    label: "Child tax credit or credit for other dependents",
    type: "number",
    section: SECTIONS[5],
    schedule: "Schedule 8812",
    notes: "Nonrefundable credits for dependents.",
    manual: true
  },
  {
    line: "20",
    label: "Amount from Schedule 3",
    type: "number",
    section: SECTIONS[5],
    schedule: "Schedule 3",
    notes: "Other nonrefundable credits.",
    manual: true
  },
  {
    line: "21",
    label: "Total credits",
    type: "number",
    section: SECTIONS[5],
    schedule: "Form 1040",
    notes: "Sum of credits lines 19–20.",
    manual: true,
    auto: true
  },
  {
    line: "22",
    label: "Tax after credits",
    type: "number",
    section: SECTIONS[5],
    schedule: "Form 1040",
    notes: "Line 18 minus line 21.",
    manual: true,
    auto: true
  },
  {
    line: "23",
    label: "Other taxes",
    type: "number",
    section: SECTIONS[5],
    schedule: "Schedule 2",
    notes: "Self-employment tax, additional taxes.",
    manual: true
  },
  {
    line: "24",
    label: "Total tax",
    type: "number",
    section: SECTIONS[5],
    schedule: "Form 1040",
    notes: "Line 22 plus line 23.",
    manual: true,
    auto: true
  },
  {
    line: "25a",
    label: "Federal income tax withheld from W-2",
    type: "number",
    section: SECTIONS[6],
    schedule: "W-2",
    notes: "Federal withholding from W-2s.",
    manual: false
  },
  {
    line: "25b",
    label: "Federal income tax withheld from 1099",
    type: "number",
    section: SECTIONS[6],
    schedule: "1099 series",
    notes: "Withholding reported on 1099 forms.",
    manual: false
  },
  {
    line: "25c",
    label: "Federal income tax withheld from other forms",
    type: "number",
    section: SECTIONS[6],
    schedule: "Other tax forms",
    notes: "Other withholding (e.g., 2439).",
    manual: true
  },
  {
    line: "25d",
    label: "Total federal income tax withheld",
    type: "number",
    section: SECTIONS[6],
    schedule: "Form 1040",
    notes: "Sum of lines 25a–25c.",
    manual: true,
    auto: true
  },
  {
    line: "26",
    label: "Estimated tax payments",
    type: "number",
    section: SECTIONS[6],
    schedule: "Estimated tax records",
    notes: "Quarterly estimated payments.",
    manual: true
  },
  {
    line: "27",
    label: "Earned income credit (EIC)",
    type: "number",
    section: SECTIONS[6],
    schedule: "EIC worksheet",
    notes: "Refundable earned income credit.",
    manual: true
  },
  {
    line: "28",
    label: "Additional child tax credit",
    type: "number",
    section: SECTIONS[6],
    schedule: "Schedule 8812",
    notes: "Refundable child tax credit.",
    manual: true
  },
  {
    line: "29",
    label: "American opportunity credit",
    type: "number",
    section: SECTIONS[6],
    schedule: "Form 8863",
    notes: "Refundable portion of education credit.",
    manual: true
  },
  {
    line: "30",
    label: "Other payments/credits",
    type: "number",
    section: SECTIONS[6],
    schedule: "Schedule 3",
    notes: "Other refundable credits.",
    manual: true
  },
  {
    line: "31",
    label: "Total payments",
    type: "number",
    section: SECTIONS[6],
    schedule: "Form 1040",
    notes: "Sum of payments lines 25d–30.",
    manual: true,
    auto: true
  },
  {
    line: "32",
    label: "Amount paid with extension",
    type: "number",
    section: SECTIONS[6],
    schedule: "Extension records",
    notes: "Payments sent with extension.",
    manual: true
  },
  {
    line: "33",
    label: "Total payments and credits",
    type: "number",
    section: SECTIONS[6],
    schedule: "Form 1040",
    notes: "Line 31 plus line 32.",
    manual: true,
    auto: true
  },
  {
    line: "34",
    label: "Overpaid (refund amount)",
    type: "number",
    section: SECTIONS[7],
    schedule: "Form 1040",
    notes: "Payments minus total tax.",
    manual: true,
    auto: true
  },
  {
    line: "35a",
    label: "Amount of refund",
    type: "number",
    section: SECTIONS[7],
    schedule: "Form 1040",
    notes: "Refund you want issued.",
    manual: true,
    auto: true
  },
  {
    line: "35b",
    label: "Routing number",
    type: "text",
    section: SECTIONS[7],
    schedule: "Bank information",
    notes: "Bank routing number for direct deposit.",
    manual: true
  },
  {
    line: "35c",
    label: "Account number",
    type: "text",
    section: SECTIONS[7],
    schedule: "Bank information",
    notes: "Bank account number for direct deposit.",
    manual: true
  },
  {
    line: "35d",
    label: "Account type",
    type: "select",
    options: ["Checking", "Savings"],
    section: SECTIONS[7],
    schedule: "Bank information",
    notes: "Select the account type.",
    manual: true
  },
  {
    line: "36",
    label: "Amount you owe",
    type: "number",
    section: SECTIONS[7],
    schedule: "Form 1040",
    notes: "Total tax minus payments.",
    manual: true,
    auto: true
  },
  {
    line: "37",
    label: "Estimated tax penalty",
    type: "number",
    section: SECTIONS[7],
    schedule: "Form 2210",
    notes: "Penalty for underpayment if applicable.",
    manual: true
  },
  {
    line: "Sign-Primary",
    label: "Primary signature (type name)",
    type: "text",
    section: SECTIONS[8],
    schedule: "Signature",
    notes: "Typed name indicates signature for study tool.",
    manual: true
  },
  {
    line: "Sign-Date",
    label: "Signature date",
    type: "text",
    section: SECTIONS[8],
    schedule: "Signature",
    notes: "Date of signing (MM/DD/YYYY).",
    manual: true
  },
  {
    line: "Sign-Phone",
    label: "Best daytime phone",
    type: "text",
    section: SECTIONS[8],
    schedule: "Contact info",
    notes: "Optional phone number.",
    manual: true
  },
  {
    line: "Sign-Email",
    label: "Email address",
    type: "text",
    section: SECTIONS[8],
    schedule: "Contact info",
    notes: "Optional email address.",
    manual: true
  },
  {
    line: "Sign-ThirdParty",
    label: "Third-party designee (yes/no)",
    type: "select",
    options: ["No", "Yes"],
    section: SECTIONS[8],
    schedule: "Third party designee",
    notes: "If yes, complete name, phone, and PIN.",
    manual: true
  },
  {
    line: "Sign-Designee-Name",
    label: "Designee name",
    type: "text",
    section: SECTIONS[8],
    schedule: "Third party designee",
    notes: "Name of designee if selected.",
    manual: true
  },
  {
    line: "Sign-Designee-Phone",
    label: "Designee phone",
    type: "text",
    section: SECTIONS[8],
    schedule: "Third party designee",
    notes: "Phone of designee.",
    manual: true
  },
  {
    line: "Sign-Designee-PIN",
    label: "Designee PIN",
    type: "text",
    section: SECTIONS[8],
    schedule: "Third party designee",
    notes: "5-digit PIN.",
    manual: true
  }
];

const STANDARD_DEDUCTIONS = {
  Single: 14600,
  "Married Filing Jointly": 29200,
  "Married Filing Separately": 14600,
  "Head of Household": 21900,
  "Qualifying Surviving Spouse": 29200
};

const TAX_BRACKETS = {
  Single: [
    { upTo: 11600, rate: 0.1 },
    { upTo: 47150, rate: 0.12 },
    { upTo: 100525, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243725, rate: 0.32 },
    { upTo: 609350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 }
  ],
  "Married Filing Jointly": [
    { upTo: 23200, rate: 0.1 },
    { upTo: 94300, rate: 0.12 },
    { upTo: 201050, rate: 0.22 },
    { upTo: 383900, rate: 0.24 },
    { upTo: 487450, rate: 0.32 },
    { upTo: 731200, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 }
  ],
  "Married Filing Separately": [
    { upTo: 11600, rate: 0.1 },
    { upTo: 47150, rate: 0.12 },
    { upTo: 100525, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243725, rate: 0.32 },
    { upTo: 365600, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 }
  ],
  "Head of Household": [
    { upTo: 16550, rate: 0.1 },
    { upTo: 63100, rate: 0.12 },
    { upTo: 100500, rate: 0.22 },
    { upTo: 191950, rate: 0.24 },
    { upTo: 243700, rate: 0.32 },
    { upTo: 609350, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 }
  ],
  "Qualifying Surviving Spouse": [
    { upTo: 23200, rate: 0.1 },
    { upTo: 94300, rate: 0.12 },
    { upTo: 201050, rate: 0.22 },
    { upTo: 383900, rate: 0.24 },
    { upTo: 487450, rate: 0.32 },
    { upTo: 731200, rate: 0.35 },
    { upTo: Infinity, rate: 0.37 }
  ]
};

const state = {
  values: {},
  currentIndex: 0
};

const cardContainer = document.getElementById("cardContainer");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const stepCounter = document.getElementById("stepCounter");
const lineHint = document.getElementById("lineHint");
const progressBar = document.getElementById("progressBar");
const sectionList = document.getElementById("sectionList");
const jumpInput = document.getElementById("jumpInput");
const jumpBtn = document.getElementById("jumpBtn");
const formView = document.getElementById("formView");
const formViewBtn = document.getElementById("formViewBtn");
const closeFormView = document.getElementById("closeFormView");
const summaryBody = document.getElementById("summaryBody");
const exportJson = document.getElementById("exportJson");
const exportCsv = document.getElementById("exportCsv");
const loadDemo = document.getElementById("loadDemo");
const resetAll = document.getElementById("resetAll");

const modal = document.getElementById("explainModal");
const modalTitle = document.getElementById("modalTitle");
const modalExplanation = document.getElementById("modalExplanation");
const modalMistakes = document.getElementById("modalMistakes");
const modalSource = document.getElementById("modalSource");
const closeModal = document.getElementById("closeModal");
const copyPrompt = document.getElementById("copyPrompt");
const copyStatus = document.getElementById("copyStatus");

function loadState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return;
  }
  try {
    const parsed = JSON.parse(stored);
    state.values = parsed.values || {};
    state.currentIndex = parsed.currentIndex || 0;
    recalculateDerivedValues();
  } catch (error) {
    console.warn("Failed to parse saved state", error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      values: state.values,
      currentIndex: state.currentIndex
    })
  );
}

function getValue(line) {
  return state.values[line] ?? "";
}

function setValue(line, value) {
  state.values[line] = value;
  recalculateDerivedValues();
  saveState();
}

function parseAmount(value) {
  if (value === null || value === undefined || value === "") {
    return 0;
  }
  const normalized = String(value).replace(/,/g, "");
  const parsed = Number.parseFloat(normalized);
  return Number.isNaN(parsed) ? 0 : parsed;
}

function formatAmount(value) {
  if (!Number.isFinite(value)) {
    return "";
  }
  return value.toFixed(2).replace(/\.00$/, "");
}

function hasAnyValue(lines) {
  return lines.some((line) => {
    const value = getValue(line);
    return value !== "" && value !== null && value !== undefined;
  });
}

function setDerivedValue(line, value) {
  state.values[line] = value;
}

function getStandardDeduction(status) {
  return STANDARD_DEDUCTIONS[status] ?? 0;
}

function calculateTax(taxableIncome, status) {
  const brackets = TAX_BRACKETS[status];
  if (!brackets || taxableIncome <= 0) {
    return 0;
  }
  let remaining = taxableIncome;
  let lastCap = 0;
  let tax = 0;
  brackets.forEach((bracket) => {
    const cap = bracket.upTo;
    if (remaining <= 0) {
      return;
    }
    const taxableAtRate = Math.min(remaining, cap - lastCap);
    if (taxableAtRate > 0) {
      tax += taxableAtRate * bracket.rate;
      remaining -= taxableAtRate;
      lastCap = cap;
    }
  });
  return tax;
}

function recalculateDerivedValues() {
  const filingStatus = getValue("Header-Filing");
  const standardMethod =
    getValue("12-Standard-Method") || "Standard deduction (auto)";
  if (!getValue("12-Standard-Method")) {
    setDerivedValue("12-Standard-Method", standardMethod);
  }

  const useStandardDeduction = standardMethod === "Standard deduction (auto)";
  if (useStandardDeduction) {
    const deductionAmount = getStandardDeduction(filingStatus);
    setDerivedValue(
      "12",
      deductionAmount ? formatAmount(deductionAmount) : ""
    );
  }

  const wagesSources = ["1a", "1b", "1c", "1d", "1e"];
  const wagesTotal = wagesSources.reduce(
    (sum, line) => sum + parseAmount(getValue(line)),
    0
  );
  setDerivedValue(
    "1z",
    hasAnyValue(wagesSources) ? formatAmount(wagesTotal) : ""
  );

  const incomeSources = ["1z", "2b", "3b", "4b", "5b", "6b", "7", "8"];
  const totalIncome = incomeSources.reduce(
    (sum, line) => sum + parseAmount(getValue(line)),
    0
  );
  setDerivedValue(
    "9",
    hasAnyValue(incomeSources) ? formatAmount(totalIncome) : ""
  );

  const adjustments = parseAmount(getValue("10"));
  const agi = parseAmount(getValue("9")) - adjustments;
  setDerivedValue(
    "11",
    hasAnyValue(["9", "10"]) ? formatAmount(Math.max(0, agi)) : ""
  );

  const totalDeductions =
    parseAmount(getValue("12")) + parseAmount(getValue("13"));
  setDerivedValue(
    "14",
    hasAnyValue(["12", "13"]) ? formatAmount(totalDeductions) : ""
  );

  const taxableIncome =
    parseAmount(getValue("11")) - parseAmount(getValue("14"));
  setDerivedValue(
    "15",
    hasAnyValue(["11", "14"])
      ? formatAmount(Math.max(0, taxableIncome))
      : ""
  );

  const taxAmount = calculateTax(
    parseAmount(getValue("15")),
    filingStatus
  );
  setDerivedValue(
    "16",
    hasAnyValue(["15"]) && filingStatus ? formatAmount(taxAmount) : ""
  );

  const totalTax = parseAmount(getValue("16")) + parseAmount(getValue("17"));
  setDerivedValue(
    "18",
    hasAnyValue(["16", "17"]) ? formatAmount(totalTax) : ""
  );

  const totalCredits =
    parseAmount(getValue("19")) + parseAmount(getValue("20"));
  setDerivedValue(
    "21",
    hasAnyValue(["19", "20"]) ? formatAmount(totalCredits) : ""
  );

  const taxAfterCredits =
    parseAmount(getValue("18")) - parseAmount(getValue("21"));
  setDerivedValue(
    "22",
    hasAnyValue(["18", "21"])
      ? formatAmount(Math.max(0, taxAfterCredits))
      : ""
  );

  const totalTaxWithOther =
    parseAmount(getValue("22")) + parseAmount(getValue("23"));
  setDerivedValue(
    "24",
    hasAnyValue(["22", "23"]) ? formatAmount(totalTaxWithOther) : ""
  );

  const totalWithheld =
    parseAmount(getValue("25a")) +
    parseAmount(getValue("25b")) +
    parseAmount(getValue("25c"));
  setDerivedValue(
    "25d",
    hasAnyValue(["25a", "25b", "25c"]) ? formatAmount(totalWithheld) : ""
  );

  const totalPayments =
    parseAmount(getValue("25d")) +
    parseAmount(getValue("26")) +
    parseAmount(getValue("27")) +
    parseAmount(getValue("28")) +
    parseAmount(getValue("29")) +
    parseAmount(getValue("30"));
  setDerivedValue(
    "31",
    hasAnyValue(["25d", "26", "27", "28", "29", "30"])
      ? formatAmount(totalPayments)
      : ""
  );

  const totalPaymentsCredits =
    parseAmount(getValue("31")) + parseAmount(getValue("32"));
  setDerivedValue(
    "33",
    hasAnyValue(["31", "32"]) ? formatAmount(totalPaymentsCredits) : ""
  );

  const overpaid =
    parseAmount(getValue("33")) - parseAmount(getValue("24"));
  const refundAmount = Math.max(0, overpaid);
  const amountOwed = Math.max(0, -overpaid);
  setDerivedValue(
    "34",
    hasAnyValue(["33", "24"]) ? formatAmount(refundAmount) : ""
  );
  setDerivedValue(
    "35a",
    hasAnyValue(["34"]) ? formatAmount(refundAmount) : ""
  );
  setDerivedValue(
    "36",
    hasAnyValue(["33", "24"]) ? formatAmount(amountOwed) : ""
  );
}

function renderSections() {
  sectionList.innerHTML = "";
  SECTIONS.forEach((section, index) => {
    const li = document.createElement("li");
    li.textContent = section;
    if (LINE_ITEMS[state.currentIndex].section === section) {
      li.classList.add("active");
    }
    sectionList.appendChild(li);
  });
}

function buildExplanation(item) {
  const explanation = item.notes || "Enter the amount that belongs on this line for 2025.";
  return `${explanation} Use source documents and worksheets tied to ${item.schedule || "your records"}. Review the IRS instructions for specifics and keep backup documents for audit support.`;
}

function buildMistakes(item) {
  const base = [
    "Mixing taxable and nontaxable amounts.",
    "Forgetting to include all documents for the year.",
    "Using last year rules without checking updates.",
    "Not reconciling totals with schedules or worksheets."
  ];
  if (item.manual) {
    base.unshift("Skipping the required worksheet or schedule.");
  }
  return base.slice(0, 4);
}

function renderCard() {
  cardContainer.innerHTML = "";
  const item = LINE_ITEMS[state.currentIndex];
  const card = document.createElement("div");
  card.className = "card";

  const header = document.createElement("div");
  header.className = "card-header";
  const title = document.createElement("h2");
  title.textContent = `${item.line.includes("Header") || item.line.includes("Sign") ? "" : "Line "}${item.line} — ${item.label}`;
  header.appendChild(title);
  if (item.manual) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "Simplified/Manual";
    header.appendChild(badge);
  }
  if (item.auto) {
    const badge = document.createElement("span");
    badge.className = "badge";
    badge.textContent = "Auto-calculated";
    header.appendChild(badge);
  }

  const inputRow = document.createElement("div");
  inputRow.className = "input-row";
  const label = document.createElement("label");
  label.setAttribute("for", "lineInput");
  label.textContent = item.notes;
  inputRow.appendChild(label);

  let input;
  if (item.type === "select") {
    input = document.createElement("select");
    item.options.forEach((optionValue) => {
      const option = document.createElement("option");
      option.value = optionValue;
      option.textContent = optionValue;
      input.appendChild(option);
    });
  } else {
    input = document.createElement("input");
    input.type = item.type;
    if (item.type === "number") {
      input.step = "0.01";
      input.min = "0";
    }
  }
  input.id = "lineInput";
  input.value = getValue(item.line);
  input.addEventListener("input", (event) => {
    setValue(item.line, event.target.value);
  });

  const standardMethod = getValue("12-Standard-Method");
  const isStandardDeduction = standardMethod === "Standard deduction (auto)";
  if (item.line === "12") {
    input.disabled = isStandardDeduction;
  }
  if (item.auto) {
    input.disabled = true;
  }

  inputRow.appendChild(input);
  if (item.line === "12" && isStandardDeduction) {
    const helper = document.createElement("p");
    helper.className = "helper";
    helper.textContent = "Auto-filled from the filing status standard deduction.";
    inputRow.appendChild(helper);
  }
  if (item.auto) {
    const helper = document.createElement("p");
    helper.className = "helper";
    helper.textContent = "This line updates automatically based on previous entries.";
    inputRow.appendChild(helper);
  }

  const actions = document.createElement("div");
  actions.className = "card-actions";
  const explainBtn = document.createElement("button");
  explainBtn.className = "secondary";
  explainBtn.textContent = "Explain";
  explainBtn.addEventListener("click", () => openModal(item));
  actions.appendChild(explainBtn);

  card.appendChild(header);
  card.appendChild(inputRow);
  card.appendChild(actions);
  cardContainer.appendChild(card);

  stepCounter.textContent = `Step ${state.currentIndex + 1} of ${LINE_ITEMS.length}`;
  lineHint.textContent = item.section;
  progressBar.style.width = `${((state.currentIndex + 1) / LINE_ITEMS.length) * 100}%`;
  prevBtn.disabled = state.currentIndex === 0;
  nextBtn.disabled = state.currentIndex === LINE_ITEMS.length - 1;
  renderSections();
}

function openModal(item) {
  modalTitle.textContent = `${item.line} — ${item.label}`;
  modalExplanation.textContent = buildExplanation(item);
  modalMistakes.innerHTML = "";
  buildMistakes(item).forEach((mistake) => {
    const li = document.createElement("li");
    li.textContent = mistake;
    modalMistakes.appendChild(li);
  });
  modalSource.textContent = item.schedule || "Your records";
  copyStatus.textContent = "";
  modal.classList.remove("hidden");

  copyPrompt.onclick = () => copyStudyPrompt(item);
}

function closeModalWindow() {
  modal.classList.add("hidden");
}

function copyStudyPrompt(item) {
  const filingStatus = getValue("Header-Filing") || "(not set)";
  const value = getValue(item.line) || "(blank)";
  const prompt = `You are ChatGPT. Explain how to fill out Form 1040 line ${item.line} (${item.label}) for tax year 2025.\n\nCurrent entered value: ${value}\nFiling status: ${filingStatus}\n\nPlease cover: (1) how to calculate this line, (2) what documents feed it, (3) which schedules/worksheets apply, and (4) common mistakes to avoid. Ask clarifying questions if information is missing.`;

  navigator.clipboard.writeText(prompt).then(
    () => {
      copyStatus.textContent = "Prompt copied to clipboard.";
    },
    () => {
      copyStatus.textContent = "Unable to copy. Please copy manually.";
    }
  );
}

function goToIndex(index) {
  if (index < 0 || index >= LINE_ITEMS.length) {
    return;
  }
  state.currentIndex = index;
  saveState();
  renderCard();
}

function handleJump() {
  const query = jumpInput.value.trim().toLowerCase();
  if (!query) {
    return;
  }
  const index = LINE_ITEMS.findIndex(
    (item) => item.line.toLowerCase() === query || item.label.toLowerCase().includes(query)
  );
  if (index >= 0) {
    goToIndex(index);
    jumpInput.value = "";
  } else {
    alert("Line not found. Try a line number like 25a.");
  }
}

function renderSummary() {
  summaryBody.innerHTML = "";
  LINE_ITEMS.forEach((item) => {
    const row = document.createElement("tr");
    const value = getValue(item.line);
    if (!value) {
      row.classList.add("blank");
    }

    const lineCell = document.createElement("td");
    lineCell.textContent = item.line;
    const labelCell = document.createElement("td");
    labelCell.textContent = item.label;
    const valueCell = document.createElement("td");
    valueCell.textContent = value || "Blank";
    const notesCell = document.createElement("td");
    notesCell.textContent = item.notes;

    row.appendChild(lineCell);
    row.appendChild(labelCell);
    row.appendChild(valueCell);
    row.appendChild(notesCell);
    summaryBody.appendChild(row);
  });
}

function exportData(format) {
  const data = LINE_ITEMS.map((item) => ({
    line: item.line,
    label: item.label,
    value: getValue(item.line) || "",
    section: item.section
  }));

  if (format === "json") {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    downloadBlob(blob, "form1040_2025_data.json");
    return;
  }

  const header = "line,label,value,section";
  const rows = data.map(
    (row) =>
      `${csvEscape(row.line)},${csvEscape(row.label)},${csvEscape(row.value)},${csvEscape(row.section)}`
  );
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv" });
  downloadBlob(blob, "form1040_2025_data.csv");
}

function csvEscape(value) {
  if (value === null || value === undefined) {
    return "";
  }
  const text = String(value);
  if (text.includes(",") || text.includes("\n") || text.includes('"')) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function loadDemoData() {
  state.values = {
    "Header-Name": "Alex Example",
    "Header-Filing": "Single",
    "Header-Dependents": "0",
    "12-Standard-Method": "Standard deduction (auto)",
    "1a": "65000",
    "2b": "120",
    "3b": "75",
    "7": "500",
    "8": "0",
    "10": "1500",
    "25a": "7200",
    "Sign-Primary": "Alex Example"
  };
  recalculateDerivedValues();
  saveState();
  renderCard();
}

function resetData() {
  const confirmed = window.confirm("Clear all saved data? This cannot be undone.");
  if (!confirmed) {
    return;
  }
  state.values = {};
  state.currentIndex = 0;
  recalculateDerivedValues();
  saveState();
  renderCard();
  formView.classList.add("hidden");
}

prevBtn.addEventListener("click", () => goToIndex(state.currentIndex - 1));
nextBtn.addEventListener("click", () => goToIndex(state.currentIndex + 1));

jumpBtn.addEventListener("click", handleJump);
jumpInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleJump();
  }
});

formViewBtn.addEventListener("click", () => {
  renderSummary();
  formView.classList.remove("hidden");
  formView.scrollIntoView({ behavior: "smooth" });
});

closeFormView.addEventListener("click", () => {
  formView.classList.add("hidden");
});

exportJson.addEventListener("click", () => exportData("json"));
exportCsv.addEventListener("click", () => exportData("csv"));

loadDemo.addEventListener("click", loadDemoData);
resetAll.addEventListener("click", resetData);

closeModal.addEventListener("click", closeModalWindow);
modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModalWindow();
  }
});

loadState();
recalculateDerivedValues();
renderCard();
