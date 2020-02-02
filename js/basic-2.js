$(function(){

    roundBox()

    // div.animate({
    //     left: '250px',
    //     opacity: '0.5',
    //     height:'150px',
    //     width:'150px'
    // },2000 , function(){

    // })


    // $('button').on('click', function(){
    //     $('#demo').fadeIn(3000, function(){
    //         $(this).fadeOut(3000,function(){
    //             $(this).fadeIn(2000,function(){
    //                 $(this).fadeTo(2000,0.1)
    //             })
    //         })
    //     })


    //     // $('#demo').toggle(2000,
    //     //     function(){
    //     //         $('#demo').toggle(2000)
    //     //     }
    //     // )
    // })
})

function roundBox(){
    let div= $('#demo')
    div.animate({
        left: 1300
    }, 2000)
    .animate({
        top: 600
    }, 2000)
    .animate({
        left : 0
    }, 2000)
    .animate({
        top: 0
    }, 2000, function(){
        roundBox()
    })
}