export const items = [
    {
        label: 'Araba',
        icon:'pi pi-fw pi-car',
        items: [
            {
                label: 'Araba Listesi',
                icon:'pi pi-fw pi-list'
            },
            {
                label: 'Kiradaki Arabalar',
                icon:'pi pi-fw pi-inbox'
            },
            {
                label: 'Silinen Arabalar',
                icon:'pi pi-fw pi-trash'
            },
            {
                label: 'Ekle',
                icon:'pi pi-fw pi-calendar-plus',
                routerLink: ['car-add']
            },
        ]
        },
        {
        label: 'Marka',
        icon:'pi pi-fw pi-tags',
        items: [
            {
                label: 'Marka İşlemleri',
                icon:'pi pi-fw pi-list',
                routerLink: ["brands"]
            },
        ]
        },
        {
        label: 'Renk',
        icon:'pi pi-fw pi-palette',
        items: [
            {
                label: 'Renk Listesi',
                icon:'pi pi-fw pi-list'
            },
            {
                label: 'Silinen Renkler',
                icon:'pi pi-fw pi-trash'
            },
            {
                label: 'Ekle',
                icon:'pi pi-fw pi-calendar-plus',
                routerLink: ['color-add']
            },
        ]
        },
        {
        label: 'Kiralamalar',
        icon:'pi pi-fw pi-calendar',
        items: [
            {
                label: 'Kiralama Listesi',
                icon:'pi pi-fw pi-list'
            }
        ]
    },
    {
        label: 'Kullanıcılar',
        icon:'pi pi-fw pi-users',
        items: [
            {
                label: 'Bireysel Müşteriler',
                icon:'pi pi-fw pi-user'
            },
            {
                label: 'Kurumsal Müşteriler',
                icon:'pi pi-fw pi-building'
            }
        ]
    }
]