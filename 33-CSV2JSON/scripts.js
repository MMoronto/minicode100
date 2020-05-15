function CSVToArray(strData, strDelimiter) {
  // Check to see if the delimeter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ",";
  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
      "gi"
  );
  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData =[[]];
  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;
  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];
    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter != strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    if (arrMatches[2]) {

      var strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    } else {

      var strMatchedValue = arrMatches[3];
    }

    arrData[arrData.length -1].push(strMatchedValue);
'{a}' used out of scope.
  }
// Return the parsed data.
  return arrData;
}

function CSV2JSON(csv) {
  var array = CSVToArray(csv);
  var objArray = [];
  for (var i = 1; i < array.length; i++) {
    objArray[i - 1] = {};
    for (var k = 0; k < array[0].length && k < array[i].length; k++) {
      var key = array[0][k];
      objArray[i - 1][key] = array[i][k];
    }
  }

  var json = JSON.stringify(objArray);
  var str = json.replace(/},/g, "},\r\n");

  return str;
}

$("#convert").click(function () {
  var csv = $("#csv").val();
  var json = CSV2JSON(csv);
  $("#json").val(json);
});

$("#download").click(function () {
  var csv = $("#csv").val();
  var json = CSV2JSON(csv);
  window.open("data:text/json;charset=utf-8," + escape(json));
  });
