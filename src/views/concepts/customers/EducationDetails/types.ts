import type { Control, FieldErrors } from 'react-hook-form'

export type PermanentAddressFields = {
    // permanentAddress1: string
}

export type EducationDetailsSchema = PermanentAddressFields

export type FormSectionBaseProps = {
    control: Control<EducationDetailsSchema>
    errors: FieldErrors<EducationDetailsSchema>
}