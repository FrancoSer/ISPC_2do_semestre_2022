import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthUmService } from '../auth-um.service';

@Injectable( { providedIn: 'root' } )
export class AuthUmGuard implements CanMatch, CanActivate
{


    constructor (
        private servicio: AuthUmService,
        private router: Router,
    ) { }

    private checkAuthStatus (): boolean | Observable<boolean>
    {

        return this.servicio.checkAuth()
            .pipe(
                tap( isAuthenticated => console.log( 'Authenticated:', isAuthenticated ) ),
                tap( isAuthenticated =>
                {
                    if ( !isAuthenticated )
                    {
                        this.router.navigate( [ './auth/login-um' ] );
                    }
                } ),

            );

    }


    canMatch ( route: Route, segments: UrlSegment[] ): boolean | Observable<boolean>
    {
        console.log( 'Can Match' );
        console.log( { route, segments } );
        return this.checkAuthStatus();
    }

    canActivate ( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean | Observable<boolean>
    {
        console.log( 'Can Activate' );
        console.log( { route, state } );

        return this.checkAuthStatus();
    }

}