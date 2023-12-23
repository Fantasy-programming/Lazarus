import axios, { AxiosResponse } from "axios";
import { Book } from "@ctypes/book";

const baseUrl = "http://localhost:3001/books";

const getAll = async (): Promise<Book[]> => {
  const response: AxiosResponse<Book[]> = await axios.get(baseUrl);
  return response.data;
};

export default { getAll };
