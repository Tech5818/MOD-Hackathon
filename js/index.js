const popup_btn= document.querySelector("#popup_btn");
const popup_layer = document.querySelector('dialog');
const popup_bg = document.querySelector('#popup_bg');
const body = document.querySelector('body');
const popup_close = document.querySelector('#popup_x_btn');

popup_btn.addEventListener("click", () => {
    popup_layer.showModal();
    body.style.position ="fixed";
    popup_bg.style.display = "block";
})

popup_close.addEventListener("click", ()=> {
    popup_layer.close();
    body.style.position = "static";
    popup_bg.style.display = "none";
})

const problem_icon_1 = document.querySelector('#problem_icon_1');
const problem_icon_2 = document.querySelector('#problem_icon_2');
const problem_icon_3 = document.querySelector('#problem_icon_3');
const problem_icon_value_1 = document.querySelector('#problem_icon_value_1');
const problem_icon_value_2 = document.querySelector('#problem_icon_value_2');
const problem_icon_value_3 = document.querySelector('#problem_icon_value_3');
const problem_icon_value = document.querySelector('#problem_value');

let cheaks = false;

problem_icon_1.addEventListener("mouseover", () => {
    problem_icon_1.innerText = "1";
    problem_icon_1.style.transform = 'translate(0)';
    problem_icon_1.style.width = '80px';
    problem_icon_1.style.borderRadius = '50%';
    problem_icon_1.style.height = '80px';
    problem_icon_1.style.fontSize = '55px';
    problem_icon_2.style.transform = 'translate(0)';
    problem_icon_3.style.transform = 'translate(0)';
    problem_icon_value.style.color = 'rgba(255, 255, 255, 1)';
    cheaks = true;
})
console.log(cheaks);
const again = document.querySelector('.again');

again.addEventListener("click", () => {
    problem_icon_1.style.transform = 'translate(260px, 226px)';
    problem_icon_1.style.width = '400px';
    problem_icon_1.style.height = '100px';
    problem_icon_1.style.fontSize = '80px';
    problem_icon_1.style.borderRadius = '20px';
    problem_icon_2.style.transform = 'translate(400px, 0)';
    problem_icon_3.style.transform = 'translate(400px, -226px)';
    problem_icon_value.style.color = 'rgba(255, 255, 255, 0)';
    problem_icon_1.innerText = "설명 보기";
    cheaks = false;
})

const problem_img_div = document.querySelector('.problem_img');
const problem_img = document.querySelector('#problem_img');

problem_img_div.addEventListener('mouseover', ()=> {
    if (cheaks == true) {
        again.style.display = 'block';
        problem_img.style.filter = 'blur(6px)';
    } else {
        again.style.display = 'none';
        problem_img.style.filter = 'none';
    }
})

