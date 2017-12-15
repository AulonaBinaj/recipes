import { NgModule } from '@angular/core/src/metadata/ng_module';
import { DropdownDirective } from 'app/dropdown.directive';
import { HomeComponent } from './home';



@NgModule({
 declarations: [DropdownDirective,HomeComponent],
 exports: [DropdownDirective]
})
export class CoreModule {}