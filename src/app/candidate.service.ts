import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor() { }

  getCandidates() {
    const candidates: any = localStorage.getItem('candidates');
    return JSON.parse(candidates) || [];
  }

  addCandidate() {

  }
}
