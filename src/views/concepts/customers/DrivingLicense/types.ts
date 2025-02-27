import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type DrivingLicenseSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<DrivingLicenseSchema>
    errors: FieldErrors<DrivingLicenseSchema>
}
