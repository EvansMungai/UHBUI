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
                    {label: 'My Account', link: '/my-account'},
                    {label: 'Log out', link: '/log-out'},
                ]
            }
        ]
    }
}