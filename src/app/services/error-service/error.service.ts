import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  private errorMessage: string = 'Default Error Message';

  setError(message: string) {
    this.errorMessage = message;
  }

  getError(): string | null {
    return this.errorMessage;
  }
}