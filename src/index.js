console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function getImages() {
  fetch(imgUrl)
    .then(resp => resp.json())
    .then (images => {
      const imgs = images.message
      let imgsArray = imgs.map((img) => {
        let i = `<img src=${img}>`
        return i
      })
      imgsArray.forEach(element => {
        container.innerHTML += element
      })
    })
}
getImages();


function getDogBreed() {
  let dog_list = [];
  const dogBreeds = document.getElementById('dog-breeds');
  fetch(breedUrl)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then(data => {
      dog_list = data.message;
      for (dog in dog_list) {
        let li = document.createElement('li');
        let node = document.createTextNode(dog);
        li.appendChild(node);
        container.appendChild(li);
      }
    });
}
getDogBreed();


// ## Challenge 3

// Once all of the breeds are rendered in the `<ul>`, add JavaScript so that, when
// the user clicks on any one of the `<li>`s, the font color of that `<li>`
// changes. This can be a color of your choosing.
