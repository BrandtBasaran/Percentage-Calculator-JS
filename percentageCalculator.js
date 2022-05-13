var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

// numField1.value = "test";
// numField2.value = "test";
// resultField.innerText = "success";
// These lines were run to test the input boxes to ensure proper retrieval by machine

form.addEventListener('submit', function(event) {
    if (!numField1.value || !numField2.value) {
        alert("please remember to enter values into fields");
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);
        //when using numbers within a text string box, we ALWAYS must parseFloat the value. we will use this a lot
        var result = x / y;
        var percent = result * 100;

        resultField.innerText = "Answer: " + percent + "%";
        //this all works except the page immediately refreshes and the answer dissapears
        //this occurs because the default behaviour of a form is to refresh upon submission
        //in this case we must manually turn this off:
        //first we add 'event' to 'function()' above, then:
        event.preventDefault();
    }
})





