module.exports = function totalPhoneBill(itemString) {
    const items = itemString.split(",");
    let total = 0;
    for (var i=0;i<items.length;i++){
      const currentItem = items[i].trim();
      if(currentItem.startsWith("c")) {
        total += 2.75;
      } else if (currentItem.startsWith("s")) {
        total += 0.65;
      } 
    }

    return "R" + total.toFixed(2);
  }