import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, UrlSegment, UrlTree, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthUpService } from '../auth-up.service';

@Injectable( { providedIn: 'root' } )
export class AuthUpGuard implements CanMatch, CanActivate
{


    constructor (
        private servicio: AuthUpService,
        private router: Router,
    ) { }

    private checkAuthStatus (): boolean | Observable<boolean>
    {

        return this.servicio.checkAuth()
            .pipe(
                tap( pacienteAutenticado => console.log( 'Authenticated:', pacienteAutenticado ) ),
                tap( pacienteAutenticado =>
                {
                    if ( !pacienteAutenticado )
                    {
                        this.router.navigate( [ './auth/login-up' ] );
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