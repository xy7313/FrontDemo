#### Angular Basic

1. Components make applications, component = template+class(including props, methods)+metadata

2. Modules: Help code organization, resolve namespaces issues

3. ES2015 file is a module, module is a file. Angular2 uses ES2015 modules

4. Modules in ES2015.

    - We have code `export class Product{...}` in product.ts file, this *export* keyword indicates that we can import this product module in any other modules
    
    - import classname from classpath: `import { Product } from 'pathofproduct.ts'`. (Notice that we import the js file, the compiled .ts file. The reason we do not need to specify the file type is because we have set the default extension for files in system.config)

5. Common name convention in angular: name each component class with the feature name, then append the Component as suffix

6.  A class becomes an angular **component** when we give it component metadata. 

11. Define properties and methods in class
    
    - propname, colon, data type, value : `pageTitle : string = "example";`; 

    - function name, colon, return value `toggleImg() : void{...}`. 

    - Methods after properties

7. Decorator:

    - Define component metadata within an angular component function, and typeScript will attach that function to the class as a decorator. 

    - Using function to add metadata to a class, it's a javascript language feature implemented using typescript. 
    
    - Scope of decorator is limited to the feature it decorates.
    
    - Prefix with @ ('at sign), 
    
    - Angular have several built-in decorators, we can also build custom decorators

    - Define decorator above the class signature. No semicolon followed
    
    - Use component decorator to identify the class as a component. Since it's a function, we add parenthesis and pass object with props.

        - selector : component's directive name used in HTML. Directive is a custom HTML tag. Whenever this directive is in HTML, angular render this component's template.

        - template: view layout

8. Data binding, double curly braces, {{}}

10. When we want to use external class and functions, we need to define where to find it using import on the top of the code file.

11. Angular is modular: core, animate, http, router

12. Checklist for coding component
    
    - Class --> code

        - Clear Name: Pascal casing; Append "component"

        - Export keyword

        - Data in props : appropriate data type and default value; camelCase with the first letter lowercase 

        - Logic in methods

    - Decorator --> metadata

        - Component Decorator: prefix with @; suffix with () because it's a function

        - Selector: Directive, component name we use directly in HTML, if we do not use this component in html, we can ignore this selector prop

        - Template

    - Import

13. Using component as directive

    ![tu]()

   
#### TypeScript

1. Open source language

2. Strongly type

    - TypeScript type definition files (libraryname.d.tx)

3. Transpiles to plain javascript

4. Class-based, Object-oriented


#### npm

1. Node Package Manager for JavaScript

2. is a command line utility that interacts with repositories of open source projects


#### Manually setup Angular2 application

1. Create an application folder

2. tsconfig.json

3. package.json

4. typings.json

5. Install libraries and typings

6. index.html  (entrypoint of application)

7. main.tx(bootstrapper) file to bootstrap the angular application with the root component


#### Using Angular tool cli to setup Angular2 application(Prefer)

0. Make sure you have installed node.js

1. install cli following this instruction https://github.com/angular/angular-cli

2. Navigate to http://localhost:4200/

3. angular-cli.json all configuration --> index.html, main.ts, app.module.ts, app.component.ts, (import) 


#### Products Example

1. Architecture: index.html is comprised of 

    - App components:  

        - welcome component,

        - product component

            - star component

        - product detail component

    - Product data service

2. Outline:
    
    - Components, life cycle

    - Template, Interpolation, Directives for user interface

    - data binding, pipes

    - nested components and communication between container and nested component 

    - service and dependency injection(inject services into component)

    - Retrieving data using http, communicate with back-end server

    - Setup routing to navigate between user views

3. 



#### Angular session notes

4. in app.module.ts: decorator: @ngModule // if you want to create a module

5. in app.component.tx:  component, we must specify the selector, we can have multiple css file

6. ng generate component products/product-list.component, cli creates all files needed and add products to app.module.tx

7. copy selector: `app-product-list` from product-list.component.ts @Component, use this component in app.component.html as `<app-product-list></app-product-list>`

8. npm install bootstrap, add path of bootstrap.min.css to configuration file, which is angular-cli.json, style

9.  prop binding, `<img [src]="product.imageUrl" [title] = "product.productName"/>`

10. ngIf show image and hide

12. pipe symbol

13. create interface, the command are from github page : ng g interface interfacename. iproduct here set the type of all props

14. ngOnInit, lift cycle, undestroy, unchange, 

15. put data in a service, then inject service into component: add provider in @Component

16. import, specify(last bullet point), inject as dependency in constructor 

17. http, add this module in app.module.ts, import in service file

18. in angular1 get response using promise, same in angular2

19. `import { Component, OnInit, Input} from '@angular/core';`input, child component can use parent component's data

20. output, communication to parent

