module.exports = function mostProfitableDepartment(salesData) {
    var salesMap = {};
    for (var i = 0; i < salesData.length; i++) {
        const deptSales = salesData[i];
        salesMap[deptSales.department] = 0;
    }
    for (var i = 0; i < salesData.length; i++) {
        const deptSales = salesData[i];
        var curDept = salesMap[deptSales.department];
        curDept += deptSales.sales;
        salesMap[deptSales.department] = curDept;
    }
    let Sales = 0;
    var saleDepartment = "";
    for (const departmentSale in salesMap) {
        const curSalesDept = salesMap[departmentSale];

        if (curSalesDept > Sales) {
            Sales = curSalesDept;
            curDept = departmentSale;
        }
    }
    return curDept;
}