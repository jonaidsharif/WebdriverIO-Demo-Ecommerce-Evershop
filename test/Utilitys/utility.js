class Utility {
    async covertTextToNumber(text) }{
        const value = parseFloat(text.replacce(/[$,]/g, ""));
        return value;
}

module.exports = new Utility();