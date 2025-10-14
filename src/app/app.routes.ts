import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
    {
        path:'',
        component:Layout,
        children:[
            {
                path:'',
                loadComponent:()=>
                    import('./home/home').then(m=>m.Home)
            },
             {
                path:'contacto',
                loadComponent:()=>
                    import('./contacto/contacto').then(m=>m.Contacto)
            },
            {
                path:'servicios',
                loadComponent:()=>
                    import('./servicios/servicios').then(m=>m.Servicios)
            }

        ]
    }

   
];
