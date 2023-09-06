const button = document.querySelector('#send');

console.log(button)
button.addEventListener('click', async(event) => {
    event.preventDefault();
    
   const addImagen = document.querySelector('#addImagen');
   const textTitlle = document.querySelector('#textTitlle');
   const textContentpost = document.querySelector('#textContentpost');
   
      const createPost = {
        imagen: addImagen.value,
        titulo:textTitlle.value,
        contenido:textContentpost.value,
        usuario: {
            id: 1,
            nombre: "Emi",
            apellido: "De Leon",
            avatar: "https://ca.slack-edge.com/TCRFJBKB6-U0275TN36E8-db6aee7f44f9-512",
        },
        fechaCreacion: "2023-08-22"
      
    };
    console.log(createPost)

   await createData(createPost);  
   // await reciveData();

})

const createData = async(post) =>{
    fetch(`http://localhost:3005/publicaciones`,{
        method: "POST",
        headers: {
            "Content-type": "application/json;charset=UTF-8"
        },
        body: JSON.stringify(post)
    })
    .then((response) => response.json())
    .then((publicacion) => {
        if(publicacion){
            window.location.href = "./index.html";
        }
    })
}