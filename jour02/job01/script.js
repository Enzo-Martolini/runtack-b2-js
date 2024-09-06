document.body.style.backgroundColor = "purple"

function handle(evnt){
    console.log(window.innerWidth)

    if(window.innerWidth>=1337)
    {
        console.log("condition atteinte")
        document.body.style.backgroundColor = "#ffb703"

    } else if (window.innerWidth<=1336 && window.innerWidth >= 505 ) {
        document.body.style.backgroundColor = "#d90429"
    } else {
        document.body.style.backgroundColor = "#003049"
    }

}

  window.onresize = handle;

