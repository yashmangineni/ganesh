import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ImageRecord {
  _id: string;
  year: number;
  filename: string;
  contentType: string;
  createdAt?: string;
  updatedAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private apiUrl =
    'https://ganesh-be.onrender.com/api/images';

  constructor(
    private http: HttpClient
  ) {}

  getImagesByYear(
    year: number
  ): Observable<ImageRecord[]> {

    return this.http.get<ImageRecord[]>(
      `${this.apiUrl}?year=${year}`
    );
  }

  getImageUrl(
    image: ImageRecord
  ): string {

    return `${this.apiUrl}/${image._id}/file`;
  }
}