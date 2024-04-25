import { useSToken } from "@/stores/token.ts";
const { token } = useSToken();
class HttpHelp {
  headers: Headers = new Headers();
  public constructor() {
    this.headers.append("Content-Type", "application/json");
    this.headers.append("token", token);
  }
  public async get(url: string): Promise<Response> {
    const response = await fetch(url, {
      method: "get",
      headers: this.headers,
    });
    return response;
  }
  public async post(url: string, body: string): Promise<Response> {
    const response = await fetch(url, {
      method: "post",
      headers: this.headers,
      body: body,
    });
    return response;
  }
  public async postForm(url: string, body: FormData): Promise<Response> {
    const headers1: Headers = new Headers();
    headers1.append("token", token);
    const response = await fetch(url, {
      method: "post",
      headers: headers1,
      body: body,
    });
    return response;
  }
  public async put(url: string, body: string): Promise<Response> {
    const response = await fetch(url, {
      method: "put",
      headers: this.headers,
      body: body,
    });
    return response;
  }
  public async delete(url: string, body: string): Promise<Response> {
    const response = await fetch(url, {
      method: "delete",
      headers: this.headers,
      body: body,
    });
    return response;
  }
  public async upload(url: string, formData: FormData): Promise<Response> {
    const headers1: Headers = new Headers();
    headers1.append("Content-Type", "application/json");
    headers1.append("token", token);
    const response = await fetch(url, {
      method: "post",
      headers: headers1,
      body: formData,
    });
    return response;
  }
}
export { HttpHelp };

// todo:实现请求并发控制
const reqPools = [];
const occurFunc = () => {};
/**
 * 并发请求
 * @params {tsring} url 并发请求的url
 * @params {string} method 请求方式
 * @params {headers} headers  请求携带的请求头
 * @params {number} maxNum  最大并发数
 *
 */

const maxNum = 3;
const concurReq = (url: string, methods: string, headers: any) => {
  return new Promise(async (resolve) => {
    try {
      const result = fetch(url, {
        method: methods,
        headers:headers,
      });
      resolve(result);
    } catch (err) {
      resolve(err);
    } finally {

    }
  });
};
