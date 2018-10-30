const fetchNewsApi = async () => {
  try {
    let response = await fetch('https://gapi.xyz/api/V1/?q=jambret&max=10');
    return response.json();
  } catch (e) {
    console.error(e);
    return [];
  }
};

export default fetchNewsApi;
