import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Year2023Component } from './year-2023/year-2023.component';
import { Year2024Component } from './year-2024/year-2024.component';
import { Year2025Component } from './year-2025/year-2025.component';

const routes: Routes = [

   { path: '', component: HomeComponent },
  { path: '2023', component: Year2023Component },
  { path: '2024', component: Year2024Component },
  { path: '2025', component: Year2025Component },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
