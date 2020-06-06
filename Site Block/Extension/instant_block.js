function BlockSite() {
    document.body.textContent = "";
    document.body.style.cssText = 'background-color: #f11b1b; text-align: center;'

    let warning = document.createElement('h1');
    warning.style.cssText = 'color: white;  font-family: "Calibri";  padding: 3em 0;  font-size: 20px;'

    warning.textContent = "Sorry, but you have no access to this WebSite :(";
    document.body.appendChild(warning);

}

let blocked = localStorage.getItem('blocked');
if (blocked === 'YES') {
    BlockSite();
}
else {
    console.log('HUY');
}
//«апускаетс€ скрипт, провер€ю Ч есть ли URL в списке запрещЄнных и потом блокирую
