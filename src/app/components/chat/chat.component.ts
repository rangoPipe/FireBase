import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  elemento:any;

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes().subscribe( () => {
      this.elemento.scrollTop = this.elemento.scrollHeight; 
    });
   }

  enviar_mensaje() {
    if(this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje.trim())
      .then( () => {
        this.mensaje = "";
        console.log('guardo correctamente');
      })
      .catch( (ex) => console.error(ex));
    
  }

  ngOnInit(): void {
    this.elemento = document.getElementById('app-mensajes');
  }

  ngAfterViewChecked() {  
    this.elemento.scrollTop = this.elemento.scrollHeight; 
}
}
