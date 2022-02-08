import { BookRaw } from "./book-raw";

export class BookFactory {

  static transformBookRaw(bookRaw: BookRaw) {           // vom Server erhalten wir ein Buch mit dem Datum Typ string, in der Awendung benötigen wir Typ Date
    return {                                            // durch static können wir von überall auf dieses Funktion zugreifen
      ...bookRaw,                                      // setzt den Rest dieses Objekts = dem BookRaw (Spread Operator)
      published: new Date(bookRaw.published)          // transformiert den Typ string in ein Date
    }
  }
}
