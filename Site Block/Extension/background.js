browser.contextMenus.create({
    id: "Block site",
    title: "Block WebSite"
});

function messageTab(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
        replacement: "Message from the extension!"
    });
}

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "Block site") {
        browser.tabs.executeScript({
            file: "block.js"
        });

        var querying = browser.tabs.query({
            active: true,
            currentWindow: true
        });
        querying.then(messageTab);
    }
});