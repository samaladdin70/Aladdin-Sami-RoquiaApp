
if (localStorage.getItem("roquiaFontColor") != undefined && localStorage.getItem("roquiaBackGroundColor") != undefined) {
    document.getElementById("bodyId").style.backgroundColor = localStorage.getItem("roquiaBackGroundColor");
    document.getElementById("output").style.backgroundColor = localStorage.getItem("roquiaBackGroundColor");

    document.getElementById("bodyId").style.color = localStorage.getItem("roquiaFontColor");
    document.getElementById("output").style.color = localStorage.getItem("roquiaFontColor");
    if (localStorage.getItem("roquiaFontColor") == "#FBF0D9") {
        document.getElementById("flexSwitchCheckDefault").checked = true;
        document.getElementById("bodyId").style.backgroundImage = "url('img/black_paper.gif')";
        document.getElementById("output").style.backgroundImage = "url('img/black_paper.gif')";
    } else {
        document.getElementById("flexSwitchCheckDefault").checked = false;
        document.getElementById("bodyId").style.backgroundImage = "url('img/paper.gif')";
        document.getElementById("output").style.backgroundImage = "url('img/paper.gif')";
    }
}
document.getElementById("navId").style.height = (screen.height * 0.10) + "px";
document.getElementById("output").style.height = (screen.height * 0.80) + "px";
//clock height width
document.getElementById("logoClockId").style.height = (screen.height * 0.10) * 0.80 +"px";
document.getElementById("logoClockId").style.width = (screen.height * 0.10) * 0.80 +"px";
document.getElementById("output").onclick = () => {
    if (document.getElementById("dropDownItem").style.display == "block") {
        document.getElementById("dropDownItem").style.display = "none";
        document.getElementById("navId").style.opacity = "1";
    }
    if (document.getElementById("navbarNavDarkDropdown").style.display == "block") {
        document.getElementById("navbarNavDarkDropdown").style.display = "none";
    }
}

// to avoid right-clik menu
document.getElementById("output").oncontextmenu = (event) => {
    event.preventDefault();
};

function toggleMenu() {
    if (document.getElementById("navbarNavDarkDropdown").style.display != "block") {
        document.getElementById("navbarNavDarkDropdown").style.display = "block";
        document.getElementById("dropDownItem").style.display = "block";
        document.getElementById("navId").style.opacity = ".8";
    } else {
        document.getElementById("navbarNavDarkDropdown").style.display = "none";
        document.getElementById("dropDownItem").style.display = "none";
        document.getElementById("navId").style.opacity = "1";
    }
}
function dropDownItemFun() {
    if (document.getElementById("dropDownItem").style.display != "block") {
        document.getElementById("dropDownItem").style.display = "block";
        document.getElementById("navId").style.opacity = ".8";
    } else {
        document.getElementById("dropDownItem").style.display = "none";
        document.getElementById("navId").style.opacity = "1";
    }
}
function dayNight(params) {
    if (document.getElementById(params).checked == true) {
        if (params == "day") {
            document.getElementById("bodyId").style.backgroundColor = "#FBF0D9";
            document.getElementById("bodyId").style.backgroundImage = "url('img/paper.gif')";
            document.getElementById("bodyId").style.color = "black";
            localStorage.setItem("roquiaFontColor", "black");
            localStorage.setItem("roquiaBackGroundColor", "#FBF0D9")
        } else if (params == "night") {
            document.getElementById("bodyId").style.backgroundColor = "black";
            document.getElementById("bodyId").style.backgroundImage = "url('img/black_paper.gif')";
            document.getElementById("bodyId").style.color = "#FBF0D9";
            localStorage.setItem("roquiaFontColor", "#FBF0D9");
            localStorage.setItem("roquiaBackGroundColor", "black")
        }
    }
}

const dayNight2 = () => {
    if (document.getElementById("flexSwitchCheckDefault").checked == true) {
        document.getElementById("bodyId").style.backgroundColor = "black";
        document.getElementById("bodyId").style.backgroundImage = "url('img/black_paper.gif')";
        document.getElementById("bodyId").style.color = "#FBF0D9";
        document.getElementById("output").style.backgroundColor = "black";
        document.getElementById("output").style.backgroundImage = "url('img/black_paper.gif')";
        document.getElementById("output").style.color = "#FBF0D9";
        localStorage.setItem("roquiaFontColor", "#FBF0D9");
        localStorage.setItem("roquiaBackGroundColor", "black")
    } else {
        document.getElementById("bodyId").style.backgroundColor = "#FBF0D9";
        document.getElementById("bodyId").style.backgroundImage = "url('img/paper.gif')";
        document.getElementById("bodyId").style.color = "black";
        document.getElementById("output").style.backgroundColor = "#FBF0D9";
        document.getElementById("output").style.backgroundImage = "url('img/paper.gif')";
        document.getElementById("output").style.color = "black";
        localStorage.setItem("roquiaFontColor", "black");
        localStorage.setItem("roquiaBackGroundColor", "#FBF0D9")
    }
};

function clearPage(divId) {
    while (document.getElementById(divId).lastChild) {
        document.getElementById(divId).lastChild.remove();
    }
}

function roquiaKamla() {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myRoquia = new Roquia();
    document.getElementById("output").innerText = myRoquia.generalRoquia();
}

function roquiaMokhtasra() {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myRoquia = new Roquia();
    document.getElementById("output").innerText = myRoquia.smallRoquia();
}

const ayatElsehr = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myRoquia = new Roquia();
    document.getElementById("output").innerText = myRoquia.ayatElsehr();
}

const mashiArgol = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myRoquia = new Roquia();
    document.getElementById("output").innerText = myRoquia.ayatMashieWaArgol();
};

const fakGennyMarpootFeGasad = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myRoquia = new Roquia();
    document.getElementById("output").innerText = myRoquia.fakGennyMarpoot();
};

function createControls(divId) {
    document.getElementById(divId).innerHTML += '<div id = "rightLeftId" style="display:flex; flex-direction: row; justify-content: space-between;">' +

        '<span id="previous" class="material-icons" style="font-size: 48px; cursor:pointer;">' +
        '<span style="font-size:22px;">السابق</span>skip_next</span>' +

        '<span id="next" class="material-icons" style="font-size: 48px; cursor:pointer;">' +
        'skip_previous<span style="font-size:22px;">التالي</span></span></div><div style="margin-top:-10px;">-------------</div>' +

        '<div id="addSubId" class="fixed-bottom" style="display:flex; flex-direction: row; justify-content: center; margin-top:-30px;">' +

        '<span id="countDown" onclick="counter(\'divOut\',\'divCount\', \'countDown\')" class="material-icons" style="font-size: 60px; margin:15px; margin-bottom:0; cursor:pointer;">arrow_circle_down</span>' +
        '<span id ="countUp" onclick="counter(\'divOut\', \'divCount\',\'countUp\')" class="material-icons" style="font-size: 60px; margin:15px; margin-bottom:0; cursor:pointer;">arrow_circle_up</span></div><div class="fixed-bottom2">العداد</div>';
    document.getElementById("rightLeftId").style.height = screen.height * 0.10 + "px";
    document.getElementById("addSubId").style.height = screen.height * 0.10 + "px";
}

function counterOut(divId, counts) {
    document.getElementById(divId).innerHTML = '<div style="display:flex; flex-direction: row; justify-content: center;">' +
        '<div id="divCount" style="width:70px; border-radius:10px; margin:5px; border:2px solid; display:flex;justify-content: center;align-items:center;">' + counts + '</div>' +
        '<div id="divOut" style="width:70px; border-radius:10px; margin:5px; border:2px solid; display:flex;justify-content: center;align-items:center;">' + 0 + '</div></div>';
    document.getElementById("divCount").style.height = screen.height * 0.08 + "px";
    document.getElementById("divOut").style.height = screen.height * 0.08 + "px";
    document.getElementById("divCount").style.width = screen.height * 0.09 + "px";
    document.getElementById("divOut").style.width = screen.height * 0.09 + "px";
}
function counter(divOut, divCount, action) {
    if (action == "countUp") {
        if (parseInt(document.getElementById(divOut).innerHTML) < parseInt(document.getElementById(divCount).innerHTML)) {
            document.getElementById(divOut).innerHTML++;
            document.getElementById(divOut).innerHTML = document.getElementById(divOut).innerHTML;
        }
    } else if (action == "countDown") {
        if (parseInt(document.getElementById(divOut).innerHTML) > 0) {
            document.getElementById(divOut).innerHTML--;
            document.getElementById(divOut).innerHTML = document.getElementById(divOut).innerHTML;
        }
    }
}
function azkar(param) {
    const azkary = new Azkar();
    document.getElementById("output").style.height = (screen.height - screen.height * 0.17) + "px";
    if (param == "morning") {
        clearPage("output");
        let itter = 0;
        counterOut("output", azkary.morningAzkarItter[itter]);

        document.getElementById("output").innerHTML += '<div id="azkarContainer">' + azkary.morningAzkar[itter] + '</div>';
        createControls("output");
        document.getElementById("azkarContainer").style.height = screen.height * 0.45 + "px";


        document.getElementById("next").onclick = () => {
            if (itter < azkary.morningAzkarItter.length - 1) {
                itter++;
                document.getElementById("divOut").innerHTML = 0;
                document.getElementById("divCount").innerHTML = azkary.morningAzkarItter[itter];
                document.getElementById("azkarContainer").innerHTML = azkary.morningAzkar[itter];
                document.getElementById("azkarContainer").scrollTop = 0;

            }
            document.getElementById("previous").onclick = () => {
                if (itter > 0) {
                    itter--;
                    document.getElementById("divOut").innerHTML = 0;
                    document.getElementById("divCount").innerHTML = azkary.morningAzkarItter[itter];
                    document.getElementById("azkarContainer").innerHTML = azkary.morningAzkar[itter];
                    document.getElementById("azkarContainer").scrollTop = 0;
                }
            }
        }
    } else if (param == "evening") {
        clearPage("output");
        let itter = 0;
        counterOut("output", azkary.eveningAzkarItter[itter]);

        document.getElementById("output").innerHTML += '<div id="azkarContainer">' + azkary.eveningAzkar[itter] + '</div>';
        createControls("output");
        document.getElementById("azkarContainer").style.height = screen.height * 0.45 + "px";


        document.getElementById("next").onclick = () => {
            if (itter < azkary.eveningAzkarItter.length - 1) {
                itter++;
                document.getElementById("divOut").innerHTML = 0;
                document.getElementById("divCount").innerHTML = azkary.eveningAzkarItter[itter];
                document.getElementById("azkarContainer").innerHTML = azkary.eveningAzkar[itter];
                // document.getElementById("azkarContainer").scrollTop = document.getElementById("azkarContainer").scrollHeight;
                document.getElementById("azkarContainer").scrollTop = 0;

            }
            document.getElementById("previous").onclick = () => {
                if (itter > 0) {
                    itter--;
                    document.getElementById("divOut").innerHTML = 0;
                    document.getElementById("divCount").innerHTML = azkary.eveningAzkarItter[itter];
                    document.getElementById("azkarContainer").innerHTML = azkary.eveningAzkar[itter];
                    document.getElementById("azkarContainer").scrollTop = 0;
                }
            }
        }

    }
}

function azkarMianPage() {
    clearPage("output");
    document.getElementById("output").innerHTML = '' +
        '<div id="azkarMain" style="width:100%; height:100%;' +
        'display:flex; align-items:center; justify-content:start; flex-direction: column;">' +
        '<div class="azkar">' +
        '<h1 onclick="azkar(\'morning\')">أذكار الصباح</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="azkar(\'evening\')">أذكار المساء</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="elnoum();">أذكار النوم</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="estikazMenNoum();">أذكار الإستيقاظ من النوم</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="dokhoolWaKhroogMenMasged();">أذكار الدخول والخروج من المسجد</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="dokhoolWakhroogMenManzel();">أذكار الدخول والخروج من المنزل</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="ta3amWaShrap();">أذكار الأكل والشرب</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="lebsWaKhal3Elthiab();">أذكار لبس وخلع الثياب</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="elzoagWaElgema3();">أذكار الزواج والجماع</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="dokhoolWakhroogMenElkhalaa();">أذكار الدخول والخروج من الخلاء</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="maTaquolEzaRaaytFiManamekMaTakrah();">  إذا رأيت في منامك ما تحب أو تكره</h1></div>' +
        '</div>';
    document.getElementById("output").style.height = "auto";
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
        toggleMenu();
    }, 350);
}

const roquiaMainPage = () => {
    clearPage("output");
    document.getElementById("output").innerHTML = '' +
        '<div id="azkarMain" style="width:100%; height:100%;' +
        'display:flex; align-items:center; justify-content:start; flex-direction: column;">' +
        '<div class="azkar">' +
        '<h1 onclick="roquiaKamla();">الرقية الكاملة</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="roquiaMokhtasra();">الرقية المختصرة</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="ayatElsehr();">آيات إبطال السِحر</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="mashiArgol();">آيات المشي والأرجُل</h1></div>' +
        '<div class="azkar">' +
        '<h1 onclick="fakGennyMarpootFeGasad();">فك الجني المربوط</h1></div>' +
        '</div>';
    if (document.getElementById("azkarMain").style.height <= "250px") {
        document.getElementById("azkarMain").style.height = screen.height - 80 + "px";
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
        toggleMenu();
    }, 350);
};

// السبحة
const generalCounter = () => {
    clearPage("output");
    document.getElementById("output").innerHTML = '<div id="counterMain"><div style="display:flex; flex-direction: column; justify-content: center; align-items:center;">' +
        '<div id ="divOutCount" style="width:70px; height:70px; border-radius:10px; margin:5px; border:2px solid; display:flex;justify-content: center;align-items:center;"> ' + 0 + '</div></div>' +
        '<div style="display:flex; flex-direction: column; justify-content: center; align-items:center;">' +
        '<div id = "divResetCount" class="material-icons" onclick="resetGeneralCounter(\'divOutCount\');">restart_alt</div>تصفير العداد</div>' +
        '<input id="vibSetId" type="checkbox" onchange="setViberCase();">اهتزاز' +
        '<div class="fixed-bottom" style="padding:10px;">' +
        '<button id="countUpButtonGen" onclick="generalCountUp(\'divOutCount\');" class="btn form-control borderBlack" type="button">العداد</button>' +
        '</div></div>';
    if (document.getElementById("counterMain").style.height <= "250px") {
        document.getElementById("counterMain").style.height = (screen.height * 0.80) + "px";
    }
    if (localStorage.getItem("roquiaGeneralCounter") != undefined) {
        document.getElementById("divOutCount").innerHTML = localStorage.getItem("roquiaGeneralCounter");
    }
    if (localStorage.getItem("setViberCase") != undefined && localStorage.getItem("setViberCase") == "Ok") {
        document.getElementById("vibSetId").checked = true;
    } else {
        document.getElementById("vibSetId").checked = false;
    }
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    setTimeout(() => {
        toggleMenu();
    }, 350);
};
const generalCountUp = (div) => {
    if (document.getElementById("vibSetId").checked == true) navigator.vibrate(50);
    document.getElementById(div).innerHTML++;
    localStorage.setItem("roquiaGeneralCounter", document.getElementById(div).innerHTML);
};
const resetGeneralCounter = (div) => {
    document.getElementById(div).innerHTML = 0;
    localStorage.setItem("roquiaGeneralCounter", document.getElementById(div).innerHTML);
};
const setViberCase = () => {
    if (document.getElementById("vibSetId").checked == true) {
        localStorage.setItem("setViberCase", "Ok");
    } else {
        localStorage.setItem("setViberCase", "notOk");
    }
};
// contact us
const contactUs = () => {
    clearPage("output");
    var imgArray = ["img/1.png", "img/2.png", "img/3.png", "img/5.png"];
    let index = 0;
    document.getElementById("output").innerHTML = '<div id ="contactUs" class="contactUs">' +
        '<div><h5>Designed & Developed by:</h5></div>' +
        '<div><h5><img src="img/image.jpg" style="width:35px; height:35px; border-radius:50%; vertical-align:middle;pointer-events: none;"> Aladdin Sami &copy;</h5></div>' +
        '<!--<div><h4>Country: <span class="bg-danger">Egypt.</span></h4></div>-->' +
        `<div class="contactUsimgs" style="width"100%; direction:ltr;"><img id="contactUsimgs" src="${imgArray[index]}" style="max-width:100%;pointer-events: none;">` +
        '<a id ="prevId" class="prev">&#10094;</a>' +
        '<a id ="nextId" class="next">&#10095;</a></div>' +
        '<div><span class="dot"></span>' +
        '<span class="dot"></span>' +
        '<span class="dot"></span>' +
        '<span class="dot"></span></div>--------------' +
        '</div>';
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    var dots = document.getElementsByClassName("dot");
    dots[index].classList.add("active");
    document.getElementById("nextId").onclick = () => {
        index++;

        if (index < imgArray.length) {
            document.getElementById("contactUsimgs").src = imgArray[index];

        } else {
            index = 0;
            document.getElementById("contactUsimgs").src = imgArray[index];
        }
        for (let i = 0; i < dots.length; i++) {
            //const element = array[i];
            dots[i].classList.remove("active");

        }

        dots[index].classList.add("active");
    };

    document.getElementById("prevId").onclick = () => {

        if (index == 0) {
            index = imgArray.length - 1;
            document.getElementById("contactUsimgs").src = imgArray[index];
        } else {
            index--;
            document.getElementById("contactUsimgs").src = imgArray[index];
        }

        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[index].classList.add("active");

    };

    dots[0].onclick = () => {
        document.getElementById("contactUsimgs").src = imgArray[0];
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[0].classList.add("active");
        index = 0;
    };
    dots[1].onclick = () => {
        document.getElementById("contactUsimgs").src = imgArray[1];
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[1].classList.add("active");
        index = 1;
    };
    dots[2].onclick = () => {
        document.getElementById("contactUsimgs").src = imgArray[2];
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[2].classList.add("active");
        index = 2;
    };
    dots[3].onclick = () => {
        document.getElementById("contactUsimgs").src = imgArray[3];
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }
        dots[3].classList.add("active");
        index = 3;
    };

    if (document.getElementById("contactUs").style.height <= "250px") {
        document.getElementById("contactUs").style.height = (screen.height * 0.80) + "px";
    }
    setTimeout(() => {
        toggleMenu();
    }, 350);
};

// Youm wa laila

const estikazMenNoum = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.estikazMenNoum();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const dokhoolWaKhroogMenMasged = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.dokhoolWaKhroogMenMasged();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
const dokhoolWakhroogMenManzel = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.dokhoolWakhroogMenManzel();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const ta3amWaShrap = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.ta3amWaShrap();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
const lebsWaKhal3Elthiab = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.lebsWaKhal3Elthiab();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const elzoagWaElgema3 = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.elzoagWaElgema3();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const elnoum = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.elnoum();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

const dokhoolWakhroogMenElkhalaa = () => {
    if (document.getElementById("azkarMain").style.height < screen.height - 80 + "px") {
        document.getElementById("output").style.height = screen.height + "px";
    }
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.dokhoolWakhroogMenElkhalaa();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const maTaquolEzaRaaytFiManamekMaTakrah = () => {
    clearPage("output");
    document.getElementById("output").style.height = "auto";
    const myAzkar = new Azkar();
    document.getElementById("output").innerText = myAzkar.maTaquolEzaRaaytFiManamekMaTakrah();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
// logo & clock section
const hour = document.getElementById("hour");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
let d;
let hr_r, min_r, sec_r;
const clock = setInterval(() => {
    d = new Date();
    sec_r = d.getSeconds() * 6;
    min_r = d.getMinutes() * 6;
    hr_r = d.getHours() * 30 + d.getMinutes() / 2;
    sec.style.transform = `rotate(${sec_r}deg`;
    min.style.transform = `rotate(${min_r}deg`;
    hour.style.transform = `rotate(${hr_r}deg`;

}, 1000);