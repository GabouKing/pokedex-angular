import { RouterTestingModule } from '@angular/router/testing';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { PokeCardModule } from './poke-card.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeCardComponent } from './poke-card.component';

describe(PokeCardComponent.name, () => {
  let component: PokeCardComponent;
  let fixture: ComponentFixture<PokeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule,
        PokeCardModule,
        RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
