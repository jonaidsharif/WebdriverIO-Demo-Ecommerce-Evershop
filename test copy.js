function convertToNumber() {
    const text = "$6,789.00";
    const convertedToSimpleText = parse(text.replace(/[$,]/g, ""));
    console.log(testToNumber);
}

convertToNumber();







// function convertToNumber() {
//     const text = "$6,789.00";
//     const convertedToSimpleText = text.replace(/[$,]/g, "");
//     const testToNumber = parseFloat(convertedToSimpleText);
//     console.log(testToNumber);
// }

// convertToNumber();





// or

// function convertToNumber() {
//     const text = "$6,789.00";
//     const convertedToSimpleText = text.replace(/[$,]/g, "");
//     const testToNumber = parseFloat(convertedToSimpleText);
//     console.log(typeof testToNumber);
// }

// convertToNumber();


// or

// function convertToNumber() {
//     const text = "$6,789.00";
//     const convertedToSimpleText = text.replace(/[$,]/g, "");
//     console.log(convertedToSimpleText);
// }

// convertToNumber();



