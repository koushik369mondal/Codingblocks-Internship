document.body.style.backgroundColor = 'lightpink';

let header = document.createElement('div');
let sidebar = document.createElement('div');
let content1 = document.createElement('div');
let content2 = document.createElement('div');
let footer = document.createElement('div');

header.style.backgroundColor = 'white';
header.style.height = '100px';
header.style.width = '50px';

sidebar.style.backgroundColor = 'lightgray';
sidebar.style.height = '50px';
sidebar.style.width = '60px';


content1.style.backgroundColor = 'lightblue';
content1.style.height = '60px';
content1.style.width = '70px';

content2.style.backgroundColor = 'lightyellow';
content2.style.height = '70px';
content2.style.width = '80px';

footer.style.backgroundColor = 'darkgray';
footer.style.height = '80px';
footer.style.width = '90px';

let body = document.body;
body.appendChild(header);
body.appendChild(sidebar);
body.appendChild(content1);
body.appendChild(content2);
body.appendChild(footer);
