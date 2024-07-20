let title = document.getElementById('website_title');

console.log(title.innerHTML);

title.innerHTML = "Bayrische Motoren Werke";


document.getElementById('test_div').innerHTML = '<p>Test</p>';



document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('grenn_bg');

document.getElementById('test_input').value = 123123;