module.exports = function countAllPaarl(regNo) {
    var list = regNo.split(",");
    var paarl = [];
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes("CJ") === true) {
            count++;
            paarl.push(list[i].trim());
        }
    }
    return count;
}