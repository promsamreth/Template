$(function () {
    fetchArticle()
    // to get value from input
    $('#searchArticle').on('keyup', function () {
        console.log($('#searchArticle').val());

        searchArticle($('#searchArticle').val())


    })

    $('#callModal').on('click', function () {
        $('#modalArticle').modal('show') //popup modal when btn clicked
    })
    $('#save').on('click', function () {
        console.log($('#title').val());
        let article = {
            TITLE: $('#title').val(),
            DESCRIPTION: $('#desc').val(),
            IMAGE: $('#image').val()
        }
       if ($('#modalTitle').text()=="Add"){
           addArticle(article)
       }else{
           updateArticle(article,$('#aid').val())
       }

    })
})
function searchArticle(title) {
    $.ajax({
        url: `http://110.74.194.124:15011/v1/api/articles?title=${title}&page=1&limit=15`,
        method: 'get',
        success: function (res) {
            appendToTable(res.DATA)
        },
        error: function (er) {
            console.log(er);

        }
    })
}
function addArticle(article) {
    $.ajax({
        url: `http://110.74.194.124:15011/v1/api/articles`,
        method: 'post',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic QU1TQVBJQURNSU46QU1TQVBJUEBTU1dPUkQ="
        },
        data: JSON.stringify(article),
        success: function (res) {
            console.log(res);
            fetchArticle()
            $('#modalArticle').modal('hide') //hide modal

        },
        error: function (er) {
            console.log(er);

        }
    })
}
function fetchArticle() {
    $.ajax({
        url: 'http://110.74.194.124:15011/v1/api/articles?page=1&limit=15',
        method: 'GET',
        success: function (res) {
            console.log(res)
            appendToTable(res.DATA)
        },
        error: function (er) {
            console.log(er);
        }
    })
}

function appendToTable(articles) {
    let content = ''
    //loop articles then show to table
    for (a of articles) {
        content += `
    <tr>
        <th scope="row">${a.TITLE}</th>
        <td>${a.DESCRIPTION}</td>
        <td>${formatDate(a.CREATED_DATE)}</td>
        <td><img src=${a.IMAGE}/></td>
        <td><button class="btn btn-outline-success waves" onclick="goToDetail('${a.ID}')">View</button></td>
        <td><button class="btn btn-outline-danger waves" onclick="deleteArticle('${a.ID}')">Delete</button></td>
        <td><button class="btn btn-outline-danger waves" onclick="editArticle(this)" data-id=${a.ID}>Edit</button></td>
    </tr>
        `
    }
    $('tbody').html(content)
}
function editArticle(btnEdit) {
    //call modal
    $('#modalArticle').modal('show')
    //get value
    let title = $(btnEdit).parents().siblings().eq(0).text()
    let desc = $(btnEdit).parents().siblings().eq(1).text()
    let imageURL = $(btnEdit).parents().siblings().eq(3).find('img').attr('src')
    console.log(imageURL);
    console.log($())
    $('#title').val(title)
    $('#desc').val(desc)
    $('#imgae').val(imageURL)
    $('#aid').val($(btnEdit).attr('data-id'))
}
function updateArticle(article,id){
    $.ajax({
        url: `http://110.74.194.124:15011/v1/api/articles/${id}`,
        method: 'put',
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Basic QU1TQVBJQURNSU46QU1TQVBJUEBTU1dPUkQ="
        },
        data: JSON.stringify(article),
        success: function(res){
            console.log(res);
            fetchArticle()
            $('#modalArticle').modal('hide') //hide modal
            
        },
        error: function(er){
            console.log(er);
            
        }
    })
}
function formatDate(createDate) {
    let year = createDate.substring(0, 4)
    let month = createDate.substring(4, 6)
    let day = createDate.substring(6, 8)
    let date = [year, month, day]

    return date.join('/')
}
function goToDetail(id) {
    window.location.href = `detail.html?id=${id}`
}
function deleteArticle(articlesID) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.value) {
            $.ajax({
                url: `http://110.74.194.124:15011/v1/api/articles/${articlesID}`,
                method: 'delete',
                success: function (res) {
                    console.log(res)
                    fetchArticle()
                },
                error: function (er) {
                    //console.log(er);
                    alert('Successful')
                }
            })
            swalWithBootstrapButtons.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                'Cancelled',
                'Your imaginary file is safe :)',
                'error'
            )
        }
    })

}