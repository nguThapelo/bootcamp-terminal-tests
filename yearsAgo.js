module.exports = function yearsAgo(year) {
    const yearNo = new Date();
    return yearNo.getFullYear() - year;
};