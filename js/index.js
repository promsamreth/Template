// get article

function fetchArticle() {
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        // to check ready state == 4 (response ready)
        if (this.readyState == 4 && this.status == 200) {
            let article = JSON.parse(this.response)
            appendTable(article)
        }
    }
    xhr.open('get', '../Json/all.json')
    xhr.send()
}
let content = ''
function appendTable(article){
    for(a of article){
        content += `
            <tr>
                <th scope="row">${a.name}</th>
                <td>${a.region}</td>
                <td>${a.capital}</td>
                <td>${a.population}</td>
                <td><img src=${a.flag} /></td>
            </tr>
        `
    }
    let tbody = document.querySelector('tbody');
    tbody.innerHTML = content
}
fetchArticle()