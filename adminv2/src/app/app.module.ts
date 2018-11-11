import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StarterComponent } from './starter/starter.component';
import { StarterHeaderComponent } from './starter/starter-header/starter-header.component';
import { StarterLeftSideComponent } from './starter/starter-left-side/starter-left-side.component';
import { StarterContentComponent } from './starter/starter-content/starter-content.component';
import { StarterFooterComponent } from './starter/starter-footer/starter-footer.component';
import { StarterControlSidebarComponent } from './starter/starter-control-sidebar/starter-control-sidebar.component';
import { FraudeComponent } from './fraude/fraude.component';
import { FraudeContentComponent } from './fraude/fraude-content/fraude-content.component';

//Google Maps
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    StarterComponent,
    StarterHeaderComponent,
    StarterLeftSideComponent,
    StarterContentComponent,
    StarterFooterComponent,
    StarterControlSidebarComponent,
    FraudeComponent,
    FraudeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAx84zrfT9CBcs0O5EgVF8DqmjZFV3yqyE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
