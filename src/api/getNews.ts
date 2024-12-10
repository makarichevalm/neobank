import axios from 'axios'
const NewsKeyAPI: string = "d43a2857e0ee4e77897e15c49a37bd48"
const baseURL: string = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${NewsKeyAPI}`;
const getNews = async (url: string): Promise<any> => {
  try{
    const response = await axios.get(url);
    console.log("done");
    return response.data.articles;
  }
  catch(error){
    console.error(error);
    return "Sorry, the news can't be uploaded now. Try again later";
  }
};
export const newsApi={baseURL, getNews}