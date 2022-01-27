export const items = [
    {
        label: 'Araba',
        icon:'pi pi-fw pi-car',
        items: [
            {
                label: 'Araba İşlemleri',
                icon:'pi pi-fw pi-list',
                routerLink: ["cars"]
            },
            {
                label: 'Kiradaki Arabalar',
                icon:'pi pi-fw pi-inbox'
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
                label: 'Renk İşlemleri',
                icon:'pi pi-fw pi-list',
                routerLink: ["colors"]
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
    },
    {
        label: 'Faturalar',
        icon:'pi pi-fw pi-book',
        items: [
            {
                label: 'Fatura İşlemleri',
                icon:'pi pi-fw pi-user',
                routerLink: ["invoices"]
            }
        ]
    }
]