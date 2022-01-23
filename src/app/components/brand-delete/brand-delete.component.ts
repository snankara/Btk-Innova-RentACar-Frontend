import { BrandService } from './../../services/brand.service';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';
import { BrandModel } from 'src/app/models/brandModel';

@Component({
  selector: 'app-brand-delete',
  templateUrl: './brand-delete.component.html',
  styleUrls: ['./brand-delete.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class BrandDeleteComponent implements OnInit {

  @Input() brand : BrandModel;

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private brandService: BrandService) { }

  ngOnInit(): void {
  }

  delete(brand:BrandModel){
    if (brand != null) {
      this.brandService.delete(brand.id).subscribe(response => {
        if (response.success) {
          this.messageService.add({severity:'success', summary:'Successful !', detail: response.message});
        }
        else{
          this.messageService.add({severity:'error', summary:'Error !', detail: response.message});
        }
      })
    }
  }

  confirm(brand:BrandModel) {
    this.confirmationService.confirm({
        message: `<strong>${this.brand.name}</strong> isimli markayı gerçekten silmek istiyor musunuz ?`,
        header: 'İşlem Onayı',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Onaylandı !', detail:'Silme işlemi onaylandı.'});
            this.delete(brand);
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
