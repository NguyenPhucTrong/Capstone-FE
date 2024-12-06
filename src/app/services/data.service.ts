import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlApi = "https://2897-34-132-149-149.ngrok-free.app";

  constructor() { }

  // Gửi câu hỏi tới endpoint /ask

  async getChatBotResponse(question: string) {
    const payload = { 'query': question };
    try {
      const response = await axios.post(`${this.urlApi}/ask`, payload);
      return response;
    } catch (error) {
      console.error('Error fetching response:', error);
      throw error;
    }
    // return this.http.post<any>(`${this.urlApi}/ask`, question);
  }

}
