import { Component, Input, OnInit } from '@angular/core';
import { Banda } from '../banda';

@Component({
  selector: 'app-bandas-detail',
  templateUrl: './bandas-detail.component.html',
  styleUrls: ['./bandas-detail.component.css']
})
export class BandasDetailComponent implements OnInit {

  @Input() banda!: Banda;
  constructor() { }

  ngOnInit() {
  }

}
