import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type EmployeeFormProps = FormSectionBaseProps


const EmployeeForm = ({ control, errors }: EmployeeFormProps) => {
    return (
        <Card>
            <h4 className="mb-6">Employee Details</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem label="Title" invalid={Boolean(errors.title)} errorMessage={errors.title?.message}>
                    <Controller name="title" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Gender" invalid={Boolean(errors.gender)} errorMessage={errors.gender?.message}>
                    <Controller name="gender" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Surname" invalid={Boolean(errors.surname)} errorMessage={errors.surname?.message}>
                    <Controller name="surname" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="First Name" invalid={Boolean(errors.firstName)} errorMessage={errors.firstName?.message}>
                    <Controller name="firstName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Middle Name" invalid={Boolean(errors.middleName)} errorMessage={errors.middleName?.message}>
                    <Controller name="middleName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Known As" invalid={Boolean(errors.knownAs)} errorMessage={errors.knownAs?.message}>
                    <Controller name="knownAs" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Official Name" invalid={Boolean(errors.officialName)} errorMessage={errors.officialName?.message}>
                    <Controller name="officialName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Place of Birth" invalid={Boolean(errors.placeOfBirth)} errorMessage={errors.placeOfBirth?.message}>
                    <Controller name="placeOfBirth" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="State of Birth" invalid={Boolean(errors.stateOfBirth)} errorMessage={errors.stateOfBirth?.message}>
                    <Controller name="stateOfBirth" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Country of Birth" invalid={Boolean(errors.countryOfBirth)} errorMessage={errors.countryOfBirth?.message}>
                    <Controller name="countryOfBirth" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Date of Birth" invalid={Boolean(errors.dateOfBirth)} errorMessage={errors.dateOfBirth?.message}>
                    <Controller name="dateOfBirth" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem label="Marital Status" invalid={Boolean(errors.maritalStatus)} errorMessage={errors.maritalStatus?.message}>
                    <Controller name="maritalStatus" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Wedding Date" invalid={Boolean(errors.weddingDate)} errorMessage={errors.weddingDate?.message}>
                    <Controller name="weddingDate" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
                <FormItem label="Nationality" invalid={Boolean(errors.nationality)} errorMessage={errors.nationality?.message}>
                    <Controller name="nationality" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Ethnic Code" invalid={Boolean(errors.ethnicCode)} errorMessage={errors.ethnicCode?.message}>
                    <Controller name="ethnicCode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Language" invalid={Boolean(errors.language)} errorMessage={errors.language?.message}>
                    <Controller name="language" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Blood Group" invalid={Boolean(errors.bloodGroup)} errorMessage={errors.bloodGroup?.message}>
                    <Controller name="bloodGroup" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="RH Factor" invalid={Boolean(errors.rhFactor)} errorMessage={errors.rhFactor?.message}>
                    <Controller name="rhFactor" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Physically Challenged" invalid={Boolean(errors.physicallyChallenged)} errorMessage={errors.physicallyChallenged?.message}>
                    <Controller name="physicallyChallenged" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Disability" invalid={Boolean(errors.disability)} errorMessage={errors.disability?.message}>
                    <Controller name="disability" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="DOB for Birthday Celebration" invalid={Boolean(errors.dobForCelebration)} errorMessage={errors.dobForCelebration?.message}>
                    <Controller name="dobForCelebration" control={control} render={({ field }) => <Input type="date" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default EmployeeForm
