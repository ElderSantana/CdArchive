import { Component, Inject } from '@angular/core';
import { MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent  {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    ){}
    onNoClick(): void {
     this.dialogRef.close(false);
    }
    onYesClick(): void {
      this.dialogRef.close(true);
     }
}
