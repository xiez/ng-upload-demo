import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

    constructor(private http: HttpClient) { }

    public upload(formData) {
        return this.http.post<any>('/api/upload/', formData)
    }
}
