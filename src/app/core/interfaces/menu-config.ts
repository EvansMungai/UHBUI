import { MenuConfig } from "./Menu";

export const MENU_CONFIGS: Record<string, MenuConfig> = {
    student: {
        menuSections: [
            {
                title: '',
                items: [
                    { label: 'Dashboard', link: '/uhb/student' },
                    { label: 'Book a Room', link: '/uhb/student/booking' },
                    { label: 'Application Details', link: '/uhb/student/application-details' },
                    { label: 'Accommodation Details', link: '/uhb/student/accommodation-details' }
                ]
            }
        ],
        dropdownMenuSections: [
            {
                title: '',
                items: [
                    { label: 'My Account', link: '/my-account' },
                ]
            }
        ]
    },
    housekeeper: {
        menuSections: [
            {
                title: '',
                items: [
                    { label: 'Dashboard', link: '/uhb/housekeeper' },
                    { label: 'View Application', link: '/uhb/housekeeper/view-application' },
                    { label: 'Successful Applications', link: '/uhb/housekeeper/successful-applications' },
                ]
            }
        ],
        dropdownMenuSections: [
            {
                title: '',
                items: [
                    { label: 'My Account', link: '/my-account' },
                ]
            }
        ]
    },
    matron: {
        menuSections: [
            {
                title: '',
                items: [
                    { label: 'Dashboard', link: '/uhb/matron' },
                    { label: 'View Allocation', link: '/uhb/matron/view-allocation' },
                    { label: 'Allocated Rooms', link: '/uhb/matron/allocated-rooms' },
                ]
            }
        ],
        dropdownMenuSections: [
            {
                title: '',
                items: [
                    { label: 'My Account', link: '/my-account' },
                ]
            }
        ]
    },
    admin: {
        menuSections: [
            {
                title: '',
                items: [
                    { label: 'Dashboard', link: '/uhb/admin' },
                    { label: 'Resources Management', link: '/uhb/admin/resources' },
                    { label: 'User Management', link: '/uhb/admin/change-user-role' },
                ]
            }
        ],
        dropdownMenuSections: [
            {
                title: '',
                items: [
                    { label: 'My Account', link: '/my-account' },
                ]
            }
        ]
    }
}