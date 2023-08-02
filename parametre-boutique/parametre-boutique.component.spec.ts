import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametreBoutiqueComponent } from './parametre-boutique.component';

describe('ParametreBoutiqueComponent', () => {
  let component: ParametreBoutiqueComponent;
  let fixture: ComponentFixture<ParametreBoutiqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParametreBoutiqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametreBoutiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
