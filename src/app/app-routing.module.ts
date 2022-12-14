import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'main-menu',
    loadChildren: () => import('./pages/main-menu/main-menu.module').then( m => m.MainMenuPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./pages/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'programar',
    loadChildren: () => import('./pages/programar/programar.module').then( m => m.ProgramarPageModule)
  },
  {
    path: 'resultados',
    loadChildren: () => import('./pages/resultados/resultados.module').then( m => m.ResultadosPageModule)
  },
  {
    path: 'edit-vehiculo',
    loadChildren: () => import('./pages/edit-vehiculo/edit-vehiculo.module').then( m => m.EditVehiculoPageModule)
  },
  {
    path: 'edit-perfil',
    loadChildren: () => import('./pages/edit-perfil/edit-perfil.module').then( m => m.EditPerfilPageModule)
  },
  {
    path: 'perfil-conductor',
    loadChildren: () => import('./pages/perfil-conductor/perfil-conductor.module').then( m => m.PerfilConductorPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./pages/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'enable',
    loadChildren: () => import('./pages/enable/enable.module').then( m => m.EnablePageModule)
  },
  {
    path: 'unabled',
    loadChildren: () => import('./pages/unabled/unabled.module').then( m => m.UnabledPageModule)
  },
  {
    path: 'detalle-viaje',
    loadChildren: () => import('./pages/detalle-viaje/detalle-viaje.module').then( m => m.DetalleViajePageModule)
  },
  {
    path: 'detalle-viaje1',
    loadChildren: () => import('./pages/detalle-viaje1/detalle-viaje1.module').then( m => m.DetalleViaje1PageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
