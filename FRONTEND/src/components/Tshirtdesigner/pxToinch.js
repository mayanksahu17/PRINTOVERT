function pixelsToInchesPerSquare(heightPixels, widthPixels) {
    var heightInches = heightPixels / 96;
    var widthInches = widthPixels / 96;
    
    
    var areaSquareInches = heightInches * widthInches;

    console.log("heightInches : ",heightInches);
    console.log("widthInches : ",widthInches);
    const PrintingPrice =  0.3
    if ((heightInches<=11) && (widthInches<=16)) {
    var inchesPerSquare = areaSquareInches / 1;
    
    let printCost = inchesPerSquare * PrintingPrice;

    return printCost;
    }
}



export default pixelsToInchesPerSquare

