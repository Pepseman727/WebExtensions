browser.contextMenus.create({
    id: "Block site",
    title: "Block WebSite"
});

browser.contextMenus.create({
    id: "Unlock site",
    title: "Unlock WebSite"
})

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

browser.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "Unlock site") {
        browser.tabs.executeScript({
            file: "remove.js"
        });
        var querying = browser.tabs.query({
            active: true,
            currentWindow: true
        });
        querying.then(messageTab);
    }
});