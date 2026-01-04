const gallery = [
    "../assets/img/blake-verdoorn-cssvEZacHvQ-unsplash.jpg",
    "../assets/img/cristian-palmer-XexawgzYOBc-unsplash.jpg",
    "../assets/img/damiano-baschiera-d4feocYfzAM-unsplash.jpg",
    "../assets/img/enrico-bet-IicyiaPYGGI-unsplash.jpg",
    "../assets/img/jeremy-bishop-EwKXn5CapA4-unsplash.jpg",
    "../assets/img/johannes-andersson-UCd78vfC8vU-unsplash.jpg",
    "../assets/img/joseph-barrientos-oQl0eVYd_n8-unsplash.jpg",
    "../assets/img/mink-mingle-g0Qdolm3K14-unsplash.jpg",
    "../assets/img/qingbao-meng-01_igFr7hd4-unsplash.jpg",
    "../assets/img/shifaaz-shamoon-sLAk1guBG90-unsplash.jpg"
]

function background() {
    const randomIndex = Math.floor(Math.random() * gallery.length)
    document.body.style.backgroundImage = `url("${gallery[randomIndex]}")`;
}
background();

setInterval(background, 15000)