function RemoveSite() {
    localStorage.removeItem('blocked');
    alert("Site unlocked");
    browser.tabs.update();
}
