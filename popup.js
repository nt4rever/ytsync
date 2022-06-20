window.onload = function () {
    document.getElementById("getAPI").onclick = function () {
        getAPI()
    }
}

async function getAPI() {
    var user = document.getElementById('user').value
    let url = 'https://api.nt4rever.live/api/get?key=lactranh&user=' + user;
    await fetch(url).then(response => response.json())
        .then(data => {
            document.getElementById('content').innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/` + data.url + `" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        });

}