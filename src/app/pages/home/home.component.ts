import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Country } from 'src/app/interfaces/country.interface';
import { GetCountriesService } from 'src/app/services/get-countries.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public dataArr: any[];
  public countries: Country[];
  @ViewChild( CdkVirtualScrollViewport ) virtualScroll!: CdkVirtualScrollViewport;

  constructor(private _getCountries: GetCountriesService) {
    this.dataArr = Array(500).fill(0);
    this.countries = [];
  }

  ngOnInit(): void {
    this._getCountries.getCountries().subscribe({
      next: ( val ) => this.countries = val
    })
  }

  navigate(position: number){
    this.virtualScroll.scrollToIndex(position);
  }

  drop( event: CdkDragDrop<Country>){
    moveItemInArray(this.countries, event.previousIndex, event.currentIndex);
  }
}
