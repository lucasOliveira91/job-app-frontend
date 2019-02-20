import { JobDTO } from './../../models/job-dto';
import { API_CONFIG } from './../../config/api.config';
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs/Rx';

@Injectable()
export class JobService{

    constructor(public http: HttpClient) {}

    findByCategory (categoryId: string, page: number = 0, linesPerPage: number = 24){
        return this.http.get(`${API_CONFIG.baseUrl}/jobs/page?page=${page}&linesPerPage=${linesPerPage}`);
    }

    findById(id: string) {
        return this.http.get<JobDTO>(`${API_CONFIG.baseUrl}/jobs/${id}`);
    }

    insert(obj: JobDTO) {
        return this.http.post(`${API_CONFIG.baseUrl}/jobs`, obj, {observe: 'response', responseType: 'text'});
    }

    update(obj: JobDTO) {
        return this.http.put(`${API_CONFIG.baseUrl}/jobs/${obj.id}`, obj, {observe: 'response', responseType: 'text'});
    }

    delete(id: number) {
        return this.http.delete(`${API_CONFIG.baseUrl}/jobs/${id}`, {observe: 'response', responseType: 'text'});
    }
}