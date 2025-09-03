export interface UserDetails {
    userName: string, 
    role: 'Student' | 'Admin' | 'Housekeeper' | 'Matron',
    phoneNumber: string,
    email: string
}