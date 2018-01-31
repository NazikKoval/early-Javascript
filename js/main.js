function id(a) {
    return document.getElementById(a);
};

function sel(a) {
    return document.querySelector(a);
};
var vari = false; // загальна змінна для стилізації полів
//============================================================== переключання між блоками: 
id('Edit').addEventListener('click', function () {
    sel('.down__edit').style.display = 'block';
    sel('.center').style.display = 'none';
    sel('.head').style.display = 'none';
});
id('CreateTable').addEventListener('click', function () {
    sel('.popupTable').style.display = 'block';
    sel('.down__add').style.display = 'block';
});
id('CreateList').addEventListener('click', function () {
    sel('.popupList').style.display = 'block';
    sel('.down__mark').style.display = 'block';
});
sel('.first').checked = true;
document.forms.formel.elements[0].addEventListener('click', function () {
    sel('.down__add').style.display = 'block';
    sel('.down__mark').style.display = 'none';
});
document.forms.formel.elements[1].addEventListener('click', function () {
    sel('.down__add').style.display = 'none';
    sel('.down__mark').style.display = 'block';
});
//============================================================== перенос і редагування тексту (для Edit):
sel('.edit__text').innerHTML = sel('.head').innerHTML;
id('Save').addEventListener('click', function () {
    sel('.head').innerHTML = sel('.edit__text').value;
    sel('.down__edit').style.display = 'none';
    sel('.center').style.display = 'block';
    sel('.head').style.display = 'block';
});
//=============================================================== Font family:
function funcfamily() {
    var x = sel(".fFamily").value;
    sel('.head').style.fontFamily = x;
};
//=============================================================== Text size:
function funcSize() {
    var x = sel(".fSize").value;
    sel('.head').style.fontSize = x;
};
//===================================================== Color і bgColor:
for (var i = 0; i < 6; i++) {
    sel('.colortext').children[i].addEventListener('click', function () {
        sel('.head').style.color = this.className;
    });
};
id('Color').addEventListener('click', function () {
    sel('.colortext').style.display = 'block';
});
for (var i = 1; i < 7; i++) {
    sel('.colortextt').children[i].addEventListener('click', function () {
        sel('.head').style.background = this.className;
    });
};
id('bgColor').addEventListener('click', function () {
    sel('.colortextt').style.display = 'block';
});
for (var i = 0; i < 4; i++) {
    sel('.colortexttt').children[i].addEventListener('click', function () {
        sel('.head').style.backgroundImage = this.style.backgroundImage;
    });
};
//============================================= bold italic text
function Fu(checkbox) {
    if (checkbox.checked == true) {
        sel('.head').style.fontStyle = "oblique";
        sel('.italic').checked = false;
    }
    else {
        sel('.head').style.fontStyle = "normal";
    }
}

function Fun(checkbox) {
    if (checkbox.checked == true) {
        sel('.head').style.fontStyle = "italic";
        sel('.bold').checked = false;
    }
    else {
        sel('.head').style.fontStyle = "normal";
    }
}
//====================================================================================================  стилізація полів:
var input = document.querySelectorAll('input[class^="val"]');
for (var i = 0; i < 7; i++) {
    input[i].oninput = function () {
        var x = sel('input.' + this.className).value;
        if (x == "") {
            sel('input.' + this.className).style.border = "2px solid red";
            vari = false;
            sel('input.' + this.className + ' + span').innerHTML = "ви нічого не ввели";
        }
        else if (x == 0) {
            sel('input.' + this.className).style.border = "2px solid red";
            sel('input.' + this.className + ' + span').innerHTML = "не можна вводити 0";
            vari = false;
        }
        else if (x > 99) {
            sel('input.' + this.className).style.border = "2px solid red";
            sel('input.' + this.className + ' + span').innerHTML = "не можна вводити більше 99";
            vari = false;
        }
        else if (x < 0) {
            sel('input.' + this.className).style.border = "2px solid red";
            vari = false;
            sel('input.' + this.className + ' + span').innerHTML = "не можна вводити менше 0";
        }
        else if (isNaN(x)) {
            sel('input.' + this.className).style.border = "2px solid red";
            vari = false;
            sel('input.' + this.className + ' + span').innerHTML = "введіть тільки число";
        }
        else {
            sel('input.' + this.className).style.border = "2px solid yellow";
            vari = true;
            sel('input.' + this.className + ' + span').innerHTML = "";
        }
    }
}
//===================================================================================== Таблиця
id('create').addEventListener('click', function () {
    if (vari == false) {}
    else {
        var bwid = sel('.val5').value
        var color = sel('.down__selectCOL').value
        var stl = sel('.down__stl').value
        var table = '<table style="border:' + bwid + 'px ' + stl + ' ' + color + '">';
        for (var i = 0; i < sel('.val1').value; i++) {
            table += '<tr>';
            for (var b = 0; b < sel('.val2').value; b++) {
                var h = sel('.val4').value
                var w = sel('.val3').value
                table += '<td style="height: ' + h + 'px; width: ' + w + 'px; border:' + bwid + 'px ' + stl + ' ' + color + '"></td>';
            }
            table += '<tr>';
        };
        table += '</table>';
        sel('.edit__text').value += table;
        sel('.val1').value = '';
        sel('.val2').value = '';
        sel('.val3').value = '';
        sel('.val4').value = '';
        sel('.val5').value = '';
        sel('.val1').style.border = "0";
        sel('.val1').style.borderBottom = "2px solid black";
        sel('.val2').style.border = "0";
        sel('.val2').style.borderBottom = "2px solid black";
        sel('.val3').style.border = "0";
        sel('.val3').style.borderBottom = "2px solid black";
        sel('.val4').style.border = "0";
        sel('.val4').style.borderBottom = "2px solid black";
        sel('.val5').style.border = "0";
        sel('.val5').style.borderBottom = "2px solid black";
    }
});
//================================================================= Список + (2 частина з ol і ul) :
//=============================================================== для ul
sel('.ul').addEventListener('click', function () {
    sel('.ul__blok').style.display = 'block';
    sel('.ol__blok').style.display = 'none';
});
id('createList').addEventListener('click', function () {
    if (vari == false) {}
    else {
        var tup = sel('.down__styleM').value;
        var list = '<ul type=' + tup + '>';
        for (var b = 0; b < sel('.val6').value; b++) {
            list += "<li> text </li>";
        }
        list += '<ul>';
        sel('.edit__text').value += list;
        sel('.ol__blok').style.display = 'none';
        sel('.ul__blok').style.display = "none";
        sel('.val6').value = '';
        sel('.first').checked = true;
        sel('.val6').style.border = "0";
        sel('.val6').style.borderBottom = "2px solid black";
    }
});
//============================================================= для ol
sel('.ol').addEventListener('click', function () {
    sel('.ol__blok').style.display = 'block';
    sel('.ul__blok').style.display = "none";
});
id('createList2').addEventListener('click', function () {
    if (vari == false) {}
    else {
        var tup = sel('.down__styleM1').value;
        var list = '<ol type=' + tup + '>';
        for (var b = 0; b < sel('.val7').value; b++) {
            list += "<li> text </li>";
        }
        list += '<ol>';
        sel('.edit__text').value += list;
        sel('.ol__blok').style.display = 'none';
        sel('.ul__blok').style.display = "none";
        sel('.val7').value = '';
        sel('.first').checked = true;
        sel('.val7').style.border = "0";
        sel('.val7').style.borderBottom = "2px solid black";
    }
});
//========================================================================= блокування додатку:
function funcPopup() {
    sel('.popup').style.display = "block";
    sel('.inpopup').style.display = "block";
}
id('Confirm').addEventListener('click', function () {
    if (sel('.pass').value !== 'password') {
        sel('.pass__check').style.display = 'block';
    }
    else {
        sel('.popup').style.display = "none";
        sel('.inpopup').style.display = "none";
        sel('.pass__check').style.display = 'none';
        sel('.pass').value = '';
    }
});
//======================================================================== 3 частина 
//========================================================= для кнопок верхніх:
var call = true;
id('B').addEventListener('click', function () {
    if (call == true) {
        sel('.head').style.fontWeight = 600;
        call = false;
    }
    else {
        call = true;
        sel('.head').style.fontWeight = 100;
    }
});
var call2 = true;
id('kurs').addEventListener('click', function () {
    if (call2 == true) {
        sel('.head').style.fontStyle = "Oblique";
        call2 = false;
    }
    else {
        call2 = true;
        sel('.head').style.fontStyle = "Normal";
    }
});
var call3 = true;
id('U').addEventListener('click', function () {
    if (call3 == true) {
        sel('.head').style.textDecoration = "Underline";
        call3 = false;
    }
    else {
        call3 = true;
        sel('.head').style.textDecoration = "None";
    }
});
//====================================================================== radio button:
for (i = 0; i < sel('.positionForm').length; i++) {
    sel('.positionForm').elements[i].addEventListener('click', function () {
        sel('.head').style.textAlign = this.value;
    });
}
//======================================================= color and bgColor (popup):
function funcTxtPop() {
    sel('.popupColor').style.display = "block";
    sel('.popupColor').onclick = function () {
        sel('.popupColor').style.display = "none";
        sel('.colortext').style.display = "none";
        sel('.colortextt').style.display = "none";
        sel('.colortexttt').style.display = "none";
    };
};
id('Image').addEventListener('click', function () {
    sel('.colortext').style.display = "none";
    sel('.colortextt').style.display = "none";
    sel('.colortexttt').style.display = "block";
});
//============================================================ таблиця і списки (popup):
sel('.popupTable').onclick = function () {
    sel('.popupTable').style.display = 'none';
    sel('.down__add').style.display = 'none'
};
sel('.popupList').onclick = function () {
    sel('.popupList').style.display = 'none';
    sel('.down__mark').style.display = 'none'
};

//================================================================ вибрати background
id("file").addEventListener('change', function (e) {
    var url = URL.createObjectURL(e.target.files[0]);
    sel('.head').style.backgroundImage = "url(" + url + ")";
});