
//document.getElementById("our_p_tag").addEventListener("click", logger);

document.addEventListener("DOMContentLoaded", function(){
    const pTag = document.getElementById('our_p_tag');
    if(pTag){
        pTag.addEventListener("click", logger);
    } else{
        console.error("ID 'our_p_tag' existiert nicht!")
    }
});



function logger(){
    console.log(55);
}

