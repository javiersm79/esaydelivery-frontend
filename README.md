# Deliverman

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Estructura de Carpetas

|-- app
     |-- modules
       |-- home
           |-- [+] components
           |-- [+] pages
           |-- delviery-routing.module.ts
           |-- delivery.module.ts
     |-- core
       |-- [+] authentication
       |-- [+] footer
       |-- [+] guards
       |-- [+] http
       |-- [+] interceptors
       |-- [+] mocks
       |-- [+] services
       |-- [+] header
       |-- core.module.ts
       |-- ensureModuleLoadedOnceGuard.ts
       |-- logger.service.ts
     |
     |-- shared
          |-- [+] components
          |-- [+] directives
          |-- [+] pipes
          |-- [+] models
     |
     |-- [+] configs
|-- assets
     |-- scss
          |-- [+] partials
          |-- _base.scss
          |-- styles.scss

## Modulos
Tom Crowley has a really interesting article on this topic (found here), where he works his way from a bare bone Angular project to a really solid folder structure. I really liked the idea of modules with designated folders for pages- and components. It’s perfect for scaling and component- and page logic are separated. So if you’re interested in the though-process behind this structure, head over there.
|-- modules
       |-- home
           |-- components
           |-- pages
           |    |-- home
           |         |-- home.component.ts|html|scss|spec
           |
           |-- home-routing.module.ts
           |-- home.module.ts
 ## The Core Module
 The CoreModule takes on the role of the root AppModule , but is not the module which gets bootstrapped by Angular at run-time. The CoreModule should contain singleton services (which is usually the case), universal components and other features where there’s only once instance per application. To prevent re-importing the core module elsewhere, you should also add a guard for it in the core module’ constructor.
 |-- core
        |-- [+] authentication
        |-- [+] footer
        |-- [+] guards
        |-- [+] http
        |-- [+] interceptors
        |-- [+] mocks
        |-- [+] services
        |-- [+] header
        |-- core.module.ts
        |-- ensureModuleLoadedOnceGuard.ts
        |-- logger.service.ts

## The Shared Module
The SharedModule is where any shared components, pipes/filters and services should go. The SharedModule can be imported in any other module when those items will be re-used. The shared module shouldn’t have any dependency to the rest of the application and should therefore not rely on any other module.
|-- shared
     |-- [+] components
     |-- [+] directives
     |-- [+] pipes
The components folder contains all the “shared” components. This are components like loaders and buttons , which multiple components would benefit from.
|-- components
     |-- loader
          |-- loader.component.ts|html|scss|spec.ts
     |-- buttons
          |-- favorite-button
               |-- favorite-button.component.ts|html|scss|spec.ts
          |-- collapse-button
               |-- collapse-button.component.ts|html|scss|spec.ts
The directives , pipes and models folders contains the directives, pipes and models used across the application.
|-- directives
      |-- auth.directive.ts|spec.ts
|-- pipes
     |-- capitalize.pipe.ts
     |-- safe.pipe.ts
|-- models
     |-- user.model.ts
     |-- server-response.ts
     
 ## Configs
 The config folder contains app settings and other predefined values.
 |-- configs
      |-- app-settings.config.ts
      |-- dt-norwegian.config.ts
      
 ## Styling
 The global styles for the project are placed in a scss folder under assets .
 |-- scss
      |-- partials
           |-- _layout.vars.scss
           |-- _responsive.partial.scss
      |-- _base.scss
 |-- styles.scss
 The scss folder does only contain one folder — partials. Partial-files can be imported by other scss files. In my case, styles.scss imports all the partials to apply their styling.
