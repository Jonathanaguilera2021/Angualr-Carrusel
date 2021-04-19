import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent implements OnInit {

  img:string = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fdepor.com%2Fresizer%2FRiU3nYQqC6iyOU2O_pMmCO6UlzA%3D%2F580x330%2Fsmart%2Ffilters%3Aformat(jpeg)%3Aquality(75)%2Fcloudfront-us-east-1.images.arcpublishing.com%2Felcomercio%2F373KKO7XL5D37KCDKU2J5JOCQA.jpg&imgrefurl=https%3A%2F%2Fdepor.com%2Fdepor-play%2Flos-simpson-cuanto-ganan-los-actores-originales-de-the-simpsons-series-de-fox-nnda-nnlt-noticia%2F&tbnid=d9JyGEQqYN4gPM&vet=12ahUKEwjNvNKN04rwAhUonoQIHbVOA3MQMygBegUIARDEAQ..i&docid=KQtbTTS1wRSG5M&w=580&h=330&q=imagenes%20los%20simpson&ved=2ahUKEwjNvNKN04rwAhUonoQIHbVOA3MQMygBegUIARDEAQ"

  constructor() { }

  ngOnInit(): void {
  }

}
