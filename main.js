/* console.log('hello depuis main');
const technosDiv = document.querySelector('#technos');

let technos = [
    {id: 1, name: 'Angular', description: 'le framework front-end', url: 'https://angular.io/'},
    {id: 2, name: 'Node', description: 'JavaScript côté backe-end', url: 'https://nodejs.org/en/'},
    {id: 3, name: 'MongoDB', description: 'la célèbre base noSQL', url: 'https://www.mongodb.com/'},
    {id: 4, name: 'PWA', description: 'rendre vos applications ++', url: 'https://developer.mozilla.org/en-US/Apps/Progressive'}
];

function loadTechnologies(technos) {
    const allTechnos = technos
        .map(t => `<div><b>${t.name}</b> ${t.description} - site officiel </div>`)
        .join('');

    technosDiv.innerHTML = allTechnos; 
}

loadTechnologies(technos);  */

console.log('hello depuis main');
const technosDiv = document.querySelector('#technos');

function loadTechnologies(technos) {
    fetch('http://localhost:3001/technos')
        .then(response => {
            response.json()
                .then(technos => {
                    const allTechnos = technos.map(t => `<div><b>${t.name}</b> ${t.description}  <a href="${t.url}">site de ${t.name}</a> </div>`)
                            .join('');
            
                    technosDiv.innerHTML = allTechnos; 
                });
        })
        .catch(console.error);
}

loadTechnologies(technos);

if(navigator.serviceWorker) {
    navigator.serviceWorker.register('sw.js')
                            .catch(err => console.error);
}


if(window.caches) {
    /* caches.open('veille-techno-1.0');
    caches.open('other-1.0');
    caches.keys().then(console.log); */

    caches.open('veille-techno-1.0').then(cache => {
        cache.addAll([
            'index.html',
            'main.js',
            'style.css',
            'vendors/bootstrap4.min.css',
            'add_techno.html',
            'add_techno.js',
            'contact.html',
            'contact.js'
        ]);
    });
}