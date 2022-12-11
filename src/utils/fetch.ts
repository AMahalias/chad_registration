const BASE_URL = 'https://vast-basin-98801.herokuapp.com';

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

type RequestMethod = 'GET' | 'POST';

function request<T>(
  url: string,
  method: RequestMethod = 'GET',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any = null,
): Promise<T> {
  const options: RequestInit = { method };

  if (data) {
    options.body = JSON.stringify(data);
    options.headers = {
      'Content-Type': 'application/json; charset=UTF-8',
    };
  }

  return wait(300)
    .then(() => fetch(BASE_URL + url, options))
    .then(response => response.json());
}

export const client = {
  get: <T>(url: string) => request<T>(url),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  post: <T>(url: string, data: any) => request<T>(url, 'POST', data),
}

export function getRandomDigits() {
  return Math.random().toString().slice(2);
}
