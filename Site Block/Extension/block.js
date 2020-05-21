function BlockPage(request, sender, sendResponse) {
    document.body.textContent = "";

    let warning = document.createElement('h1');

    warning.textContent = "Sorry, but you have no access to this WebSite :(";
    document.body.appendChild(warning);

    let regex = /(.*:)\/{2,}([\w\-\._]+)?/igu

    let blockedURL = location.href.match(regex);
    console.log(blockedURL);

   /* let manifest = browser.runtime.getManifest();
    console.log(manifest);*/

    getFile('manifest.json');

}

browser.runtime.onMessage.addListener(BlockPage);

var DATA;

function getFile(fileName) {

    var request = new XMLHttpRequest();
    request.open('GET', fileName);
    request.onloadend = function () {
        parse(request.responseText);
    }
    request.send();
}

function parse(obj) {

    DATA = JSON.parse(obj);

    console.log(DATA);
}