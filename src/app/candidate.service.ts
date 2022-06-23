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

	addCandidate(candidate: any) {
		let candidates: any = localStorage.getItem('candidates');
		candidates = JSON.parse(candidates) || [];
		candidates.push(candidate);
		localStorage.setItem('candidates', JSON.stringify(candidates));
	}

	deleteCandidate(candidateId: any) {
		let candidates: any = localStorage.getItem('candidates');
		candidates = JSON.parse(candidates) || [];
		candidates = candidates.filter((candidate: any) => candidateId !== candidate.id);
		localStorage.setItem('candidates', JSON.stringify(candidates));
	}

	getCandidateById(c_id: any) {
		let candidates: any = localStorage.getItem('candidates');
		let { id, ...candidate } = JSON.parse(candidates).find((cndt: any) => cndt.id === c_id);
		console.log(candidate);
		return candidate;
	}

	editCandidate(candidate: any) {
		let candidates: any = localStorage.getItem('candidates');
		candidates = JSON.parse(candidates) || [];
		candidates = candidates.map((cndt: any) => cndt.id === candidate.id ? candidate : cndt);
		localStorage.setItem('candidates', JSON.stringify(candidates));
	}
}
