import { Injectable } from '@angular/core';

/*
 * The Goal of the Error Service is to storage the error message
 */

@Injectable({
  providedIn: 'root',
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
