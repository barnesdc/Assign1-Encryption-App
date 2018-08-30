import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ViewChild } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { FileUploadModule } from "primeng/fileupload";
import { InputTextModule } from "primeng/inputtext";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FileUploadModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // @ViewChild("fileInput")
  // fileInput: FileUpload;
  // startUpload() {
  //   this.fileInput.upload();
  // }
}
