import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type EmployeeDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<EmployeeDetailsSchema>
    errors: FieldErrors<EmployeeDetailsSchema>
}