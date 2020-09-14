import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { AppComponent } from './app.component'
import { FcaService } from './services/fca.service'
import { HomeComponent } from './components/home/home.component'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, CommonModule],
  providers: [FcaService],
  bootstrap: [AppComponent],
})
export class AppModule {}
