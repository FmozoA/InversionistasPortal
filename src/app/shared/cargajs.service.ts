import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CargajsService {

  constructor() { }




  cargararchivosjs(archivosjs: string[]) {
      
      for (let archivo of archivosjs) {
        let script = document.createElement("script");
        script.src = "./assets/js/" + archivo + ".js";
        script.type = "text/javascript";
        script.async = true;
        document.getElementsByTagName("head")[0].appendChild(script);
      }
  }



}
