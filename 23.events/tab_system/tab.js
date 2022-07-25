let titles = document.querySelectorAll('#tabs .tab-titles li');

for(let title of titles) {
    title.addEventListener('click', function () {
        //We retrieve the title's number
        let num = this.getAttribute('data-tabtitle');

        //We mask the previous div
        document.querySelector('#tabs > div.active').classList.remove('active');

        //We reactive the div
        document.querySelector('#tab' + num).classList.add('active');

        //We remove the previous active class
        document.querySelector('#tabs .tab-titles li.active').classList.remove('active');

        //We reactivate the good title
        this.classList.add('active');
    });
}