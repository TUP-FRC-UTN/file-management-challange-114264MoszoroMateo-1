import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FileItem, FileOwner, FileType } from '../../models/file.item.model';
import { OWNERS} from '../../data/file.storage';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-file-item',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './file-item.component.html',
  styleUrl: './file-item.component.css'
})
export class FileItemComponent implements OnInit{
 
  file:FileItem={
    id:'',
    name:'',
    creation: new Date(),
    owners:[],
    type:FileType.FOLDER
  }
  fileType=FileType
  owners1:FileOwner[]=[]
  
  @Output() back = new EventEmitter<boolean>()
  @Output() save = new EventEmitter<FileItem>()
  
  
  ngOnInit(): void {
    this.owners1=OWNERS
  }
  
  goBack(){
    this.back.emit(false)
  }

  saveNewFile(form: NgForm){
    if(form.invalid){
      alert("Formulario no Valido!")
      return
    }


    this.file.owners=this.owners1
    this.save.emit(form.value)

    form.reset()
    this.goBack()
  }
  addOwner() {
    const selectedOwner:FileOwner={
      name:'',
      avatarUrl:''
    }
    this.file.owners.push(selectedOwner)

  }

}
