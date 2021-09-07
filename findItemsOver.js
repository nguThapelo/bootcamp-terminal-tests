module.exports = function findItemsOver(itemName, threshold) {
    let item = [];
    for (var i = 0; i < itemName.length; i++) {
        if (itemName[i].qty > threshold) {
            item.push(itemName[i]);
        }
    } return item;
}