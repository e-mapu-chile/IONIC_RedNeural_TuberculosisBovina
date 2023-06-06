import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'configuracion',
    loadChildren: () => import('./pages/configuracion/configuracion.module').then( m => m.ConfiguracionPageModule)
  },
  {
    path: 'descarga',
    loadChildren: () => import('./pages/descarga/descarga.module').then( m => m.DescargaPageModule)
  },
  {
    path: 'tab1',
    loadChildren: () => import('./tab1/tab1.module').then( m => m.Tab1PageModule)
  },
  {
    path: 'tab2',
    loadChildren: () => import('./tab2/tab2.module').then( m => m.Tab2PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'power-bi',
    loadChildren: () => import('./pages/power-bi/power-bi.module').then( m => m.PowerBiPageModule)
  },
  {
    path: 'muestras',
    loadChildren: () => import('./pages/muestras/muestras.module').then( m => m.MuestrasPageModule)
  },
  {
    path: 'mapas',
    loadChildren: () => import('./pages/mapas/mapas.module').then( m => m.MapasPageModule)
  },
  {
    path: 'descargas-excel',
    loadChildren: () => import('./pages/descargas-excel/descargas-excel.module').then( m => m.DescargasExcelPageModule)
  },
  {
    path: 'pivote-uno',
    loadChildren: () => import('./pages/pivote-uno/pivote-uno.module').then( m => m.PivoteUnoPageModule)
  },
  {
    path: 'mortalidad',
    loadChildren: () => import('./pages/mortalidad/mortalidad.module').then( m => m.MortalidadPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
