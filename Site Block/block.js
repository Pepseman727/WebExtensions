//На всякий случай
/* function GetURL() {
    let regex = /(.*:)\/{2,}([\w\-\._]+)?/igu

    let blockedURL = location.href.match(regex);
    console.log(blockedURL);
    return blockedURL;
}

function AddURL() {
    let url = GetURL();
    localStorage.setItem('site', url);

}*/

function BlockPage(request, sender, sendResponse) {
    document.body.textContent = "";
    document.body.style.cssText = 'background-color: #f11b1b; text-align: center;'

    let warning = document.createElement('h1');
    warning.style.cssText = 'color: white;  font-family: "Calibri";  padding: 3em 0;  font-size: 20px;'

    warning.textContent = "Sorry, but you have no access to this WebSite :(";
    document.body.appendChild(warning);

    localStorage.setItem('blocked', 'YES');
}




browser.runtime.onMessage.addListener(BlockPage);