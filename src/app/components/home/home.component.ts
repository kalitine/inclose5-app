import { Component } from '@angular/core'
import { Observable } from 'rxjs'

import { FcaService } from 'src/app/services/fca.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  $message: Observable<string>

  constructor(private fca: FcaService) {
    this.$message = fca.$message.asObservable()
  }
}
