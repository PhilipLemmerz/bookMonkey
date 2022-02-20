import { HttpClient } from '@angular/common/http';
import { inject, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BookStoreService } from 'src/app/shared/book-store.service';

// mit Abhängigkeiten testen - Stubs
// mit einem stub ersetzten wir eine Abhängigkeit (denn wir wollen keinen httpAufruf machen)
// Ein stub besitzt nur die Methode get()
// mit dem Stub tauschen wir den echten http Client aus

describe('httpRequest', () => {
  const expectedBooks = [
    {
      title: 'Angular',
      isbn: '1111'
    },
    {
      title: 'React',
      isbn: '2222'
    }
  ];
  let httpStub;                        // Variable die den HTTP Client später austauscht
  beforeEach(() => {
    httpStub = {
      get: () => of(expectedBooks)                     // einzige Funktion vom stub
    };
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,                 // wir injecten den http client
          useValue: httpStub                // tauschen ihn gegen unseren stub
        }
      ]
    });
  });
  it('get expected book ',
    inject([BookStoreService],                                      // wir injecten unseren bookstoreservie
      (service: BookStoreService) => {                          // und stellen ihn unter der Variable service zur Verfügung
        let recievedBooks: any;
        service.getAllForTesting().subscribe(book => recievedBooks = book);   // die Methode getAllForTesting gibt es im BookStoreService
        expect(recievedBooks.length).toBe(2);
        expect(recievedBooks[0].isbn).toBe('1111');
      }))
});


//##########################################################################

// Mit Abhängikeiten testen - Mocks
// Mit Mocks können wir die Abhängikeit an sich mit testen

describe('bookstoreservice width mock', () => {
  const expectedBooks = [
    {
      title: 'TestOne',
      isbn: '1111'
    },
    {
      title: 'TestTwo',
      isbn: '2222'
    }
  ];
  let httpMock: any;
  beforeEach(() => {
    httpMock = {
      get: () => of(expectedBooks)             // Den Request unseres Mocks festlegen
    }
    spyOn(httpMock, 'get').and.callThrough();      // CallThrough liefert den ursrünglichen Wert zurück
    // mit spionen spionieren wir den Request aus
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: httpMock             // auf diesem haben wir den Spion aufgesetzt
        },
      ]
    });
  });
  it('should get our books', inject([BookStoreService], (service: BookStoreService) => {
    let recievedBooks: any = [];
    service.getAllForTesting().subscribe(books => recievedBooks = books);              // führen Req aus
    expect(recievedBooks).toBeTruthy()                              // checken Ob die recieved Books erhalten wurden
    expect(httpMock.get).toHaveBeenCalledTimes(1);      // prüfen ob ein Req ausgeführt wurde
  }));
});

//#########################################################################################
// HTTP-Requests testen - Best practice
// HTTP-Testing-Controller

describe('BooStoreService', () => {
  let httpMock: HttpTestingController;      // Achtung import manuell vornehmen -wird nicht erkannt
  let service: BookStoreService;
  const testBook = [
    {
      title: 'testbuch',
      isbn: '1234'
    }
  ];
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [BookStoreService]
    })
    httpMock = TestBed.inject(HttpTestingController),   // HttpTestingController anstelle unseres manuell erstellten mocks
      service = TestBed.inject(BookStoreService)
  }));
  it('should get a list of our Books', () => {
    let recievedBooks: any;
    service.getAllForTesting().subscribe(books => recievedBooks = books);
    const req = httpMock.expectOne('https://api4.angular-buch.com/secure/books');
    expect(req.request.method).toEqual('GET');
    req.flush(testBook);                   // führt request aus
    expect(recievedBooks.length).toBe(1);
    expect(recievedBooks[0].isbn).toBe('1234');
  });
  afterEach(() => {
    httpMock.verify();          // prüft das kein Request übrig ist.
  });
});
