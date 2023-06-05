import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AuthClientService } from "../services/auth-client/auth-client.service";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authClientService: AuthClientService) {}


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.authClientService.getToken();
        req = req.clone(
            {
                setHeaders: {
                    Authorization: "Bearer " + authToken
                }
            }
        );
        return next.handle(req);
    }
    
}