import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type DetailSectionProps = FormSectionBaseProps


const DetailSection = ({ control, errors }: DetailSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Family Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Relationship"
                    invalid={Boolean(errors.relationship)}
                    errorMessage={errors.relationship?.message}
                >
                    <Controller name="relationship" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Name"
                    invalid={Boolean(errors.name)}
                    errorMessage={errors.name?.message}
                >
                    <Controller name="name" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Date of Birth"
                    invalid={Boolean(errors.dateOfBirth)}
                    errorMessage={errors.dateOfBirth?.message}
                >
                    <Controller name="dateOfBirth" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>

                <FormItem
                    label="Gender"
                    invalid={Boolean(errors.gender)}
                    errorMessage={errors.gender?.message}
                >
                    <Controller name="gender" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Dependant"
                    invalid={Boolean(errors.dependant)}
                    errorMessage={errors.dependant?.message}
                >
                    <Controller name="dependant" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>

                <FormItem
                    label="Address"
                    invalid={Boolean(errors.address)}
                    errorMessage={errors.address?.message}
                >
                    <Controller name="address" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Minor"
                    invalid={Boolean(errors.minor)}
                    errorMessage={errors.minor?.message}
                >
                    <Controller name="minor" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>

                <FormItem
                    label="Guardian Name"
                    invalid={Boolean(errors.guardianName)}
                    errorMessage={errors.guardianName?.message}
                >
                    <Controller name="guardianName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Guardian Address"
                    invalid={Boolean(errors.guardianAddress)}
                    errorMessage={errors.guardianAddress?.message}
                >
                    <Controller name="guardianAddress" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Guardian's Relation with Nominee"
                    invalid={Boolean(errors.guardianRelation)}
                    errorMessage={errors.guardianRelation?.message}
                >
                    <Controller name="guardianRelation" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Guardian Contact Number"
                    invalid={Boolean(errors.guardianContact)}
                    errorMessage={errors.guardianContact?.message}
                >
                    <Controller name="guardianContact" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Name as in Passport"
                    invalid={Boolean(errors.passportName)}
                    errorMessage={errors.passportName?.message}
                >
                    <Controller name="passportName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Passport Number"
                    invalid={Boolean(errors.passportNumber)}
                    errorMessage={errors.passportNumber?.message}
                >
                    <Controller name="passportNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Place of Issue"
                    invalid={Boolean(errors.placeOfIssue)}
                    errorMessage={errors.placeOfIssue?.message}
                >
                    <Controller name="placeOfIssue" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Smoker"
                    invalid={Boolean(errors.smoker)}
                    errorMessage={errors.smoker?.message}
                >
                    <Controller name="smoker" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>

                <FormItem
                    label="Student"
                    invalid={Boolean(errors.student)}
                    errorMessage={errors.student?.message}
                >
                    <Controller name="student" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>

                <FormItem
                    label="Insured"
                    invalid={Boolean(errors.insured)}
                    errorMessage={errors.insured?.message}
                >
                    <Controller name="insured" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>

                <FormItem
                    label="Occupation"
                    invalid={Boolean(errors.occupation)}
                    errorMessage={errors.occupation?.message}
                >
                    <Controller name="occupation" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Other Insurance"
                    invalid={Boolean(errors.otherInsurance)}
                    errorMessage={errors.otherInsurance?.message}
                >
                    <Controller name="otherInsurance" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Graduation Date"
                    invalid={Boolean(errors.graduationDate)}
                    errorMessage={errors.graduationDate?.message}
                >
                    <Controller name="graduationDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>

                <FormItem
                    label="Comments"
                    invalid={Boolean(errors.comments)}
                    errorMessage={errors.comments?.message}
                >
                    <Controller name="comments" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="SSN"
                    invalid={Boolean(errors.ssn)}
                    errorMessage={errors.ssn?.message}
                >
                    <Controller name="ssn" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Nationality"
                    invalid={Boolean(errors.nationality)}
                    errorMessage={errors.nationality?.message}
                >
                    <Controller name="nationality" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Passport Issue Date"
                    invalid={Boolean(errors.passportIssueDate)}
                    errorMessage={errors.passportIssueDate?.message}
                >
                    <Controller name="passportIssueDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>

                <FormItem
                    label="Passport Expiry Date"
                    invalid={Boolean(errors.passportExpiryDate)}
                    errorMessage={errors.passportExpiryDate?.message}
                >
                    <Controller name="passportExpiryDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>

                <FormItem
                    label="Place of Birth"
                    invalid={Boolean(errors.placeOfBirth)}
                    errorMessage={errors.placeOfBirth?.message}
                >
                    <Controller name="placeOfBirth" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="ECNR Required"
                    invalid={Boolean(errors.ecnrRequired)}
                    errorMessage={errors.ecnrRequired?.message}
                >
                    <Controller name="ecnrRequired" control={control} render={({ field }) => <Input type="checkbox" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default DetailSection
