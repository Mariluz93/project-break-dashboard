const nameInput = document.getElementById('name-input');
const urlInput = document.getElementById('url-input');
const addLinkButton = document.getElementById('add-link-button');
const linksContainer = document.getElementById('links-container')


function linksDom(link) {
    const createLi = document.createElement('li');
    createLi.innerHTML = `
        <a href="${link.url}" target="_blank">${link.name}</a>
        <button>X</button>
    `;
    const deleteButton = createLi.querySelector('button');
    linksContainer.appendChild(createLi);
    
    deleteButton.addEventListener('click', () => {
        createLi.remove();

        let linksList = JSON.parse(localStorage.getItem("link")) || [];
        linksList = linksList.filter(l => l.url !== link.url);
        if (linksList.length === 0) {
            localStorage.removeItem("link");
        } else {
            localStorage.setItem("link", JSON.stringify(linksList));
        };

        console.log('Esto es lo que queda en el localStorage después de borrar tu enlace: ', JSON.parse(localStorage.getItem("link")) || [])
    })
}

function linksStorage() {
    linksContainer.innerHTML = "";
    let linksList = JSON.parse(localStorage.getItem("link")) || [];
    for (let i = 0; i < linksList.length; i++) {
        linksDom(linksList[i]);
    }
}

linksStorage();

addLinkButton.addEventListener('click', () => {
    const name = nameInput.value;
    const url = urlInput.value;
    if ((name.trim() !== '' && url.trim() !== '')) {
        let linksList = JSON.parse(localStorage.getItem("link")) || [];
        linksList.push({ name, url });
        localStorage.setItem("link", JSON.stringify(linksList));
        linksStorage()

    }
    nameInput.value = '';
    urlInput.value = '';
})

console.log("Esto es lo que hay en localStorage:", JSON.parse(localStorage.getItem("link")) || []);
