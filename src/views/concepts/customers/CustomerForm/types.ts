import type { Control, FieldErrors } from 'react-hook-form'

export type OverviewFields = {
    employeeNumber: string
    loginId: string
    salutation: Array<{ value: string; label: string }>
    firstName: string
    middleName: string
    lastName: string
    gender: Array<{ value: string; label: string }>
    dateOfBirth: string

    email: string
    dialCode: string
    phoneNumber: string
    img: string
}

export type AddressFields = {
    dateOfJoin: string
    effectiveFrom: string
    position: string
    orgStructure: string
    location: string
    department: string
    designation: string
    grade: string
    costCenter: string
    officialEmail: string
    reportingManager: string
    functionalManager: string
    action: string
    actionReason: string

    country: string
    address: string
    postcode: string
    city: string
}

export type ProfileImageFields = {
    img: string
}

export type AdditionalInformationFields = {
    calendar: string
    attendance: string
    shiftType: string
    shiftGroup: string
    employmentStatus: string
    confirmationDueDate: string
    fullPartTime: string
    contractType: string
    contractEndDate: string
    contractor: string
    experienceCategory: string
    experienceInMonth: string
    noticePeriodInDays: string
    secretary: string
    reEmployed?: boolean
    oldEmployeeNumber: string
    systemUser?: boolean
    originalHireDate: string
}

export type PayRollfields = {
    pan: string
    pfApplicable?: boolean
    pfNumber: string
    esiApplicable?: boolean
    esiNumber: string
    ptApplicable?: boolean
    ptLocation: string
    glCode: string
    payMode: string
    appliedFrom: string
    payGroup: string
}


export type TagsFields = {
    tags: Array<{ value: string; label: string }>
}

export type AccountField = {
    banAccount?: boolean
    accountVerified?: boolean
}

export type CustomerFormSchema = OverviewFields &
    AddressFields &
    ProfileImageFields &
    AdditionalInformationFields &
    PayRollfields &
    TagsFields &
    AccountField

export type FormSectionBaseProps = {
    control: Control<CustomerFormSchema>
    errors: FieldErrors<CustomerFormSchema>
}
