import { ColorService } from './../../services/color.service';
import { ColorModel } from './../../models/colorModel';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-color-delete',
  templateUrl: './color-delete.component.html',
  styleUrls: ['./color-delete.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class ColorDeleteComponent implements OnInit {

  @Input() color : ColorModel;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private colorService: ColorService) { }

  ngOnInit(): void { 
  }

  delete(color:ColorModel){
    if (color != null) {
      this.colorService.delete(color.id).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary:'Successful !', detail: response.message});
        }
        else{
          this.messageService.add({severity:'error', summary:'Error !', detail: response.message});
        }
      })
    }
  }

  confirm(color:ColorModel) {
    this.confirmationService.confirm({
        message: `<strong>${this.color.name}</strong> isimli rengi gerçekten silmek istiyor musunuz ?`,
        header: 'İşlem Onayı',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Onaylandı !', detail:'Silme işlemi onaylandı.'});
            this.delete(color);
        },
        reject: (type:any) => {
            switch(type) {
                case ConfirmEventType.REJECT:
                    this.messageService.add({severity:'error', summary:'Reddedildi !', detail:'Silme işlemi reddedildi.'});
                break;
                case ConfirmEventType.CANCEL:
                    this.messageService.add({severity:'warn', summary:'İptal Edildi !', detail:'Silme işlemi iptal edildi.'});
                break;
            }
        }
    });
}
}
