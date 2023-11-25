import axios, { AxiosResponse } from "axios";

interface Book {
  id: string;
  bookName: string;
  author: string;
  color: string;
  rating: number;
  genre: string;
  date: string;
  cover: string;
  numRead: number;
}

const baseUrl = "http://localhost:3001/books";

const getAll = async (): Promise<Book[]> => {
  const response: AxiosResponse<Book[]> = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
