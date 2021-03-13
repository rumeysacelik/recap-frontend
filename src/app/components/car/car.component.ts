import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Car } from 'src/app/models/car/car';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars : Car[] = [];
apiUrl = "https://localhost:44391/api/Cars/getCarAll"
dataLoaded = false;
  
 constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    this.carService.getCar().subscribe(response => {
      this.cars = response.data;
  });
}
} 


