import { Component, Input } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule} from '@angular/router/testing';
import { of } from 'rxjs';
import { Location } from '@angular/common';
import { Book } from 'src/app/shared/book';
import { BookRaw } from 'src/app/shared/book-raw';
import { BookStoreService } from 'src/app/shared/book-store.service';
import { RoutingTestComponent } from './routing-test.component';


@Component({
  template: '',
  selector: 'pl-child'
})
class ChildTestComponent {
  @Input() book?: BookRaw;
}
@Component({
  template: '',
  selector: 'pl-test-details'   // der vollständigkeit - wird beim routing nicht benötigt
})
class TestDeatailsComponent { }

describe('routing-testComponent', () => {
  let component: RoutingTestComponent;
  let fixture: ComponentFixture<RoutingTestComponent>;
  let location: Location;
  const testBooks = [
    {
      title: 'Testbuch',
      isbn: '1111',
      published: '22-02-1997',
      authors: ['Philip Lemmerz'],
      thumbnails: [{ url: 'https://test.de', title: 'testtitel' }]
    },
    {
      title: 'Testbuch zwei',
      isbn: '2222',
      published: '22-02-1997',
      authors: ['Philip Lemmerz'],
      thumbnails: [{ url: 'https://test.de', title: 'testtitel' }]
    }
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RoutingTestComponent,
        ChildTestComponent,
        TestDeatailsComponent
      ],
      providers: [
        {
          provide: BookStoreService,
          useValue: { getAll: () => of(testBooks) }    // Achtung : Diese Funktion muss genauso
        }                                            // heißen wie die im service die wir prüfen
      ],
      imports: [
        RouterTestingModule.withRoutes([
          {path: 'testing/:isbn', component: TestDeatailsComponent}
        ])
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(RoutingTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should display all the books', () => {
    let recievedBooks: Book[] = [];
    component.books$.subscribe(books => recievedBooks = books);
    expect(recievedBooks.length).toBe(2);
    expect(recievedBooks[0].isbn).toBe('1111');
  });

  it('should link to isbn by click on child', waitForAsync(()=> {
    fixture.nativeElement.querySelector('pl-child').click();
    fixture.whenStable().then( ()=> {  // whenStable() wir warten auf die Stabilisierung der Zone (hier: bis das routing fertig ist)
      expect(location.path()).toEqual('/testing/1111');
    })
  }));
});

