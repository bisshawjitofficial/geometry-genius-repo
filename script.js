
function calculateTriangleArea() {
    // get triangle base value
    const baseFields = document.getElementById('traialgle-base');
    const baseValueText = baseFields.value;
    const base = parseFloat(baseValueText);

    // get triangle height value
    const heightFields = document.getElementById("traialgle-height");
    const heightValueText = heightFields.value;
    const height = parseFloat(heightValueText);

    // taiangle sum
    const area = 0.5 * base * height;

    baseFields.value = ' ';
    heightFields.value = ' ';


    // show triangle area
    const areaSpan = document.getElementById('traialgle-area');
    areaSpan.innerText = area;



}


function calculateRectangleArea() {
    // get rectangle width values

    const widthFields = document.getElementById('rectangle-width');
    const widthValueText = widthFields.value;
    const width = parseFloat(widthValueText);

    // get rectangle length  value
    const heightFields = document.getElementById('rectangle-length');
    const heightValueText = heightFields.value;
    const length = parseFloat(heightValueText)


    // validate input 
    if (isNaN(width) || isNaN(length)) {
        alert("Please Insart a number");

        widthFields.value = ' ';
        heightFields.value = ' ';
        return;
    }


    // rectangle sum 

    const area = width * length;



    // show rectangle area 
    const areaSpan = document.getElementById('rectangle-area');
    areaSpan.innerText = area;

    widthFields.value = ' ';
    heightFields.value = ' ';


}


function calculateParallelogramArea() {
    // get rectangle base values
    const base = getInputValue('parallelogram-base');


    // get rectangle height values
    const height = getInputValue('parallelogram-height');

    // validate input 
    if (isNaN(base) || isNaN(height)) {
        alert("Please Insart a number");
        document.getElementById('parallelogram-base').value = '';
        document.getElementById("parallelogram-height").value = '';
        return;
    }

    // parallelogram sum 
    const area = base * height;

    addToCalculationEntry("parallelogram" , area);

    

    // show parallelogram area 
    const areaSpan = document.getElementById('parallelogram-area');
    areaSpan.innerText = area;

    

    document.getElementById('parallelogram-base').value = '';
    document.getElementById("parallelogram-height").value = '';

    // Add to calculation entry 

   

    


}
 

function calculateEllipseArea() {
    // get Ellipse major values
    const major = getInputValue('ellipse-major-radius');
    // get Ellipse minor values
    const minor = getInputValue('ellipse-minor-radius');


    // validate input 
    if (isNaN(major) || isNaN(minor)) {
        alert("Please Insart a number");
        document.getElementById('ellipse-major-radius').value = '';
        document.getElementById('ellipse-minor-radius').value = '';

        return;
    }

    // Ellipse sum 
    const area = 3.1416 * major * minor;
    const areaToDecimal = area.toFixed(2);

    // show Ellipse area 
    const areaSpan = document.getElementById('ellipse-area');
    areaSpan.innerText = areaToDecimal;

    document.getElementById('ellipse-major-radius').value = '';
    document.getElementById('ellipse-minor-radius').value = '';

}


function calculateRhombusArea() {
    const diagonals1 = getInputValue('diagonals-1');

    const diagonals2 = getInputValue('diagonals-2');


    // validate input 
    if (isNaN(diagonals1) || isNaN(diagonals2)) {
        alert("Please Insart a number");
        document.getElementById('diagonals-1').value = '';
        document.getElementById("diagonals-2").value = '';
        return;
    }


    const area = 0.5 * diagonals1 * diagonals2;
    const areaToDecimal = area.toFixed(2);

    const areaSpan = document.getElementById('rhombus-area');
    areaSpan.innerText = areaToDecimal;

    document.getElementById('diagonals-1').value = '';
    document.getElementById("diagonals-2").value = '';

}


function calculatePentagonArea() {
    const perimeter1 = getInputValue('perimeter-one');


    const Apothem2 = getInputValue('Apothem-one');

    // validate input 
    if (isNaN(perimeter1) || isNaN(Apothem2)) {
        alert("Please Insart a number");
        document.getElementById('perimeter-one').value = '';
        document.getElementById("Apothem-one").value = '';
        return;
    }

    const area = 0.5 * perimeter1 * Apothem2;
    const areaToDecimal = area.toFixed(2);

    const areaSpan = document.getElementById('pentagon-area');
    areaSpan.innerText = areaToDecimal;

    document.getElementById('perimeter-one').value = '';
    document.getElementById("Apothem-one").value = '';
}



// Re useable get input value field in number 

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

// add to calculation entry 

function addToCalculationEntry(areaType , area){
    console.log("Adding Soon")
}
