import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
// import { FileUploader } from "/node_modules/carbon-components/scss/components/file-uploader";
import { FileUploader } from "node_modules/carbon-components";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

// let fileUploaderInstance =

// FileUploader.create(document.getElementById("my-file"));
// fileUploaderInstance.setState("complete", 1);
