const counter = document.getElementById("countId");
const clickBtn = document.getElementById("btnClick");
const link = document.getElementById("lnk");


let count = 0;

function countElem() {
    count++;
    counter.innerText=count;
}

clickBtn.addEventListener('click', () => {
    countElem();
})

link.addEventListener('click', () => {
    countElem();
})
