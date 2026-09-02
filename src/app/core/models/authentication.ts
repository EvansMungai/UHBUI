export interface User {
    userName: string;
    regNo: string;
    roles: string[]
}
export interface AccessRequest{
    userName: string;
    password: string;
}
export interface AccessResponse {
    token: string;
    user: User;
}