"use strict";

function NumericInput(inp, locale) {
  var numericKeys = '0123456789';

  // restricts input to numeric keys 0-9
  inp.addEventListener('keypress', function(e) {
    var event = e || window.event;
    var target = event.target;

    if (event.charCode == 0) {
      return;
    }

    if (-1 == numericKeys.indexOf(event.key)) {
      // Could notify the user that 0-9 is only acceptable input.
      event.preventDefault();
      return;
    }
  });

  // add the thousands separator when the user blurs
  inp.addEventListener('blur', function(e) {
    var event = e || window.event;
    var target = event.target;

    var tmp = target.value.replace(/,/g, '');
    var val = Number(tmp).toLocaleString(locale);

    if (tmp == '') {
      target.value = '';
    } else {
      target.value = val;
    }
  });

  // strip the thousands separator when the user puts the input in focus.
  inp.addEventListener('focus', function(e) {
    var event = e || window.event;
    var target = event.target;
    var val = target.value.replace(/[,.]/g, '');

    target.value = val;
  });
}

var textDe = new NumericInput(document.getElementById('textDe', 'de-DE'));
var tc = new NumericInput(document.getElementById('tc', 'de-DE'));
var vc = new NumericInput(document.getElementById('vc', 'de-DE'));
var unit = new NumericInput(document.getElementById('unit', 'de-DE'));



// ======= FUNGSI BIAYA ======
let biayaform = document.getElementById("biayaform");

biayaform.addEventListener("submit", (e) => {
  e.preventDefault();

  let tc = document.getElementById("tc");
  let vc = document.getElementById("vc");
  let unit = document.getElementById("unit");
  let result_biaya = "";

  if (tc.value == "" || vc.value == "" || unit.value == "") {
    alert("Tolong masukan input!");
  } else {
    
    result_biaya = Number(tc.value.replace(/,/g, '')) + (Number(vc.value.replace(/,/g, '')) * Number(unit.value.replace(/,/g, '')));
    // alert("Hasilnya adalah " + numeral(result_biaya).format('0,0'));
    swal("Hasilnya Adalah " + numeral(result_biaya).format('0,0'),"", "success");

    tc.value = "";
    vc.value = "";
    unit.value = "";
    result_biaya = "";
  }
});



