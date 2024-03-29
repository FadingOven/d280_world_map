import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrl: './world.component.css'
})
export class WorldComponent implements OnInit{
  ngOnInit(): void {
    let svgCountryPaths = document.querySelectorAll<SVGPathElement>('path');

    Array.prototype.forEach.call(svgCountryPaths, (svgCountry: SVGPathElement) => {

      svgCountry.addEventListener('mouseover', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = '#fffafa';
      });

      svgCountry.addEventListener('mouseleave', (event:MouseEvent)=> {
        const path = event.target as SVGPathElement;
        path.style.fill = '';
      });
      
      svgCountry.addEventListener('click', () => {
        this.loadCountryData(svgCountry);
      });
    });
  }

  //script for api query
  async loadCountryData(svgCountry: SVGPathElement){

    let api: string = 'https://api.worldbank.org/V2/country/'+svgCountry.id+'?format=json';
    let res: Response = await fetch(api);
    let data: any = await res.json();
    let dataPath:any = data[1];

    console.log('Data Path:', dataPath); // Log the dataPath object to the console


    let name: string = dataPath[0].name;
    document.getElementById('name')!.innerText = name;

    let capital: string = dataPath[0].capitalCity;
    document.getElementById('capital')!.innerText = capital;

    let region: string = dataPath[0].region.value;
    document.getElementById('region')!.innerText = region;

    let income: string = dataPath[0].incomeLevel.value;
    document.getElementById('income')!.innerText = income;

    let latitude: string = dataPath[0].latitude;
    document.getElementById('latitude')!.innerText = latitude;

    let longitude: string = dataPath[0].longitude;
    document.getElementById('longitude')!.innerText = longitude;
  }
}


