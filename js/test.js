function show() {
    document.querySelector(".background").className="background show";
}

function close() {
    document.querySelector(".background").className="background";
}

document.querySelector("#show").addEventListener("click",show);

document.querySelector("#close").addEventListener("click",close);

function show2() {
    document.querySelector(".background2").className="background2 show2";
}

function close2() {
    document.querySelector(".background2").className="background2";
}

document.querySelector("#show2").addEventListener("click",show2);

document.querySelector("#close2").addEventListener("click",close2);