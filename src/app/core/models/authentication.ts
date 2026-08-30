interface User {
    userName: string;
    regNo: string;
    roles: string[]
}
export interface UserDetials { 
    username: string,
    role: 'Student' | 'Admin' | 'Housekeeper' | 'Matron'
    phonenumber: string
    email: string
}
export interface AccessRequest{
    userName: string;
    password: string;
}
export interface AccessResponse {
    token: string;
    user: User;
}