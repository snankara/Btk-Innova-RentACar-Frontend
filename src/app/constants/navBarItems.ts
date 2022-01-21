export const items = [
    {
        label:'Anasayfa',
        icon:'pi pi-fw pi-home',
        routerLink: [""]
    },

    {
        label:'Users',
        icon:'pi pi-fw pi-user',
        items:[
            {
                label:'New',
                icon:'pi pi-fw pi-user-plus',

            },
            {
                label:'Delete',
                icon:'pi pi-fw pi-user-minus',

            },
            {
                label:'Search',
                icon:'pi pi-fw pi-users',
                items:[
                {
                    label:'Filter',
                    icon:'pi pi-fw pi-filter',
                    items:[
                        {
                            label:'Print',
                            icon:'pi pi-fw pi-print'
                        }
                    ]
                },
                {
                    icon:'pi pi-fw pi-bars',
                    label:'List'
                }
                ]
            }
        ]
    },
    {
        label:'Events',
        icon:'pi pi-fw pi-calendar',
        items:[
            {
                label:'Ekle',
                icon:'pi pi-fw pi-calendar-plus',
                items:[
                    {
                        label:'Marka',
                        icon:'pi pi-fw pi-tags',
                        routerLink: ["brand-add"]
                    },
                    {
                        label:'Renk',
                        icon:'pi pi-fw pi-palette',
                        routerLink: ["color-add"]
                    },
                    {
                        label:'Araba',
                        icon:'pi pi-fw pi-car'
                    },

                    {
                        label:'Kiralama',
                        icon:'pi pi-fw pi-car',
                        routerLink: ["rental-add"]
                    },
                ]
            },
            {
                label:'Güncelle',
                icon:'pi pi-fw pi-pencil',
                items:[
                    {
                        label:'Marka',
                        icon:'pi pi-fw pi-tags',
                        routerLink: ["brand-update"]
                    },
                    {
                        label:'Renk',
                        icon:'pi pi-fw pi-palette',
                        routerLink: ["color-update"]
                    },
                    {
                        label:'Araba',
                        icon:'pi pi-fw pi-car'
                    },

                ]
            },
        ]
    },
    // {
    //     label:'Quit',
    //     icon:'pi pi-fw pi-power-off'
    // }
]