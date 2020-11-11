import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';

export const desktopRoutes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: '', component: MainComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(desktopRoutes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
