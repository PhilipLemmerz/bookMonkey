export interface Interface {
  name: string;
  age: number;
  mail? :string;
}

export class User implements Interface {
  name = 'philip'
  age = 24;
}
