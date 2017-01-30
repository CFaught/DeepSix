/***************************************************
 *
 * Author: Caleb Faught
 *
 * Date: 25-Jan-2016
 *
 * I claim no rights to the NOAA dive tables that are
 * referenced in this script. This is just a script
 * that makes the tables digitally interactive.
 ****************************************************/


// This is the NOAA dive tables letter grouping for
// No-decompression limits, repetitive groups.

var DiveTables = {
  letterGroupTable: {
    40:     [12, 20, 27, 36, 44, 53, 63, 73, 84, 95, 108, 121, 135, 151, 163],
    50:     [9, 15, 21, 28, 34, 41, 48, 56, 63, 71, 80, 89, 92],
    55:     [8, 14, 19, 25, 31, 37, 43, 50, 56, 63, 71, 74],
    60:     [7, 12, 17, 22, 28, 33, 39, 45, 51, 57, 60],
    70:     [6, 10, 14, 19, 23, 28, 32, 37, 42, 47, 48],
    80:     [5, 9, 12, 16, 20, 24, 28, 32, 36, 39],
    90:     [4, 7, 11, 14, 17, 21, 24, 28, 30],
    100:     [4, 6, 9, 12, 15, 18, 21, 25],
    110:     [3, 6, 8, 11, 14, 16, 19, 20],
    120:     [3, 5, 7, 10, 12, 15],
    130:     [2, 4, 6, 9, 10]
  },

  surfaceIntTable: {
    'A': [140],
    'B': [76, 216],
    'C': [55, 131, 271],
    'D': [52, 107, 183, 323],
    'E': [52, 104, 159, 235, 375],
    'F': [52, 104, 157, 211, 288, 428],
    'G': [52, 104, 157, 209, 263, 340, 480],
    'H': [52, 104, 157, 209, 261, 316, 392, 532],
    'I': [52, 104, 157, 209, 261, 313, 368, 444, 584],
    'J': [52, 104, 157, 209, 261, 313, 363, 420, 496, 636],
    'K': [52, 104, 157, 209, 261, 313, 363, 418, 472, 549, 689],
    'L': [52, 104, 157, 209, 261, 313, 363, 418, 470, 524, 601, 741],
    'M': [52, 104, 157, 209, 261, 313, 363, 418, 470, 522, 577, 653, 793],
    'N': [52, 104, 157, 209, 261, 313, 363, 418, 470, 522, 574, 629, 705, 845],
    'O': [52, 104, 157, 209, 261, 313, 363, 418, 470, 522, 574, 627, 681, 757, 898],
    'Z': [52, 104, 157, 209, 261, 313, 363, 418, 470, 522, 574, 627, 679, 733, 810, 950]
  },

  // In order to step through bins of values
  getArrayIndex: function(array, value) {
    var arrIndex = 0;
    for (var i = 0; i < array.length; i++) {
      if (value > 0) {
        if(value > array[i] && value < array[i + 1]) {
          arrIndex = i + 1;
        } else  if(value === array[i]) {
          arrIndex = i;
        }else if(value > Math.max.apply(null, array)){
          arrIndex = 99;
        }
      } else {
        arrIndex = 0;
      }
    }
    return arrIndex;
  },

  // Convert an index into a letter
  indexToLetter: function(index) {
    var letter = "";
    switch (index) {
      case 0:
        letter = "A";
        break;
      case 1:
        letter = "B";
        break;
      case 2:
        letter = "C";
        break;
      case 3:
        letter = "D";
        break;
      case 4:
        letter = "E";
        break;
      case 5:
        letter = "F";
        break;
      case 6:
        letter = "G";
        break;
      case 7:
        letter = "H";
        break;
      case 0:
        letter = "I";
        break;
      case 8:
        letter = "J";
        break;
      case 9:
        letter = "K";
        break;
      case 10:
        letter = "L";
        break;
      case 11:
        letter = "M";
        break;
      case 12:
        letter = "N";
        break;
      case 13:
        letter = "O";
        break;
      case 99:
        letter = "Dead";
        break;
      default:
        letter = "Z";
    }
    return letter;
  },

  // This is the function that will return the object property associated with
  // the depth of the dive. This return value will be used to get the array
  // of bottom time bins for calculating the letterGroup.
  getTableProperty: function(depth) {
    var property = 0;
    var propertiesArray = Object.keys(this.letterGroupTable);
    for (var i = 0; i < propertiesArray.length; i++) {
      if(depth > 0) {
        if(depth > propertiesArray[i] && depth <= propertiesArray[i + 1] && propertiesArray[i + 1]) {
          property = propertiesArray[i + 1];
        }else if(depth <= propertiesArray[0]) {
          property = propertiesArray[0];
        }
      } else {
        property = propertiesArray[0];
      }
    }
    return property;
  },

  letterGroup: function(depth, bottomTime) {

    // find the array index bin associated with the bottomTime given.
    var depthArray = this.letterGroupTable[this.getTableProperty(depth)];


    // find the index of the bottom time bin
    var index = this.getArrayIndex(depthArray, bottomTime);


    // Convert the arrray index into a letterGroup
    return this.indexToLetter(index);
  },

  surfaceIntLetter: function(surfInt, letter) {
    var newLetter = "";
    if (letter !== "Dead") {
      // store the array associated with the property letter
      var propArray = this.surfaceIntTable[letter];

      // we can use the same function to step through the bins to find the index
      var index = this.getArrayIndex(propArray, surfInt);

      // in order for the indexToLetter function to get this right,
      // the indexing has to be flip-flopped
      var arrLen = propArray.length;
      var actIndex = arrLen - index - 1;
      if (actIndex < 0) {
        actIndex = 0;
      }

      newLetter = this.indexToLetter(actIndex);
    }else {
      // if dead then dont change letter?
      newLetter = letter;
    }

    return newLetter;
  }
}
