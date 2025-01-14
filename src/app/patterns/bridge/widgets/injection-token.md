# Injection Token in Angular

## Introduction
In Angular, an Injection Token is used to create a token that can be used in dependency injection. It is particularly useful when you need to inject a value that is not a class, such as a string, object, or function.

## Creating an Injection Token
To create an Injection Token, you use the `InjectionToken` class from `@angular/core`. Here is an example:

```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
```

In this example, `API_URL` is an injection token that can be used to inject a string value.

## Providing an Injection Token
To provide a value for the injection token, you use the `providers` array in an Angular module or component:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { API_URL } from './api-url.token';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule],
    providers: [{ provide: API_URL, useValue: 'https://api.example.com' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## Injecting an Injection Token
To inject the value associated with the injection token, you use the `@Inject` decorator in a component or service:

```typescript
import { Component, Inject } from '@angular/core';
import { API_URL } from './api-url.token';

@Component({
    selector: 'app-root',
    template: '<h1>Welcome to {{ apiUrl }}</h1>'
})
export class AppComponent {
    constructor(@Inject(API_URL) public apiUrl: string) {}
}
```

## Use Cases
1. **Configuration Values**: Injection tokens are useful for injecting configuration values that are not tied to a specific class.
2. **Multi-Provider Tokens**: They can be used to create multi-provider tokens, allowing multiple values to be injected as an array.
3. **Abstract Classes and Interfaces**: When you need to inject an abstract class or interface, you can use an injection token to provide the implementation.

## Conclusion
Injection tokens in Angular provide a flexible way to inject non-class values and are essential for certain use cases such as configuration and multi-provider tokens. They enhance the dependency injection system by allowing more complex and varied injection scenarios.

## Additional Use Cases

### Injecting a Function
Injection tokens can be used to inject functions. This is useful when you need to provide a utility function or a factory function.

```typescript
import { InjectionToken } from '@angular/core';

export const LOGGER = new InjectionToken<() => void>('LOGGER');

@NgModule({
    providers: [{ provide: LOGGER, useValue: () => console.log('Logging...') }]
})
export class AppModule {}
```

To inject and use the function:

```typescript
import { Component, Inject } from '@angular/core';
import { LOGGER } from './logger.token';

@Component({
    selector: 'app-root',
    template: '<button (click)="log()">Log</button>'
})
export class AppComponent {
    constructor(@Inject(LOGGER) private logger: () => void) {}

    log() {
        this.logger();
    }
}
```

### Injecting an Object
You can also use injection tokens to inject complex objects.

```typescript
import { InjectionToken } from '@angular/core';

export interface AppConfig {
    apiUrl: string;
    featureFlag: boolean;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('APP_CONFIG');

@NgModule({
    providers: [{ provide: APP_CONFIG, useValue: { apiUrl: 'https://api.example.com', featureFlag: true } }]
})
export class AppModule {}
```

To inject and use the object:

```typescript
import { Component, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from './app-config.token';

@Component({
    selector: 'app-root',
    template: '<h1>API URL: {{ config.apiUrl }}</h1>'
})
export class AppComponent {
    constructor(@Inject(APP_CONFIG) public config: AppConfig) {}
}
```

### Injecting a Multi-Provider Token
Injection tokens can be used to create multi-provider tokens, allowing multiple values to be injected as an array.

```typescript
import { InjectionToken } from '@angular/core';

export const MULTI_TOKEN = new InjectionToken<string[]>('MULTI_TOKEN');

@NgModule({
    providers: [
        { provide: MULTI_TOKEN, useValue: 'Value 1', multi: true },
        { provide: MULTI_TOKEN, useValue: 'Value 2', multi: true }
    ]
})
export class AppModule {}
```

To inject and use the multi-provider token:

```typescript
import { Component, Inject } from '@angular/core';
import { MULTI_TOKEN } from './multi-token.token';

@Component({
    selector: 'app-root',
    template: '<ul><li *ngFor="let value of values">{{ value }}</li></ul>'
})
export class AppComponent {
    constructor(@Inject(MULTI_TOKEN) public values: string[]) {}
}
```
