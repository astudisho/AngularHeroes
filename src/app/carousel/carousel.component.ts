import { Component, OnInit } from '@angular/core';
import { never } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ImageSlide } from 'src/models/ImageSlide/image-slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  private readonly assetPath : string = '/assets/img/01-17/';
  public slides = new Array<ImageSlide>();
  public assetClient : HttpClient;

  constructor(http: HttpClient) { 
    this.assetClient = http;
    this.slides.push( 
      {name : "img 1", imageName : this.assetPath + 'IMG_20170108_191345.jpg'}
      , { name: 'img2', imageName : this.assetPath + 'IMG_20170108_191712.jpg'}
      )
  }

  ngOnInit() {
    
    // this.assetClient.get(this.assetPath, {responseType: 'text'})
    // .subscribe(data => console.log(data.length));
  }
}
