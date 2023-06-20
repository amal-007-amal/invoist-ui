import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(
    private snackService:MatSnackBar
  ) { }

  success(message:string){
    return this.snackService.open(message,"close",{
      panelClass:['snackbar-success'],
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

  error(message:string){
    return this.snackService.open(message,"clsoe",{
      panelClass:['snackbar-error'],
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

  info(message:string){
    return this.snackService.open(message,"clsoe",{
      panelClass:['snackbar-info'],
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

  warning(message:string){
    return this.snackService.open(message,"clsoe",{
      panelClass:['snackbar-warning'],
      duration:5000,
      horizontalPosition:'center',
      verticalPosition:'top'
    })
  }

}
