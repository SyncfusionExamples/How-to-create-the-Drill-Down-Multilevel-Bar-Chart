import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BreadcrumbModule } from '@syncfusion/ej2-angular-navigations';
import { ChartAllModule} from '@syncfusion/ej2-angular-charts';
import { CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService} from '@syncfusion/ej2-angular-charts';


@NgModule({
  imports: [
      BrowserModule, ChartAllModule, BreadcrumbModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [ CategoryService, LegendService, TooltipService, DataLabelService, LineSeriesService]
})
export class AppModule {}