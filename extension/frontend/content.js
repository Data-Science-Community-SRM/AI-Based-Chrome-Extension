(() => {

    disableAnchorTags = () => {
        const anchors = document.querySelectorAll('a');

        anchors.forEach(anchor => {
            anchor.setAttribute('onClick', 'return false;');
            anchor.style.color = 'gray';
            anchor.style.textDecoration = 'line-through';
            anchor.style.cursor = 'pointer';
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
            });
            anchor.title = 'This link has been disabled by the extension.';
        });
    };

    disableAnchorTags();

})();