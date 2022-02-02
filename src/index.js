console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dog_list = [];
const dogBreeds = document.getElementById('dog-breeds');

const dropdown = document.querySelector("#breed-dropdown")
dropdown.addEventListener('change', handleChange)


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
  fetch(breedUrl)
    .then(response => {
      return response.json()
    })
      
    .then(data => {
      dog_list = Object.keys(data.message);
      appendLi(dog_list)
    });
}
getDogBreed();


function appendLi(breeds) {
  for (let dog of breeds) {
    console.log(dog)
    let li = document.createElement('li');
    li.innerText = dog
    dogBreeds.appendChild(li);
    li.addEventListener('click', () => {
      li.style.color = 'blue';
    })
  }
}


function handleChange(event) {
  //debugger;
  const letter = event.target.value
  //console.log(dog_list)
  const filteredBreed = dog_list.filter(breed => breed.startsWith(letter));
  dogBreeds.innerHTML = ''
  appendLi(filteredBreed)
  // filter out hte breeds that start with the letter
}
handleChange();
