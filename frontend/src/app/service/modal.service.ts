import { EventEmitter, Injectable} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ModalComponent } from '../components/modal/modal.component';
import { Modal } from '../model/modal.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(
    private modalService: BsModalService
  ) { }

  showConfirm(title: string, msg: string, okTxt?: string, cancelTxt?: string){
    const bsModalRef: BsModalRef = this.modalService.show(ModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.msg = msg;
    if(okTxt) bsModalRef.content.okText = okTxt;
    if(cancelTxt) bsModalRef.content.cancelTxt = cancelTxt;

    return (<ModalComponent>bsModalRef.content).confirmResult;

  }

}
