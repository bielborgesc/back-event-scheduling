import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import {ActivatedRoute, Router} from '@angular/router';
import decode from 'jwt-decode';
import { UserService } from '../../../service/user.service';
import { Modal } from 'src/app/model/modal.model';
import { NgToastService } from 'ng-angular-popup';
import { ModalService } from 'src/app/service/modal.service';
import { catchError, map, tap } from 'rxjs';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:Event[] | any;
  token: any = decode(localStorage.getItem('token')!);

  modalDeleteItem: Modal = new Modal(
    "Deseja mesmo realizar essa ação?",
    "Após confirmar, o item selecionado será excluido.",
    "Remover",
    "Cancelar"
  );

  constructor(
    private eventService: EventService,
    private userService: UserService,
    private modalService: ModalService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {
    this.eventService.emitDeletedEvent
    .pipe(
      tap(eventId => setTimeout(() => this.userService.findOne(this.token.sub).subscribe((user) => this.events = user.events), 500))
    )
    .subscribe();
    this.findAllEvents();
  }

  findAllEvents(): void {
    this.userService.findOne(this.token.sub)
    .pipe(
      map((user) => user.events),
      tap((events) => this.events = events),
      catchError(async (error) => console.error(error))
    )
    .subscribe()
  }

  editEvent(id: number): void{
    this.router.navigate([`/edit-event/${id}`], {relativeTo: this.activatedRoute})
  }

  openModal(event: any){
    this.modalService.open(this.modalDeleteItem);
    this.modalService.buttonHandler
    .pipe(
      tap((txtBtn) => {
        if(txtBtn === this.modalDeleteItem.txtBtnSuccess){
          this.eventService.delete(event.id).subscribe();
          this.toast.success({detail: "Mensagem de Sucesso", summary: "Evento excluido com sucesso", duration: 5000});
        }
        this.modalService.close();
      }),
      catchError( async (err) => this.toast.success({ detail: "Mensagem de Sucesso", summary: "Evento excluido com sucesso", duration: 5000 }))
    )
    .subscribe()
  }

}