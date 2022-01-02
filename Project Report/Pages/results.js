var a=0,b=0,bin=0,_dout=0,_bout=0;
function change0() // no ';' here
{
    var btn = document.getElementById("mybtn");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
        a=1; 

    } else {
        btn.innerHTML = '0';   
        a=0;
    }
    // change image src to the next image of id=dout

    calcuate()
}
function change1() // no ';' here
{
    var btn = document.getElementById("mybtn1");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
        b = 1;

    } else {
        btn.innerHTML = '0';   
        b = 0;
    }
    calcuate()
}
function change2() // no ';' here
{
    var btn = document.getElementById("mybtn2");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
        bin = 1;
    } else {
        btn.innerHTML = '0';   
        bin = 0;     
    }
    calcuate()
}

//function to add u-black class to fa0, if u-black class is not present. else remove it and add u-red class to fa0
function fault0() {
    var fa0 = document.getElementById("fa0");
    if (fa0.classList.contains("u-black")) {
        fa0.classList.remove("u-black");
        fa0.classList.add("u-palette-2-base");
    } else {
        fa0.classList.remove("u-palette-2-base");
        fa0.classList.add("u-black");
    }
}
function fault1() {
    var fa1 = document.getElementById("fa1");
    if (fa1.classList.contains("u-black")) {
        fa1.classList.remove("u-black");
        fa1.classList.add("u-palette-2-base");
    } else {
        fa1.classList.remove("u-palette-2-base");
        fa1.classList.add("u-black");
    }
}
function fault2() {
    var fa2 = document.getElementById("fa2");
    if (fa2.classList.contains("u-black")) {
        fa2.classList.remove("u-black");
        fa2.classList.add("u-palette-2-base");
    } else {
        fa2.classList.remove("u-palette-2-base");
        fa2.classList.add("u-black");
    }
}
function fault3() {
    var fa3 = document.getElementById("fa3");
    if (fa3.classList.contains("u-black")) {
        fa3.classList.remove("u-black");
        fa3.classList.add("u-palette-2-base");
    } else {
        fa3.classList.remove("u-palette-2-base");
        fa3.classList.add("u-black");
    }
}
function fault4() {
    var fa4 = document.getElementById("fa4");
    if (fa4.classList.contains("u-black")) {
        fa4.classList.remove("u-black");
        fa4.classList.add("u-palette-2-base");
    } else {
        fa4.classList.remove("u-palette-2-base");
        fa4.classList.add("u-black");
    }
}
//function that returns 1 is input is 0 and 0 if input is 1
function invert(input) {
    if (input == 0) {
        return 1;
    } else {
        return 0;
    }
}

function calcuate(){
    //calculate fullsubtracor
    _dout = a^b^bin;
    _bout = invert(a)*bin + invert(a)*b + b*bin;
    //if _dout >1 then stuck at 1
    if (_bout > 1) {
        _bout = 1;
    }
    if (_dout == '1') {
        var dout = document.getElementById("dout");
        dout.src = "../images/3522738.png";     

    } else {
        var dout = document.getElementById("dout");
        dout.src = "../images/3522725.png";
    }

    if (_bout == '1') {
        var bout = document.getElementById("bout");
        bout.src = "../images/3522738.png";     

    } else {
        var bout = document.getElementById("bout");
        bout.src = "../images/3522725.png";
    }
}

function addResult() {
    let html = `
                     <tr>
                        <td class="tg-nrix">${switches[0].dataset.value}</td>
                        <td class="tg-nrix">${switches[1].dataset.value}</td>
                        <td class="tg-nrix">${switches[2].dataset.value}</td>
                        <td class="tg-nrix">${stuckAt == 0 ? 'N/A' : stuckAtButton[stuckAt - 1].innerHTML}</td>
                        <td class="tg-nrix">${result[switches[0].dataset.value][switches[1].dataset.value][switches[2].dataset.value]}</td>
                        <td class="tg-nrix">${output}</td>
                    </tr>
                    `
    document.getElementById('insert-here').innerHTML += html;
}

