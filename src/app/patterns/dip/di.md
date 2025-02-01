# Dependency Injection in Angular

Dependency Injection (DI) in Angular is a design pattern that allows injecting dependencies (services, components, etc.) into classes rather than creating them manually.

---

## **1. Using DI for a Logging Service**

### **Scenario**: You need a logging mechanism that can be used across multiple components.

### **Implementation**:
#### **Create a Logging Service**
```typescript
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Provided at the root level
})
export class LoggerService {
  log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}
```

#### **Inject the Service into a Component**
```typescript
import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Dashboard component initialized');
  }
}
```
✅ **DI allows us to inject `LoggerService` without manually creating instances in components.**

---

## **2. Injecting an HTTP Service**

### **Scenario**: Fetching data from an API using Angular’s `HttpClient`.

### **Implementation**:
#### **Create a Data Service**
```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
```

#### **Injecting the Service in a Component**
```typescript
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  template: `<div *ngFor="let user of users">{{ user.name }}</div>`,
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = data;
    });
  }
}
```
✅ **DI helps inject `HttpClient` into `UserService`, and `UserService` into `UsersComponent`.**

---

## **3. Injecting Services into Other Services**

### **Scenario**: A user authentication service that needs a logging service.

### **Implementation**:
#### **Create an Authentication Service**
```typescript
import { Injectable } from '@angular/core';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private logger: LoggerService) {}

  login(username: string, password: string): void {
    this.logger.log(`User ${username} is trying to log in`);
    // Simulate authentication logic here
  }
}
```

#### **Injecting AuthService into a Component**
```typescript
import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  template: `<button (click)="login()">Login</button>`,
})
export class LoginComponent {
  constructor(private authService: AuthService) {}

  login(): void {
    this.authService.login('john.doe', 'password123');
  }
}
```
✅ **DI allows `AuthService` to use `LoggerService`, promoting modularity and reusability.**

---

## **4. Injecting Configurations Dynamically**

### **Scenario**: Providing different API endpoints based on environments.

### **Implementation**:
#### **Create a Config Token**
```typescript
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('apiUrl');
```

#### **Provide Different Configurations**
```typescript
import { NgModule } from '@angular/core';
import { API_URL } from './api-token';

@NgModule({
  providers: [{ provide: API_URL, useValue: 'https://api.prod.com' }],
})
export class AppModule {}
```

#### **Injecting the Config in a Service**
```typescript
import { Injectable, Inject } from '@angular/core';
import { API_URL } from '../tokens/api-token';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor(@Inject(API_URL) private apiUrl: string) {
    console.log(`API URL: ${this.apiUrl}`);
  }
}
```
✅ **This approach makes it easy to swap configurations without changing service code.**

---

## **5. Multi-Level Dependency Injection (Hierarchical DI)**

### **Scenario**: Different components need different service instances.

### **Implementation**:
#### **Provide Service at Different Levels**
```typescript
@Component({
  selector: 'app-parent',
  template: `<app-child></app-child>`,
  providers: [LoggerService], // New instance for ParentComponent
})
export class ParentComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Parent component created');
  }
}

@Component({
  selector: 'app-child',
  template: `Child Component`,
})
export class ChildComponent {
  constructor(private logger: LoggerService) {
    this.logger.log('Child component created');
  }
}
```
✅ **DI at different levels creates new service instances per provider scope.**

---

## **Summary**

| Example | DI Feature Used |
|---------|---------------|
| **Logging Service** | Basic DI |
| **HTTP Service** | DI with `HttpClient` |
| **Auth Service** | DI in services |
| **Config Service** | DI with Injection Tokens |
| **Hierarchical DI** | Scoped DI (Component-Level Providers) |

**DI makes Angular applications modular, scalable, and testable! 🚀**

