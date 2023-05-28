import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { PulseLoaderComponent } from './components/pulse-loader/pulse-loader.component';

@NgModule({
  declarations: [ButtonComponent, PulseLoaderComponent],
  imports: [CommonModule],
  exports: [ButtonComponent, PulseLoaderComponent],
})
export class SharedModule {}
