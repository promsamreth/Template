//object
let articles = [
    {
        title: 'harry potter',
        desc: 'good book',
        author: 'yeye'
    },
    {
        title: 'harry potter 1',
        desc: 'good book',
        author: 'yeye'
    },
    {
        title: 'harry potter 2',
        desc: 'good book',
        author: 'yeye'
    },
    {
        title: 'harry potter 3',
        desc: 'good book',
        author: 'yeye'
    },
    {
        title: 'harry potter 4',
        desc: 'good book',
        author: 'yeye'
    },
    {
        title: 'harry potter 5',
        desc: 'good book',
        author: 'yeye'
    },
]

$(function () {
    //darkmode button was clicked
    $('#darkmode').on('click',function(){
        $('body').addClass('bg-black')
        $('#defaultmode').on('click',function(){
        $('body').removeClass('bg-black')
        })
    })
    fetchArticle()
})

let content = ''
function fetchArticle() {
    for (a of articles) {
        content = `
 
            <div class="col-12 col-sm-4 col-md-4 col-lg-3 col-xl-2 w-100 c">
                <!-- Card -->
                <div class="card">

                    <!-- Card content -->
                    <div class="card-body">

                        <!-- Title -->
                        <h4 class="card-title">${a.title}</h4>
                        <p class="card-text">${a.desc}</p>
                        <p class="card-text">${a.author}</p>
                        <button class="btn btn-outline-danger waves" onclick="removeRow(this)">Delete</button>
                    </div>

                </div>
                <!-- Card -->
            </div>
        `
        $('#row').append(content)
    }
}
function removeRow(btn) {
    // console.log(btn)
    //find tr then -> remove it
    let ca = confirm('Are you sure to delete?')
    if(ca==true){
        let c = $(btn).parents('.c')
    c.remove()
    }
    
}