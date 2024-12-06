import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = "https://cd50-34-132-149-149.ngrok-free.app/docs";

  constructor(private http: HttpClient) { }

  // Gửi câu hỏi tới endpoint /ask

  getChatBotResponse(question: string) {
    const payload = { question };
    return this.http.post<any>(`${this.urlApi}/ask`, payload);
  }

}
