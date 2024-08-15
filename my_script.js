var is_result_displayed = false;

function calculate(type, value) {
    var resultElement = document.getElementById('result');

    if (type == 'action') {
        if (value == 'c') {
            resultElement.value = '';
            is_result_displayed = false;
        }
        if (value == '+' || value == '-' || value == '*' || value == '/' || value == '.') {
            if (is_result_displayed) {
                is_result_displayed = false;
            }
            resultElement.value += value;
        }
        if (value == '=') {
            var expression = resultElement.value;
            resultElement.value = eval(expression);
            is_result_displayed = true; 
        }
    } else if (type == 'value') {
        if (is_result_displayed) {
            resultElement.value = value;
            is_result_displayed = false; 
        } else {
            resultElement.value += value;
        }
    }
}