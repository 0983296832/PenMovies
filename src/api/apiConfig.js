const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "dbb5c8ecb56b32e6e5779bf8e415862c",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
