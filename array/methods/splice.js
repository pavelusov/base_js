// replace colors
function replaceColor(arrayColors, replaceColor, newColor) {
    let colorIndex = arrayColors.indexOf(replaceColor);
    let color;
    if (colorIndex >= 0) {
         color = arrayColors.splice(colorIndex,1,newColor);
    }
    return color;
}

const colors = ["red", "green", "blue"];

let color = replaceColor(colors, "black", "orange");
