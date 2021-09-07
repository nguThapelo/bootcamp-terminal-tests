module.exports = function findItemsOver20(itemList) {
    let newList = [];
    for (var i = 0; i < itemList.length; i++) {
        if (itemList[i].qty > 20) {
            newList.push(itemList[i]);
        }
    } return newList;
}