(() => {

    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.command === 'disable') {
            logAnchorTags();
        }
        sendResponse({ result: 'success'});
    });

    logAnchorTags = () => {
        const anchors = document.querySelectorAll('a');

        anchors.forEach(anchor => {
            anchor.setAttribute('onClick', 'return false;');
            anchor.style.color = 'gray';
            anchor.style.textDecoration = 'line-through';
            anchor.title = 'This link has been disabled by the extension.';
        });
    };

})();