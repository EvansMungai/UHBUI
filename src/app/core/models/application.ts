import { HttpErrorResponse } from "@angular/common/http";

export interface ApplicationData {
    applicationPeriod: string,
    registrationNo: string,
    preferredHostel: string,
    status: string,
    roomNo: string,
    disability: string,
    disabilityDetails: string,
    accommodatedBefore: string,
    accommodationPeriod: string,
    isSponsored: string,
    sponsor: string,
    receivesHelb: string,
    helbAmount: string,
    receivedBursary: string,
    bursaryAmount: string,
    workStudyBenefitsBefore: string,
    workStudyPeriod: string,
    specialExamsOnFinancialGrounds: string,
    specialExamPeriod: string,
    reasonsForConsideration: string
}