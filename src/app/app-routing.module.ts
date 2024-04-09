import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
<<<<<<< HEAD
  {
    path: 'clientes',
    loadChildren: () => import('./forms/clientes/clientes.module').then( m => m.ClientesPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./forms/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
=======

  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },

>>>>>>> 9c59be357aaaa8a2cce5791632d656661ca43a5e
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
