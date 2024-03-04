import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopBarComponent } from '@pages';

const routes: Routes = [
  {
    path: '',
    component: TopBarComponent,
    data: { title: 'KTE APP' },
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/item-list-page/item-list-page.component').then(m => m.ItemListPageComponent),
        data: { title: 'Создать новый' },
      },
      {
        path: 'create',
        loadComponent: () =>
          import('./pages/item-create-page/item-create-page.component').then(m => m.ItemCreatePageComponent),
        data: { title: 'Создать новый' },
      },
      {
        path: 'details/:id',
        loadComponent: () => import('./pages/details-page/details-page.component').then(m => m.DetailsPageComponent),
        data: { title: 'Подробная информация' },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
