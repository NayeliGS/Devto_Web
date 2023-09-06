document.addEventListener("DOMContentLoaded", () => {
    const cardsContainer = document.getElementById("cards-container")
    let cardsHtml = ""

    fetch("http://localhost:3005/publicaciones")
        .then((response) => response.json())
        .then((publicaciones) => {
            publicaciones.map((publicacion) => {
                const cardsTemplate = `<div class="Cards_1 p-3 mb-3">
    <a href="./post.html?${publicacion.id}">
    <div class="card-body2 ps-1 d-flex justify-content-center">
       <img class="bestCSS" title="Designed by Los Costenos" src="${publicacion.imagen}" alt="Image not available">
    </div>
  </a>
    <div class="data__profile d-flex">
        <div>
            <img class="photo__profile" src="${publicacion.usuario.avatar}" alt="">
        </div>

        <div class="day__nameprofile ps-2">
            <div class="name__profile">${publicacion.usuario.nombre} ${publicacion.usuario.apellido}</div>
            <div class="day__profile"> ${publicacion.fechaCreacion}</div>
        </div>  
    </div>

    <p class="card__secondary__tittle pt-2 "><strong>🔥 ${publicacion.titulo}</strong></p>

    <div class="zone__hashtag d-flex">
        <div class="cards_hashtag ps-1">#webdev</div>
        <div class="cards_hashtag ps-5">#beginners</div>
        <div class="cards_hashtag ps-5">#css</div>
        <div class="cards_hashtag ps-5">#tooling</div>   
    </div>

    <div class="last__iconos__coments ps-4 pt-4 d-flex justify-content-between">

        <div class="reactions__comments d-flex justify-content-between">

            <div class="box__images d-flex">
                <img class="icon__bg" src="https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg" width="18" height="18" alt="Unicorn">
                <img class="icon__bg" src="https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg" width="18" height="18" alt="Fire">
                <img class="icon__bg" src="https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg"width="18" height="18" alt="Raised Hands">
                <img class="icon__bg" src="https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg"width="18" height="18" alt="Exploding Head">
                <img class="icon__bg" src="https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"width="18" height="18" alt="Like">
                <div class="reactions ps-1">38 Reactions</div> 
            </div>

            <div class="zone__comments d-flex justify-content-evenly">
                <svg class="crayons-icon " width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"></path></svg>
                <div class="comments">9 coments</div> 
            </div>

        </div>

        <div class="zone__reading d-flex">
            <div class="min__read pt-1">4 min read</div> 
            <svg class="crayons-icon c-btn__icon" aria-hidden="true" focusable="false" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"></path></svg> 
        </div>

    </div>

    <div class="profile__comments pt-4 d-flex">
        <div>
            <img class="photo__profile" src="./img/main_article/f451a206-11c8-4e3d-8936-143d0a7e65bb.webp" alt="">
        </div>

        <div class="text__comment ps-3">
            <div class="name__profile">Ben Halpern  4 days ago</div>
            <div class="comment">The value of Web3 as a blockchain technology was very speculative. If we all agree to use this one token, the early adopters of that ecosystem are richly rewarded.

                There is a lot of incentive to pump the technology, and plenty of reason to dump if you feel like enthusiasm is waning.
                See more</div>
        </div>  
    </div>

</div>`
                 // concatenacion de string
                cardsHtml += cardsTemplate
            })
            // Aqui se inserta el codigo html programaticamente
            cardsContainer.innerHTML = cardsHtml  
        })
        .catch((error) => {
            console.log(error)
             // Aqui se inserta el codigo html programaticamente
            cardsContainer.innerHTML = cardsHtml
        })

    
   
   
})