module.exports = function countAllFromTown(regNo, town) {
    var list = regNo.split(",");
    var Townlist = [];
    var count = 0;
    for (var i = 0; i < list.length; i++) {
        if (list[i].includes(town) === true) {
            count++;
            Townlist.push(list[i].trim());
        }
    }
    return count;
}