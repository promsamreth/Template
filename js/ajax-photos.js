$(function () {
    fetchArticle()
})

function fetchArticle() {
    $.ajax({
        url: 'https://jsonplaceholder.typicode.com/photos',
        method: 'GET',
        success: function (res) {
            console.log(res)
            appendToTable(res)
        },
        error: function (er) {
            console.log(er);
        }
    })
}
let content = ''
function appendToTable(articles) {
    //loop articles then show to table
    for (a of articles) {
        content += `
    <tr>
        <th scope="row">${a.id}</th>
        <td>${a.title}</td>
        <td>${myFunction(a.url)}</td>
        <td><img src=${a.IMAGE}/></td>
    </tr>
        `
    }
    $('tbody').html(content)
}
function myFunction(url) {
    let str = "placeholder.com";
    let res = url.substring(12, 27);
    return res
  }