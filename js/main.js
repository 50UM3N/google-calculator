var flag = {
    numberflg: false,
    brflg1: false,
    brflg2: false,
    brcount: 0
};
function btnclk(a) {
    var data = document.getElementById('calculation').textContent;
    data = data.slice(0, data.length - flag.brcount);
    if (a == "AC") {
        document.getElementById('answer').innerHTML = "Ans = " + data;
        flag.numberflg = false;
    }
    if (!flag.numberflg)
        data = "";
    if (a == "(") {
        flag.numberflg = true;
        let temp = "";
        flag.brflg1 = true;
        flag.brflg2 = false;
        flag.brcount++;
        for (let i = 0; i < flag.brcount; i++)
            temp += ")";
        data += a + '<span style="color: lightgray;">' + temp + '</span';
    }
    if (a == ")" && flag.brflg1) {
        let temp = "";
        if (flag.brflg2)
            flag.brcount--;
        else
            a = "";
        if (flag.brcount == 0)
            flag.brflg1 = false;
        for (let i = 0; i < flag.brcount; i++)
            temp += ")";
        data += a + '<span style="color: lightgray;">' + temp + '</span';
        a = ")";
    }

    function write() {
        flag.numberflg = true;
        if (flag.brflg1) {
            flag.brflg2 = true;
            let temp = "";
            for (let i = 0; i < flag.brcount; i++)
                temp += ")";
            data += a + '<span style="color: lightgray;">' + temp + '</span';
        }
        return data;
    }
    if (a == ".")
        data = write() + a;
    if (a == 1)
        data = write() + a;
    if (a == 2)
        data = write() + a;
    if (a == 3)
        data = write() + a;
    if (a == 4)
        data = write() + a;
    if (a == 5)
        data = write() + a;
    if (a == 6)
        data = write() + a;
    if (a == 7)
        data = write() + a;
    if (a == 8)
        data = write() + a;
    if (a == 9)
        data = write() + a;
    if (a == 0)
        data = write() + a;
    if (a == "-")
        data = write() + a;
    if (a == "%")
        data = write() + a;
    if (a == "÷")
        data = write() + a;
    if (a == "×")
        data = write() + a;
    if (a == "+")
        data = write() + a;

    if (a == "=") {
        document.getElementById('answer').innerHTML=data+" ="
        data = eval(data);
        if (data=="undefined") {
            data= "Error";
        }
        flag.numberflg = false;
        document.getElementById('clear').innerHTML = "AC";
    }
    if (a == "CE") {
        let key, temp = "";
        key = data.slice(data.length - 1, data.length);
        if (data.slice(data.length - 2, data.length - 1) == "(")
            flag.brflg2 = false;
        else
            flag.brflg2 = true;
        data = data.slice(0, data.length - 1);
        brakename: {
            if (key == ")") {
                flag.brflg1 = true;
                flag.brcount++;
                for (let i = 0; i < flag.brcount; i++)
                    temp += ")";
                key = data + '<span style="color: lightgray;">' + temp + '</span';
            }
            else if (key == "(") {
                flag.brcount--;
                if (flag.brcount == 0) {
                    flag.brflg1 = false;
                    if (data == "") {
                        data = 0;
                        flag.numberflg=false;
                        break brakename;
                    }
                }
                for (let i = 0; i < flag.brcount; i++)
                    temp += ")";
                key = data + '<span style="color: lightgray;">' + temp + '</span';
            }
            else {
                if (data.length != 0) {
                    for (let i = 0; i < flag.brcount; i++)
                        temp += ")";
                    key = data + '<span style="color: lightgray;">' + temp + '</span';
                }
                else{
                    key = 0;
                    flag.numberflg=false;
                }
            }
            data = key;
        }
    }

    if (data.length == 0) {
        data = 0;
        flag.numberflg = false;
    }
    if (flag.numberflg) {
        document.getElementById('clear').innerHTML = "CE";
    }
    document.getElementById('calculation').innerHTML = data;
}