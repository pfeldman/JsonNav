import { bootstrap }    from '@angular/platform-browser-dynamic'
import { AppComponent } from './app.component'
import JsonChangeService from './services/JsonChangeService'

bootstrap(AppComponent, [JsonChangeService]);
