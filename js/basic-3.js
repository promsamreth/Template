$(function () {
    $('form').on('submit', function (e) {
        e.preventDefault()
        let article = {
            title: $('#title').val(),
            desc: $('#desc').val(),
            image: $('#image').val()
        }
        appendCard(article)
    })
})
let content = ''
function appendCard(a) {
    //html()
    content += `
    <div class="col-12 col-sm-12 col-md-4 mt-4">
   
    <div class="card">

        <!-- Card image -->
        <div class="view overlay">
            <img class="card-img-top"
                src="${a.image}"
                alt="Card image cap">
            <a href="#!">
                <div class="mask rgba-white-slight"></div>
            </a>
        </div>

  
        <div class="card-body">

            <!-- Title -->
            <h4 class="card-title">${a.title}</h4>
            <!-- Text -->
            <p class="card-text">${a.desc}</p>
            <!-- Button -->
            <a href="#" class="btn btn-primary">Button</a>

        </div>

    </div>
</div>
`
    $('#row').html(content)
    $('#title').val(''),
        $('#desc').val(''),
        $('#image').val('')
}