function fetchImages(tag) {
  const BASE_URL = "https://pixabay.com/api/";
  const KEY = "21971699-e4871e677dfd96d166595cbee";

  return fetch(`${BASE_URL}/?key=${KEY}&q=${tag}&page=1&image_type=photo`).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }

      return Promise.reject(new Error(`Немає картинок з таким іменем ${tag}`));
    }
  );
}

const api = {
  fetchImages,
};

export default api;
