import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { ChildComponent } from "./child/child.component";
import { TestingComponent } from "./testing.component"

// Isolierter-Unit-Test
// für eine Component (es wird keine zweite Component einbezogen oder Abhängigkeit benötigt)
// Problem: Aussgagekraft -> wir müssen Häufig das Zusammenspiel von Components beweisen

describe('BookEvent-Unit', () => {
  let component: TestingComponent;
  beforeEach(() => {
    component = new TestingComponent();
  });
  it('should have to hardcoded books', () => {    // prüft ob 2 Bücher vorliegen
    component.ngOnInit();
    expect(component.book.length).toBe(2)
  });
  it('shoud trigger an event with books', () => {   // prüft, wenn wir das Buch emitten,
    const sendBook = component.book        //  ob das Empfangene Buch vom Event
                                          // gleich dem gesendeten ist
    let recievedBook: any;
    component.ourEvent.subscribe(content => recievedBook = content);  // setzt das im Event empfangene Buch gleich recievedBook
    component.emitIt(sendBook);                      // führt das Event aus
    expect(sendBook).toBe(recievedBook);           // prüft ob Bücher gleich sind.
  });
});

//###################################################################################

// Shallow - Unit Test
// Wir binden die View (das Template) in unseren Unit Test mit ein.
// Damit können wir im Template ein Ereignis simulieren und basierend darauf einen Test auswerten

describe('BookEvent-Shallow-Unit', ()=> {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(waitForAsync(() => {     // waitForAsync hat den Sinn das der nächste beforeEach() Block wartet bis dieser ausgeführt wurde.
    TestBed.configureTestingModule({      // aufsetzen eines Testing Modules bestehend aus der gesamen Component -> dardurch können wir auf das template Zugreifen
      declarations: [TestingComponent],   // unser Module soll nur aus der TestingComponent bestehen.
      schemas: [NO_ERRORS_SCHEMA]   // würde benötigt wenn wir den klick auf einer anderen nicht integrierten component ausführen
    })                             // wir wie im BookMonkey den klick auf der book-list-item ausführen > <pl-book-list-item (click)="doIt()"> {{book.title}} </pl-book-list-item>
    .compileComponents();         // kompliert die component
  }));
  beforeEach(()=> {
    fixture = TestBed.createComponent(TestingComponent);   // erstellt ein Abbild der Component
    component = fixture.componentInstance;              // die Variable component soll eine Instanz unserer erstellten testcomponent bekommen
    fixture.detectChanges();                     // aktiviert die changeDetection für die Events
  });

  it('event should be emittet by click in the view', ()=> {
    component.ngOnInit();
    let recievedBook: any;
    component.ourEvent.subscribe( book => {recievedBook = book});
    fixture.nativeElement.querySelector('#btn').click();   // wir imitieren einen echten klick auf den Button im template
    expect(recievedBook.title).toBe('Angular');            // test ist erfüllt wenn der titel der Variable mit dem Wort 'Angular' überstimmt
  })
});

//####################################################################################

// Integrationstest
// Wir binden mehrere Componenten mit in den test ein

describe('IntegrationTest', ()=> {
  let component: TestingComponent;
  let fixture: ComponentFixture<TestingComponent>;

  beforeEach(waitForAsync(()=> {
    TestBed.configureTestingModule({
      declarations: [TestingComponent, ChildComponent]     // Einbinden der zweiten Component
                                                         // Kein schemas: [NO_ERRORS_SCHEMA] nötig
    })
    .compileComponents()
  }));
  beforeEach(()=> {
    fixture = TestBed.createComponent(TestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should emit event by click on childtag', ()=> {
    let recievedBook :any;
    component.otherEvent.subscribe(event => recievedBook = event);
    fixture.nativeElement.querySelector('pl-child').click()     // zugriff geht da zwei components eingebunden
    expect(recievedBook).toBeTruthy();
  })
})




