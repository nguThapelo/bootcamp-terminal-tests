module.exports = function transportFee(shiftWorking) {
    if (shiftWorking === "morning") {
        return "R20";
    } else if (shiftWorking === "afternoon") {
        return "R10";
    } else {
        return "free";
    }
}