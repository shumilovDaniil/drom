export type ICar = {
  id: number,
  title: string,
  carYear: number,
  horsepower: number,
  fuelType: string,
  mileage: number,
  VIN: string,
  img: string,
  price: number,
  location: string,
  publicationDate: string,
  owner: ICarOwner
}

export type ICarOwner = {
  ownerType: "diller" | "private",
  tel: number,
  location: string
}
