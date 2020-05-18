var flag = {
    numberflg: false,
    brflg1: false,
    brflg2: false,
    history: false,
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
                        flag.numberflg = false;
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
                else {
                    key = 0;
                    flag.numberflg = false;
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
    if (a == "=") {
        document.getElementById('answer').innerHTML = data + " ="
        let temp = eval(data);
        if (temp == "undefined") {
            temp = "Error";
            flag.numberflg = false;
        }
        historyadd(data, temp);
        data = temp;
        document.getElementById('clear').innerHTML = "AC";
    }
    document.getElementById('calculation').innerHTML = data;
}


/*let divToHide = document.getElementById('history');
let icon = document.getElementById('icon');
document.onclick = function (e) {
    if (e.target !== divToHide && e.target !== icon) {
        divToHide.style.display = 'none';
        document.querySelector('.icon').style.color = "rgb(112, 112, 112)";
        flag.history1 = false;
    }
};*/

window.addEventListener('mouseup', function (e) {
    let divToHide = document.getElementById('history');
    if (e.target !== divToHide && e.target !== document.getElementById('historyinner') && e.target !== document.getElementById('historyitm')) {
        divToHide.style.display = 'none';
        document.querySelector('.icon').style.color = "rgb(112, 112, 112)";
        flag.history = false;
    }
});
document.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
        btnclk("=");
    }
    else if (event.key == 0) {//0
        btnclk("0");
    }
    else if (event.key == 1) {//1
        btnclk("1");
    }
    else if (event.key == 2) {//2
        btnclk("2");
    }
    else if (event.key == 3) {//3
        btnclk("3");
    }
    else if (event.key == 4) {//4
        btnclk("4");
    }
    else if (event.key == 5) {//5
        btnclk("5");
    }
    else if (event.key == 6) {//6
        btnclk("6");
    }
    else if (event.key == 7) {//7
        btnclk("7");
    }
    else if (event.key == 8) {//8
        btnclk("8");
    }
    else if (event.key == 9) {//9
        btnclk("9");
    }
    else if (event.key == "%") {//%
        btnclk("%");
    }
    else if (event.key == "(") {//(
        btnclk("(");
    }
    else if (event.key == ")") {//)
        btnclk(")");
    }
    else if (event.key == "*") {//*
        btnclk("×");
    }
    else if (event.key == "+") {//+
        btnclk("+");
    }
    else if (event.key == "-") {//-
        btnclk("-");
    }
    else if (event.key == ".") {//.
        btnclk(".");
    }
    else if (event.key == "/") {///
        btnclk("÷");
    }
    else if (event.key == 27) {//escape
        btnclk("AC");
    }
    else if (event.keyCode == 8) {//escape
        btnclk("CE");

    }
    console.log(event.keyCode + " " + event.key);
});
function history() {
    let his = document.querySelector('.historyinner');
    if (his.innerHTML.replace(/\s/g, "") != "") {
        if (flag.history) {
            document.querySelector('.icon').style.color = "rgb(112, 112, 112)";
            document.getElementById('history').style.display = "none";
            flag.history = false;

        }
        else {
            document.querySelector('.icon').style.color = "dodgerblue";
            document.getElementById('history').style.display = "block";
            flag.history = true;
        }
    }
}

function historyclk(e) {
    document.getElementById('calculation').innerHTML = e;
    document.getElementById('clear').innerHTML = "CE";
    flag.numberflg = true;
}
function historyadd(a, b) {
    let his = document.querySelector('.historyinner');
    his.innerHTML += '<div class="historyitm" id="historyitm"><div class="historyBtn" onclick="historyclk(this.textContent)">' + a + '</div><span>=</span><div class="historyBtn" onclick="historyclk(this.textContent)">' + b + '</div></div>';
}
