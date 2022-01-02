function change() // no ';' here
{
    var btn = document.getElementById("mybtn");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
    } else {
        btn.innerHTML = '0';        
    }
}
function change1() // no ';' here
{
    var btn = document.getElementById("mybtn1");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
    } else {
        btn.innerHTML = '0';        
    }
}
function change2() // no ';' here
{
    var btn = document.getElementById("mybtn2");
    btn.value = 'my value'; // will just add a hidden value
    // btn.innerHTML = '1';
    if (btn.innerHTML == '0') {
        btn.innerHTML = '1';
    } else {
        btn.innerHTML = '0';        
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