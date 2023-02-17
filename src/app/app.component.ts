import {AfterViewInit, Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'pi-dash';
  content = '';
  hours = '';
  minutes = '';
  shouldShowColons = true;

  ngAfterViewInit(): void {
    setInterval(() => {
      const currentTime = new Date();
      const currentHour = currentTime.getHours();
      this.hours = currentHour < 10 && `0${currentHour}` || `${currentHour}`;
      const currentMinute = currentTime.getMinutes();
      this.minutes = currentMinute < 10 && `0${currentMinute}` || `${currentMinute}`;
      this.shouldShowColons = !this.shouldShowColons;
    }, 1000);
  }
}
