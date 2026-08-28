export interface HostelData {
    hostelNo: string,
    hostelName: string,
    capacity: number,
    type: 'Male Hostel' | 'Female Hostel'
}
export interface RoomData {
    roomNo: string,
    hostelNo: string
}