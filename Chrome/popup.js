document.addEventListener('DOMContentLoaded', () => {
    let text = document.getElementById('btn-text');
    let state = false;

    text.addEventListener('click', () => {
        injectCSS();
        

        // if (!state) {
        //     chrome.scripting.insertCSS({
        //         target: { tabId: tab.id },
        //         files: ["dark-mode.css"]
        //     });
        //     state = !state;
        //     return;
        // }
        // chrome.scripting.insertCSS({
        //     target: { tabId: tab.id },
        //     file: ["light-mode.css"]
        // });
        // state = !state;
    })
})

function injectCSS() {
    chrome.tabs.query({active:true, currentWindow: true}, (tabs) => {
        chrome.scripting.insertCSS({
            target: { tabId: tabs[0].id },
            files: ["dark-mode.css"]
        });
    })
}