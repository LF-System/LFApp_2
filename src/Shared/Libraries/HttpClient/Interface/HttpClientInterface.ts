export enum PaginateTypeEnum {
  CURSOR = 0,
  SIMPLE = 1,
  NORMAL = 2,
 }
 
export interface HttpResponse<T> {
  data: T | undefined;
  status: number | undefined;
  statusText: string | undefined;
  headers: any;
}

export interface HttpParams {
  headers?: Record<string, string>;
  body?: any;
  params?: any
  // Outros parâmetros comuns, como timeout, cache, etc., podem ser adicionados aqui
}

export interface HttpData<T> {
  message: string;
  data: T;
}

export interface HttpPager<T> {
  items: T[];
  current_page: number;
  per_page: number;
  paginate_type: PaginateTypeEnum;
  has_next_page: boolean;
  next_page: string;
  last_page: number;
  total_count: number;
}

export interface HttpClient {
  addAuthorizationToken(token: string): void;
  addHeaders(headers: { [key: string]: string }): void;
  removeHeaders(headers: string[]): void;
  clearHeaders(): void;
  get<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>>;
  post<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>>;
  put<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>>;
  delete<T>(url: string, params?: HttpParams): Promise<HttpResponse<T>>;
}