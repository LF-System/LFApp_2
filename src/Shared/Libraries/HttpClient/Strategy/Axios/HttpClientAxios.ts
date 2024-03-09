import axios, { AxiosInstance } from "axios";
import {
  HttpClient,
  HttpResponse,
  HttpParams,
} from "../../Interface/HttpClientInterface";

export class HttpClientAxios implements HttpClient {
  private baseUrl: string;
  private request: AxiosInstance;

  constructor(baseUrl: string = import.meta.env.VITE_APP_BASE_URL) {
    this.baseUrl = baseUrl;
    this.request = axios.create({
      timeout: 5000,
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest",
        "X-Localization": "pt_BR",
      },
    });
  }

  addAuthorizationToken(token: string): void {
    this.request.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  addHeaders(headers: { [key: string]: string }): void {
    Object.keys(headers).forEach((key) => {
      this.request.defaults.headers.common[key] = headers[key];
    });
  }

  removeHeaders(headers: string[]): void {
    headers.forEach((header) => {
      delete this.request.defaults.headers.common[header];
    });
  }

  clearHeaders(): void {
    this.request.defaults.headers.common = {};
  }

  /**
   * GET
   * @param url string
   * @param params HttpParams | undefined
   * @returns Promise<HttpResponse<T>>
   */
  async get<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>> {
    try {
      const endpoint = `${this.baseUrl}${url}`;
      const res = await this.request.get(endpoint, params);
      return {
        data: res.data as T,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * POST
   * @param url string
   * @param params HttpParams | undefined
   * @returns Promise<HttpResponse<T>>
   */
  async post<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>> {
    try {
      const endpoint = `${this.baseUrl}${url}`;
      const res = await this.request.post(endpoint, params?.body, params);
      return {
        data: res.data as T,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * PUT
   * @param url string
   * @param params HttpParams | undefined
   * @returns
   */
  async put<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>> {
    try {
      const endpoint = `${this.baseUrl}${url}`;
      const res = await this.request.put(endpoint, params?.body, params);
      return {
        data: res.data as T,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Delete
   * @param url string
   * @param params HttpParams | undefined
   * @returns Promise<HttpResponse<T>>
   */
  async delete<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>> {
    try {
      const endpoint = `${this.baseUrl}${url}`;
      const res = await this.request.delete(endpoint, params);
      return {
        data: res.data as T,
        status: res.status,
        statusText: res.statusText,
        headers: res.headers,
      };
    } catch (error) {
      return this.handleError<T>(error);
    }
  }

  /**
   * Tratamento de erros do axios
   * @param error unknown
   * @returns HttpResponse<T>
   */
  private handleError<T>(error: unknown): HttpResponse<T> {
    if (axios.isAxiosError(error)) {
      // A requisição foi feita e o servidor respondeu com um código de status
      // que é superior a 2xx
      if (error.response) {
        return {
          data: error.response?.data as T,
          status: error.response?.status,
          statusText: error.response?.statusText,
          headers: error.response?.headers,
        };
      }
      // A requisição foi feita mas nenhuma resposta foi recebida
      if (error.request) {
        return {
          data: undefined,
          status: undefined,
          statusText: "The request was made but no response was received",
          headers: undefined,
        };
      }
    }
    return {
      data: undefined,
      status: undefined,
      statusText: "Unknown error occurred",
      headers: undefined,
    };
  }
}
