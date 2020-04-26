function messageTab(tabs) {
    browser.tabs.sendMessage()
}

browser.tabs.executeScript({
    file: "block.js"
});