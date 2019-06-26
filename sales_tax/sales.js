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



const calculateSalesTax = function(salesData, taxRates) {
  // Iterate through each object within company sales data
    // calculate the total sales for the company
    // Determine the tax rate for the province for the company
    // Multiply total sales by tax rate for company
    // Store values into keys for the company
}