export interface dogAPIData {
    id: number,
    name: string,
    sex: string,
    breed: string,
    img: string,
    present: boolean,
    age: number,
    chipNumber: string,
    owner: {
        name: string,
        lastName: string,
        phoneNumber: number
    }
}

export interface DogList {
    count: number;
    next: string | null;
    previous: string | null;
    results: dogAPIData[];
  }