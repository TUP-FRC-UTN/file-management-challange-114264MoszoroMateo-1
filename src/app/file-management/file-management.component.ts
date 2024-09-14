import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, Pipe } from '@angular/core';
import { FileItemComponent } from '../file-item/file-item.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { FILE_LIST, OWNERS,  } from '../../data/file.storage';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-file-management',
  standalone: true,
  imports: [FileItemComponent, FormsModule,CommonModule,DatePipe,],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './file-management.component.html',
  styleUrl: './file-management.component.css'
})
export class FileManagementComponent implements OnInit{
  files:FileItem[]=[]
  fileType=FileType
  newFileflag:boolean = false
  
  ngOnInit(): void {
    this.files = FILE_LIST
    this.sortFiles()
  }


  newFile(){
    this.newFileflag = true
  }
  goFileManager(evento:boolean){
    this.newFileflag=evento
  }
  sortFiles(){
    this.files.sort((a,b)=>a.name.toLowerCase().localeCompare(b.name.toLowerCase()))
    this.files.sort((a,b)=>a.type-b.type)
  }
  addNewFile(newFile:FileItem){
    this.files.push(newFile)
    this.sortFiles()
  }
}
