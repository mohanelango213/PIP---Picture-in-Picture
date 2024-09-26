
chrome.tabs.onUpdated.addListener((tabID, changeInfo, tab) => {
    if (tab.url?.startsWith("chrome://")) return undefined; // To avoid throwing errors for browser urls
    if (tab.active && changeInfo.status === "complete") {
        chrome.scripting.executeScript({
            target: {tabId: tabID},
            files: ["script.js"]
        });
    }
})