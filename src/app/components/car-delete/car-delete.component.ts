import { CarService } from './../../services/car.service';
import { CarModel } from './../../models/carModel';
import { Component, Input, OnInit } from '@angular/core';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-car-delete',
  templateUrl: './car-delete.component.html',
  styleUrls: ['./car-delete.component.css'],
  providers: [ConfirmationService,MessageService]
})
export class CarDeleteComponent implements OnInit {

  @Input() car : CarModel; 

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService, private carService: CarService) { }

  ngOnInit(): void { 
  }

  confirm(car:CarModel) {
    this.confirmationService.confirm({
        message: `<strong>${this.car.brandName}</strong> markalı aracı gerçekten silmek istiyor musunuz ?`,
        header: 'İşlem Onayı',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
            this.messageService.add({severity:'info', summary:'Onaylandı !', detail:'Silme işlemi onaylandı.'});
            this.delete(car);
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

delete(car:CarModel){
  if (car != null) {
    this.carService.delete(car.id).subscribe(response => {
      if (response.success) {
        this.messageService.add({severity:'success', summary:'Successful !', detail: response.message});
      }
      else{
        this.messageService.add({severity:'error', summary:'Error !', detail: response.message});
      }
    })
  }
}
}
