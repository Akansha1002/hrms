import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { Controller } from 'react-hook-form'
import { FormSectionBaseProps } from '../types'

type PersonalInfoSectionProps = FormSectionBaseProps

const salutationOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' }
]

const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
]

const PersonalInfoSection = ({ control, errors }: PersonalInfoSectionProps) => {

    return (
        <Card>
            <h4 className="mb-6">Personal</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Employee No."
                    invalid={Boolean(errors.employeeNumber)}
                    errorMessage={errors.employeeNumber?.message}
                >
                    <Controller
                        name="employeeNumber"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                placeholder="Employee Number"
                                autoComplete="off"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Login ID"
                    invalid={Boolean(errors.loginId)}
                    errorMessage={errors.loginId?.message}
                >
                    <Controller
                        name="loginId"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="Login ID"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Salutation"
                    invalid={Boolean(errors.salutation)}
                    errorMessage={errors.salutation?.message}
                >
                    <Controller
                        name="salutation"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={salutationOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="First Name"
                    invalid={Boolean(errors.firstName)}
                    errorMessage={errors.firstName?.message}
                >
                    <Controller
                        name="firstName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="First Name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Middle Name"
                    invalid={Boolean(errors.middleName)}
                    errorMessage={errors.middleName?.message}
                >
                    <Controller
                        name="middleName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Middle Name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Last Name"
                    invalid={Boolean(errors.lastName)}
                    errorMessage={errors.lastName?.message}
                >
                    <Controller
                        name="lastName"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Last Name"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Date of Birth"
                    invalid={Boolean(errors.dateOfBirth)}
                    errorMessage={errors.dateOfJoin?.message}
                >
                    <Controller
                        name="dateOfBirth"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="date"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Gender"
                    invalid={Boolean(errors.gender)}
                >
                    <Controller
                        name="gender"
                        control={control}
                        render={({ field }) => (
                            <Select
                                options={genderOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        )}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default PersonalInfoSection
