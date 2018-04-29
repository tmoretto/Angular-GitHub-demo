import { Component, OnInit, Input } from '@angular/core';
import { Repo } from '../../repo';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-repositorio-list',
  templateUrl: './repositorio-list.component.html',
  styleUrls: ['./repositorio-list.component.css']
})
export class RepositorioListComponent implements OnInit {

  @Input() repositorios: Repo[];
  repo: Repo;
  closeResult: string;

  constructor(private modalService: NgbModal, private _router: Router) { }

  ngOnInit() {
  }

  sortByStar() {
    this.repositorios = this.repositorios.sort((repo1, repo2) => {
        return (repo1.stargazers_count - repo2.stargazers_count);
    }).reverse();
  }

  sortByName() {
    this.repositorios = this.repositorios.sort((repo1, repo2) => {
      if (repo1.name.toLowerCase() > repo2.name.toLowerCase()) {
          return 1;
      }
      if (repo1.name.toLowerCase() < repo2.name.toLowerCase()) {
          return -1;
      }
      return 0;
    });
  }

  verDetalhes(repo: Repo, content) {
    this.repo = repo;
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
