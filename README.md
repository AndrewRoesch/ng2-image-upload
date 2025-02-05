# Image Upload Module
[![Build Status](https://travis-ci.org/aberezkin/ng2-image-upload.svg?branch=master)](https://travis-ci.org/aberezkin/ng2-image-upload)

This angular library provides a light-weight component that handles file-drop, image previewing and image uploading.

### [Demo & Readme](https://aberezkin.github.io/ng2-image-upload/)

### Install

````
npm install ng2-op-image-upload --save
````

or

````
yarn add ng2-op-image-upload
````

### Usage

In your `app.module.ts` import it using `@NgModule` decorator.
  
````typescript
import { ImageUploadModule } from "ng2-op-image-upload";

@NgModule({
    imports: [
        ...,
        ImageUploadModule.forRoot(),
        ...
    ]
})
````

Now you have `image-upload` declaration and you can use it in your html code.

`<image-upload></image-upload>`

You can use bindings to configure this element for your needs.

See the demo for more detailed instructions.
