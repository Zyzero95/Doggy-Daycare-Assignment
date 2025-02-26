export interface dogAPIData {
    name: string,
    sex: string,
    breed: string,
    img: string,
    present: boolean,
    age: number,
    chipNumber: number,
    owner: {
        name: string,
        lastName: string,
        phoneNumber: number
    }
}