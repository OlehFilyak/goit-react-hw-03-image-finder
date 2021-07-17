const BASE_URL = "https://pixabay.com/api/";
const KEY = "21971699-e4871e677dfd96d166595cbee";

export default function test() {
  fetch(`${BASE_URL}/?key=${KEY}&q=cat&page=1&image_type=photo`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}

// https://pixabay.com/api/?key=21971699-e4871e677dfd96d166595cbee&q=yellow+flowers&image_type=photo
