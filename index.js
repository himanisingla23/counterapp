
$('document').ready(()=>{
    let counter = 0
    $('#dec').attr('disabled',true)

// change background-color
    if( counter%2 == 0){
        $('.main').css('background-color','lightblue')
        $('.counter').css('color','white')
    }
    else{
        $('.main').css('background-color','grey')
        $('.counter').css('color','red')
    }

    // decrement function
    $('#dec').click(()=>{
        if(counter <= 1){
            counter--;
            $('#dec').attr('disabled',true)
        }
        else if(counter <= 10){
            counter--;
            $('#inc').attr('disabled',false)
        }
        else {
            counter --;
        }
        if( counter%2 == 0){
            $('.main').css('background-color','lightblue')
            $('.counter').css('color','white')
        }
        else{
            $('.main').css('background-color','grey')
            $('.counter').css('color','red')
        }
        $('.counter').text(counter)
    })

// reset function
    $('#reset').click(()=>{
        counter = 0;
        $('#dec').attr('disabled',true)
        $('#inc').attr('disabled',false)
        $('.counter').text(counter)
        if( counter%2 == 0){
            $('.main').css('background-color','lightblue')
            $('.counter').css('color','white')
        }
        else{
            $('.main').css('background-color','grey')
            $('.counter').css('color','red')
        }
    })
// increment function
    $('#inc').click(()=>{
        if(counter >= 9){
            counter++;
            $('#inc').attr('disabled',true)
        }
        else if(counter >= 0){
            counter++;
            $('#dec').attr('disabled',false)
        }
        else{
            counter++;
        }
        if( counter%2 == 0){
            $('.main').css('background-color','lightblue')
            $('.counter').css('color','white')
        }
        else{
            $('.main').css('background-color','grey')
            $('.counter').css('color','red')
        }
        $('.counter').text(counter)
    })
})
