/* icons */
const iconOne = document.querySelector(".iconOne");
const iconTwo = document.querySelector(".iconTwo");
const iconThree = document.querySelector(".iconThree");
const iconFour = document.querySelector(".iconFour");
const iconArray = [iconOne, iconTwo, iconThree, iconFour];
/* categories */
const catOne = document.querySelector(".score-type-one");
const catTwo = document.querySelector(".score-type-two");
const catThree = document.querySelector(".score-type-three");
const catFour = document.querySelector(".score-type-four");
const catArray = [catOne, catTwo, catThree, catFour];
/* scores */
const scoreOne = document.querySelector(".score-one");
const scoreTwo = document.querySelector(".score-two");
const scoreThree = document.querySelector(".score-three");
const scoreFour = document.querySelector(".score-four");
const scoreArray = [scoreOne, scoreTwo, scoreThree, scoreFour];
/* result */
const result = document.querySelector(".result-number");

async function fill() {

    const requestURL = "data.json";
    const request = new Request(requestURL);

    const response = await fetch(request);
    const datas = await response.json();

    populate(datas);
}

function populate(datas) {
    let total = 0;
    for(let i = 0; i < 4; i++) {
        iconArray[i].setAttribute("src", datas[i].icon);
        catArray[i].textContent = datas[i].category;
        scoreArray[i].textContent = datas[i].score;
        total += datas[i].score;
    }
    result.textContent = Math.floor(total / datas.length);
}

fill();