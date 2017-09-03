import { NgModule} from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

/*components*/
import { MainComponent} from './components/main-admin/main-admin.component';
import { ListComponent} from './components/list/list.component';
import { AddComponent} from './components/add/add.component';
import { EditComponent} from './components/edit/edit.component';

const adminRoutes: Routes = [
  {
    path: 'admin-panel',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'create',
        component: AddComponent
      },
      {
        path: 'edit',
        component: EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class  AdminRoutingModule { }
