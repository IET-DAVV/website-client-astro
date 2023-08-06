const API_URL = import.meta.env.PUBLIC_API_URL;

export const API = {
  get: async (url: string) => {
    console.log(API_URL);
    return fetch(`${API_URL}${url}`);
  },
  post: async (url: string, data: any) => {
    return fetch(`${API_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
