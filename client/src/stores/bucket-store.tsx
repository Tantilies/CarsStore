import { makeAutoObservable } from "mobx";
import { Car, Query } from "../graphql/generated";

 class BucketStore  {
  bucketCars:Query['cars'] = []

  constructor() {
    makeAutoObservable(this)
  }

  addCar = (car: Car) => {
    this.bucketCars.push(car)
  }

  removeCar = (car: Car) => {
    this.bucketCars = this.bucketCars.filter(c => c.id !== car.id)
  }

  checkAddedCar = (car: Car) => {
   return  this.bucketCars.some(bucketCar => bucketCar.id == car.id )
  }

}


export default new BucketStore()