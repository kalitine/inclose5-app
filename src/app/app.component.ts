import { Component } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { FcaService } from './services/fca.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  $message: Observable<string>

  constructor(private fca: FcaService) {
    this.$message = fca.$message.asObservable()
  }
}
