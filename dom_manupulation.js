let title = document.getElementById('website_title');

document.getElementById('test_div').innerHTML = '<p>Test</p>';



document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('grenn_bg');

document.getElementById('test_input').value = 123123;
//document.getElementById('test_input').setAttribute('value', 123);

console.log(document.getElementById('test_input').value = 123123);

function myFunction(){
document.getElementById("myH1").setAttribute("class", "democlass");

}


function toggleDNone(){
    document.getElementById(id).classList.toggle('d-none');
}