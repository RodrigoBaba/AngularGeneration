import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bsModalService: BsModalService
  ) { }

  private showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.bsModalService.show(AlertasComponent)
    bsModalRef.content.type = type //esse type é do parametro
    bsModalRef.content.message = message //esse message é do parametro
  }

  showAlertDanger(message: string){
    this.showAlert(message, "danger")
  }

  showAlertSuccess(message: string){
    this.showAlert(message, "success")
  }

  showAlertInfo(message: string){
    this.showAlert(message, "info")
  }

}
