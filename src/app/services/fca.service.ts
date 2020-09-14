import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

const electron = (<any>window).require('electron')

@Injectable({
  providedIn: 'root',
})
export class FcaService {
  $message = new BehaviorSubject<string>('Hello world!')

  constructor() {
    electron.ipcRenderer.on('message', (event: any, message: string) => {
      this.$message.next(message)
    })
  }

  getNewMessage(): void {
    electron.ipcRenderer.send('getNewMessage')
  }
}
