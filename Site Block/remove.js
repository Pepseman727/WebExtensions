function UnlockPage(request, sender, sendResponse) {
    localStorage.removeItem('blocked');
    alert('Site unlocked');
    location.reload();
}

browser.runtime.onMessage.addListener(UnlockPage);