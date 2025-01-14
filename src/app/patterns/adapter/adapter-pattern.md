# Adapter Design Pattern in Angular

The Adapter Design Pattern is a structural design pattern that allows incompatible interfaces to work together. It acts as a bridge between two incompatible interfaces by converting the interface of a class into another interface that a client expects.

## When to Use the Adapter Pattern

- When you want to use an existing class, and its interface does not match the one you need.
- When you want to create a reusable class that cooperates with unrelated or unforeseen classes that might not have compatible interfaces.
- When you need to use several existing subclasses, but it's impractical to adapt their interface by subclassing every one.

## Example in Angular

Let's consider an example where we have a legacy logging service that we want to use in our Angular application, but its interface is different from what our application expects.

### Legacy Logging Service

```typescript
// filepath: /src/app/services/legacy-logging.service.ts
export class LegacyLoggingService {
  logMessage(message: string): void {
    console.log(`Legacy log: ${message}`);
  }
}
```

### Target Interface
Our application expects a logging service with a log method.
```typescript
// filepath: /src/app/services/logging.service.ts
export interface LoggingService {
  log(message: string): void;
}
```

### Adapter
We create an adapter that implements the LoggingService interface and uses the LegacyLoggingService to perform the logging.

```typescript
// filepath: /src/app/services/logging-adapter.service.ts
import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';
import { LegacyLoggingService } from './legacy-logging.service';
 
@Injectable({
  providedIn: 'root',
})
export class LoggingAdapterService implements LoggingService {
  constructor(private legacyLoggingService: LegacyLoggingService) {}

  log(message: string): void {
    this.legacyLoggingService.logMessage(message);
  }
}
```

Now, we can use the LoggingAdapterService in our Angular component.


```typescript
// filepath: /src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { LoggingAdapterService } from './services/logging-adapter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private loggingService: LoggingAdapterService) {}

  ngOnInit(): void {
    this.loggingService.log('Application has started.');
  }
}

```
The Adapter Design Pattern is useful when you need to integrate classes with incompatible interfaces. In Angular, you can use this pattern to adapt services or components to work together seamlessly. By creating an adapter, you can ensure that your application remains flexible and maintainable.


