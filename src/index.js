console.log('%c HI', 'color: firebrick')

const container = document.querySelector("#dog-image-container")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'
let dog_list = [];

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
  // let dog_list = [];
  const dogBreeds = document.getElementById('dog-breeds');
  fetch(breedUrl)
    .then(response => {
      return response.json()
    })
      
    .then(data => {
      dog_list = data.message;
      for (dog in dog_list) {
        let li = document.createElement('li');
        let node = document.createTextNode(dog);
        li.appendChild(node);
        dogBreeds.appendChild(li);
        li.addEventListener('click', () => {
          li.style.color = 'blue';
        })
      }
    });
}
getDogBreed();

function handleChange(event) {
  debugger;
  const letter = event.target.value
  //console.log(dog_list)
  const filteredBreed = dog_list.filter(breed => breed.startsWith(letter));

  // filter out hte breeds that start with the letter
}

handleChange();

// ## Challenge 4

// Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
// so that the user can filter breeds that start with a particular letter using a
// [dropdown](https://www.w3docs.com/learn-html/html-select-tag.html).

// For example, if the user selects 'a' in the dropdown, only show the breeds with
// names that start with the letter a. For simplicity, the dropdown only includes
// the letters a-d. However, we can imagine expanding this to include the entire
// alphabet.


// function myFunction() {
//   document.getElementById("breed-dropdown").classList.toggle("show");
// }

// function filterFunction() {
//   var input, filter, ul, li, a, i;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("breed-dropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }
