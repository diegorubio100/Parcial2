import { Component, OnInit } from '@angular/core';
import { Banda } from '../banda';
import { BandaService } from '../banda.service';

@Component({
  selector: 'app-bandas-list',
  templateUrl: './bandas-list.component.html',
  styleUrls: ['./bandas-list.component.css']
})
export class BandasListComponent implements OnInit {

  bandas: Array<Banda> = [];
  bandaMasAntigua: Banda | null = null;
  selectedBanda!: Banda;
  selected = false;

  constructor(private bandaService: BandaService) { }

  getBandas(): void {
    this.bandaService.getBandas().subscribe((bandas) => {
      this.bandas = bandas;
      this.encontrarBandaMasAntigua();
    });
  }

  encontrarBandaMasAntigua(): void {
    let bandaMasAntigua: Banda | null = null;
    for (const banda of this.bandas) {
      if (!bandaMasAntigua || banda.foundation_year < bandaMasAntigua.foundation_year) {
        bandaMasAntigua = banda;
      }
    }
    this.bandaMasAntigua = bandaMasAntigua;
  }

  aniosFundacion(foundationYear: number): number {
    const anioActual = new Date().getFullYear();
    return anioActual - foundationYear;
  }

  onSelected(banda: Banda): void {
    this.selected = true;
    this.selectedBanda = banda;
  }


  ngOnInit() {
    this.getBandas();
  }

}

