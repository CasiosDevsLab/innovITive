import { Component } from '@angular/core';
import { Button } from './model/button';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'innovITve';

  button: Button = {
    text: "",
    action: () => {
      const scrollContainer = document.querySelector('.container');

    if (scrollContainer) {
        scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
    }

  }
}
