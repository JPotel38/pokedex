// import {Injectable} from '@angular/core';
// import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
//
// import {Observable} from 'rxjs';
// import {AllPokemonsService} from '../services/all-pokemons.service';
//
// @Injectable()
// export class PokeReqInterceptor implements HttpInterceptor {
//
//   constructor(public allPokemonsService: AllPokemonsService) {}
//
//   intercept(req: HttpRequest<any>, next: HttpHandler):
//     Observable<HttpEvent<any>> {
//     // let id = 0;
//     // const reqClone = req.clone({
//     //   url: req.url.replace('id', String(id++))
//     // });
//     return next.handle(req);
//     // const reqClone = req.clone({
//     //   url: req.url.replace('id', String(id++))
//     // });
//     }
// }
