const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  },
 
];

const calculateTotalSales = function(salesArray) {
  let total = 0;
  for (const sales of salesArray) {
    if (isNaN(sales) === false) {
      total += parseInt(sales);
    }
  }
  return total;
};

const calculateSalesTax = function(salesData, taxRates) {
  const totalSalesAndTaxes = new Object;
  let totalSales = 0;
  let totalTaxes = 0;

  // Iterate through each object within company sales data
  for (const company of salesData) {
    // Store values into keys for the company
    // calculate the total sales for the company
    totalSales = calculateTotalSales(company.sales);
    // Determine the tax rate for the province for the company
    // Multiply total sales by tax rate for company
    totalTaxes = totalSales * taxRates[company.province];
    // Check whether the current company already exists in the object
    if (!totalSalesAndTaxes[company.name]) {
      // Store total sales into a new object for the total sales object per company
      totalSalesAndTaxes[company.name] = {
        "totalSales": totalSales,
        "totalTaxes": totalTaxes
      };
      // If current company already has been recorded. Add new values to the total
    } else {
      totalSalesAndTaxes[company.name].totalSales += totalSales;
      totalSalesAndTaxes[company.name].totalTaxes += totalTaxes;
    }
  }
  return totalSalesAndTaxes;
};



console.log(calculateSalesTax(companySalesData, salesTaxRates));