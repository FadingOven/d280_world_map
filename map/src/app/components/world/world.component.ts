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
    });
  }
}
