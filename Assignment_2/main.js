const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
let lineBreak = document.createElement('br');
thumbBar.appendChild(lineBreak);

let placeholder = document.createElement('p');
thumbBar.appendChild(placeholder);

for (let i = 1; i <= 5; i++) {

    const newImage = document.createElement('img');
    let srcAttribute = 'images/pic' + i + '.jpg';
    newImage.setAttribute('src', srcAttribute)
    thumbBar.appendChild(newImage);

    newImage.onclick = function () {
        let newSrcAttribute = newImage.getAttribute('src');
        displayedImage.setAttribute('src', newSrcAttribute);
        placeholder.innerHTML = 'Pic #' + i;
    }
}

/* Wiring up the Darken/Lighten button */
btn.onclick = function () {
    let className = btn.getAttribute('class');
    if (className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerHTML = 'lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }
    else {
        btn.setAttribute('class', 'dark');
        btn.innerHTML = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}
