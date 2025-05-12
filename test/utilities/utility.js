class Utility {
    async covertTextToNumber(text) {
        const value = parseFloat(text.replace(/[$,]/g, ""));
        return value;
    }

    async randomNumber(max, min) {
        const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomValue;
    }
    
    async createRandomString(length) {
        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let result = "";
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
}

module.exports = new Utility();