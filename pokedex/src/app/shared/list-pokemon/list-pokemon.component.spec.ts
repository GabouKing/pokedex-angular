import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ListPokemonComponent } from './list-pokemon.component';

describe(ListPokemonComponent.name, () => {
  let component: ListPokemonComponent;
  let fixture: ComponentFixture<ListPokemonComponent>;
  let instance: ListPokemonComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPokemonComponent ],
      imports:[ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component',  () => {
    expect(component).toBeTruthy();
  });

  it(`#${ListPokemonComponent.prototype.findPokemon.name} should scene is active when return pokemon list`, () =>{
    // Arrange
    let pokemonFilter = 'pikachu'
    let pokelist = [
      {
        name:'bulbassaur'
      },
      {
        name:'blastoise'
      },
      {
        name: pokemonFilter
      }
    ]
    component.generateList = pokelist;
    // Act
    component.findPokemon(pokemonFilter)
    // Assert
    expect(component.getListPokemon.length).toBe(1)
  });

  it(`#${ListPokemonComponent.prototype.ngOnInit.name} should component init`, () => {
    //Arrange
    spyOn(component,'inicializaDados')
    //Act
    component.ngOnInit();
    //Assert
    expect(component.inicializaDados).toHaveBeenCalled();
  })
});
