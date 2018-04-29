import { Component, OnInit } from '@angular/core';
import { Repo } from '../../repo';

@Component({
  selector: 'app-repositorio-info',
  templateUrl: './repositorio-info.component.html',
  styleUrls: ['./repositorio-info.component.css']
})
export class RepositorioInfoComponent implements OnInit {

  repositorio: Repo;

  constructor() { }

  ngOnInit() {
  }

}
