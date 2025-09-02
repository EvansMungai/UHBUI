import { Link } from "./links"

export const HomeLinks: Link[] = [
    {
        title: "Contact",
        url: "#footer",
        class: "fa-bars"
    },
    {
        title: "Sign Up",
        url: "/signup",
        class: "fa-solid fa-bars"
    },
    {
        title: "Log In",
        url: "/login",
        class: "fa-solid fa-bars"
    }
]
export const StudentLinks: Link[] = [
    {
        title: "Dashboard",
        url: "/uhb/student",
        class: "house"
    },
    {
        title: "Book a Room",
        url: "/uhb/student/booking",
        class: "pen-to-square"
    },
    {
        title: "Application Details",
        url: "/uhb/student/application-details",
        class: "file-pen"
    },
    {
        title: "Accommodation Details",
        url: "/uhb/student/accommodation-details",
        class: "house-user"
    },
    {
        title: "User Details",
        url: "/uhb/student/user-details",
        class: "user-gear"
    },
    {
        title: "Log Out",
        url: "/",
        class: "right-from-bracket"
    },
]
export const HousekeeperLinks: Link[] = [
    {
        title: "Review Applications",
        url: "/uhb/housekeeper",
        class: "file-pen"
    },
    {
        title: "Successful Applications",
        url: "/uhb/housekeeper/successful-applications",
        class: "book"
    },
    {
        title: "User Details",
        url: "/uhb/housekeeper/user-details",
        class: "user-gear"
    },
    {
        title: "Log Out",
        url: "/",
        class: "right-from-bracket"
    }
]
export const MatronLinks: Link[] = [
    {
        title: "Review Allocations",
        url: "/uhb/matron",
        class: "file-pen"
    },
    {
        title: "Allocated Rooms",
        url: "/uhb/matron/allocated-rooms",
        class: "tents"
    },
    {
        title: "User Details",
        url: "/uhb/matron/user-details",
        class: "user-gear"
    },
    {
        title: "Log Out",
        url: "/",
        class: "right-from-bracket"
    }
]
export const AdminLinks: Link[] = [
    {
        title: "Dashboard",
        url: "/uhb/admin",
        class: ""
    },
    {
        title: "Hostel Management",
        url: "/uhb/admin/register",
        class: ""
    },
    {
        title: "User Management",
        url: "/uhb/admin/change-user-roles",
        class: ""
    },
    {
        title: "User Details",
        url: "/uhb/admin/user-details",
        class: "users-gear"
    },
    {
        title: "Log Out",
        url: "/",
        class: "right-from-bracket"
    }
]
