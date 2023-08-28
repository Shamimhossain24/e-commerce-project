import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditBasicInfoComponent } from 'src/app/shared/dialog-view/edit-basic-info/edit-basic-info.component';

@Component({
  selector: 'app-basic-info',
  templateUrl: './basic-info.component.html',
  styleUrls: ['./basic-info.component.scss']
})
export class BasicInfoComponent implements OnInit {

  constructor(
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  openNewDialog() {
    this.dialog.open(EditBasicInfoComponent, {
      panelClass: ['theme-dialog'],
      autoFocus: false,
      disableClose: false
    });
  }

}
