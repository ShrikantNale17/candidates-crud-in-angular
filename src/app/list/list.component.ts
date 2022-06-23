import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidate } from '../candidate';
import { CandidateService } from '../candidate.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

	candidates: any = [];

	constructor(private candidateService: CandidateService, private router: Router) { }

	ngOnInit(): void {
		this.getCandidates();
	}

	getCandidates(): void {
		this.candidates = this.candidateService.getCandidates();
	}

	deleteCandidate(id: any) {
		let confirm = window.confirm("Are you sure?")
		if (confirm) {
			this.candidateService.deleteCandidate(id);
			this.getCandidates();
		}
	}

	editCandidate(id: any) {
		this.router.navigate(['edit', id])
	}

	getTotalExperience(id: any) {
		let temp = this.candidates.find((cndt: any) => cndt.id === id).prof_info.exper.reduce((a: any, b: any) => a.duration + b.duration);
		return temp;
	}

}
