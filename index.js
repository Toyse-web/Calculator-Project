
document.addEventListener("DOMContentLoaded", function() {
    const calc = document.querySelectorAll(".btn");
    const calcDisplay = document.querySelector(".display");
    const clearBtn = document.querySelector(".clear");
    const equalButton = document.querySelector(".equal-sign");

    calcDisplay.textContent = "0";
    let expression = "";

    calc.forEach(button => {
        button.addEventListener("click", function() {
            let value = this.textContent;

            if (["+", "*", "-", "/"].includes(value)) {
                if (expression !== "" && !["+", "*", "-", "/"].includes(expression.slice(-1))) {
                    try {
                        expression = eval(expression).toString();
                    } catch {
                        expression = "0"
                    }
                }
            }

            if (["+", "*", "-", "/"].includes(value) && ["+", "*", "-", "/"].includes(expression.slice(-1))) {
                return;
            }

            if (calcDisplay.textContent === "0" && !["+", "*", "-", "/"].includes(value)) {
                expression = value;
            } else {
                expression += value;
            }

            calcDisplay.textContent = expression;
        });
    });

    clearBtn.addEventListener("click", function() {
        expression = "0";
        calcDisplay.textContent = expression;
    });

    equalButton.addEventListener("click", function() {
        try {
            
            if (["+", "*", "-", "/"].includes(expression.slice(-1))) {
                expression = expression.slice(0, -1)
            }

            let result = eval(expression);
            expression = result.toString();
            calcDisplay.textContent = expression;
        } catch (error) {
            calcDisplay.textContent = "error";
            expression = "";
        }
    });
});

        