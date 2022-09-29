import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
// import { StudentComponent } from './book/book.component';
import { StudentComponent } from './student/student.component';
import { ProductComponent } from './product/product.component';
@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    ProductComponent,
  ],
  bootstrap: [StudentComponent, ProductComponent],
})
export class AppModule {}
