function ImageErrorView({ message }) {
  return (
    <div>{`На жаль, такі картинки не знайдено. Помилка - ${message}`}</div>
  );
}

export default ImageErrorView;
