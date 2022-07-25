const icone =`<span><i class="fas fa-check"></i></span>`

let tabLi = document.querySelector('ul li');

for (let li of tabLi) {
    li.addEventListener('click', function() {
        this.classList.toggle('active');
        if(this.classList.contains('active')) {
            this.innerHMTL = this.innerText + icone;
        } else {
            this.innerHMTL = this.innerText;
        }
    });
}