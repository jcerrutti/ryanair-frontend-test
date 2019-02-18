import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search';

const appRoutes: Routes = [
  {
    path: '',
    component: SearchComponent,
    children: [
      {
        path: 'flights',
        loadChildren: 'app/components/results/results.module#ResultsModule'
      },
    ],
  },
  {
    path: '**', redirectTo: '',
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
