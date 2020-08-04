const contextMenuProperties = {
    id: 'hanzi-lookup-for-chrome',
    title: "Lookup the characters '%s'",
    contexts: ['selection']
};

chrome.runtime.onInstalled.addListener( () => {
    chrome.contextMenus.create(contextMenuProperties, () => {
        if (chrome.runtime.lastError) {
            console.error(chrome.runtime.lastError.message);
        };
    });
});

// chrome.contextMenus.onClicked.addListener((info) => {
//     let textToTranslate = info.selectionText;
// });