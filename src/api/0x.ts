import axios from "axios";

// const root_url =
// "https://like-kilometers-interracial-rejected.trycloudflare.com";
const root_url = "https://dex-backend-hb26.onrender.com";
// const root_url = "http://127.0.0.1:3006";

export async function getPrice(searchParams: string) {
  console.log("fetching price with searchParams", searchParams);
  try {
    const res = await axios.post(`${root_url}/get_price`, {
      searchParams,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getQuote(searchParams: string) {
  console.log("searchParams", searchParams);
  try {
    const res = await axios.post(`${root_url}/get_quote`, {
      searchParams,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
}
