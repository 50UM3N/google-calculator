function priority(a) {
    if (a === "^")
        return 3;
    else if (a === "*" || a === "/" || a === "÷" || a === "×" || a === "%")
        return 2;
    else if (a === "+" || a === "-")
        return 1;
    else
        return 0;
}

function operand(a) {
    if (a === "^" || a === "*" || a === "/" || a === "+" || a === "-" || a === "%" || a == "(" || a == ")" || a === "÷" || a === "×")
        return 0;
    else
        return 1;
}

function eval(data) {
    var array, infix = [], postfix = [];
    data = "(" + data + ")";
    data = data.replace(/\s/g, "");
    array = data.split("");
    for (let i = 0, j = 0; i < array.length; i++) {
        if (operand(array[i])) {
            let c = array[i];
            while (operand(array[i + 1]))
                c = c + array[++i];
            infix[j++] = Number(c);
        }
        else {
            if (array[i] == "(" && array[i + 1] == "-") {
                let c = array[++i];
                while (operand(array[i + 1]))
                    c = c + array[++i];
                if (array[i + 1] == ")")
                    i++;
                else
                    infix[j++] = "(";
                infix[j++] = Number(c);
            }
            else
                infix[j++] = array[i];
        }
    }

    console.log(infix);
    var stack = ["("];
    var i = 1;
    while (i < infix.length) {
        let item = infix[i];
        let key = stack.pop();
        if (operand(item)) {
            stack.push(key);
            postfix.push(item);
        } else {
            if (item == ")") {
                while (key != "(") {
                    postfix.push(key);
                    key = stack.pop();
                }
            } else if (item == "(") {
                stack.push(key);
                stack.push(item);
            } else if (priority(key) >= priority(item)) {
                while (priority(key) >= priority(item)) {
                    postfix.push(key);
                    key = stack.pop();
                }
                stack.push(key);
                stack.push(item);
            } else if (priority(key) < priority(item)) {
                stack.push(key);
                stack.push(item);
            }
        }
        i += 1;
    }
    if (stack.length == 0) {
        return evaluate(postfix);
    } else {
        return "undefined";
    }
}
function operation(x, y, z) {
    if (z == "+")
        return x + y;
    else if (z == "-")
        return x - y;
    else if (z == "%")
        return x % y;
    else if (z == "*" || z == "×")
        return x * y;
    else if (z == "/" || z == "÷")
        return x / y;
    else if (z == "^")
        return x ** y;

}

function evaluate(a) {
    var stack = [];
    var i = 0;
    while (i < a.length) {
        if (operand(a[i])) {
            stack.push(a[i]);
        } else {
            x = stack.pop();
            y = stack.pop();
            let temp = operation(y, x, a[i]);
            stack.push(temp);
        }
        i++;
    }
    let m = stack.pop();
    if (Number.isNaN(m) || typeof m == "undefined") {
        return "undefined";
    } else {
        return m;
    }
}