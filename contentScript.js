window.onload = function () {
    updateAPI()
}

let lastUrl = location.href;
new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
        lastUrl = url;
        onUrlChange();
    }
}).observe(document, { subtree: true, childList: true });


function onUrlChange() {
    updateAPI()
}

async function updateAPI() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const videoId = urlParams.get('v')
    let nameV = 'demo';
    let user = 'nt4rever'
    let url = 'https://api.nt4rever.live/api/update?key=lactranh&user=' + user + '&name=' + nameV + '&url=' + videoId;
    await fetch(url);
}