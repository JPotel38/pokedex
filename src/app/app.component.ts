import {Component} from '@angular/core';
import {register} from 'swiper/element/bundle';
import {IonicModule} from "@ionic/angular";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TranslateModule} from "@ngx-translate/core";

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonicModule, HeaderComponent, FooterComponent, TranslateModule]
})
export class AppComponent {

}
