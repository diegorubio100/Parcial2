/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BandasListComponent } from './bandas-list.component';

describe('BandasListComponent', () => {
  let component: BandasListComponent;
  let fixture: ComponentFixture<BandasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BandasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BandasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
