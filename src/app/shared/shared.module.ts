import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PulseLoaderComponent } from './components/pulse-loader/pulse-loader.component';
import { NoDataComponent } from './components/no-data/no-data.component';
import {
  FaIconLibrary,
  FontAwesomeModule,
} from '@fortawesome/angular-fontawesome';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';

@NgModule({
  declarations: [ButtonComponent, PulseLoaderComponent, NoDataComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [ButtonComponent, PulseLoaderComponent, NoDataComponent],
})
export class SharedModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(faFolderOpen);
  }
}
