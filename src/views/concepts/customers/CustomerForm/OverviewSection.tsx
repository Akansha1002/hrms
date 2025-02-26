import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import Avatar from '@/components/ui/Avatar'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { countryList } from '@/constants/countries.constant'
import { Controller } from 'react-hook-form'
import { components } from 'react-select'
import type { FormSectionBaseProps } from './types'
import type { ControlProps, OptionProps } from 'react-select'

type OverviewSectionProps = FormSectionBaseProps

const salutationOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' }
]

const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
]

// type CountryOption = {
//     label: string
//     dialCode: string
//     value: string
// }

// const { Control } = components

// const CustomSelectOption = (props: OptionProps<CountryOption>) => {
//     return (
//         <DefaultOption<CountryOption>
//             {...props}
//             customLabel={(data) => (
//                 <span className="flex items-center gap-2">
//                     <Avatar
//                         shape="circle"
//                         size={20}
//                         src={`/img/countries/${data.value}.png`}
//                     />
//                     <span>{data.dialCode}</span>
//                 </span>
//             )}
//         />
//     )
// }

// const CustomControl = ({ children, ...props }: ControlProps<CountryOption>) => {
//     const selected = props.getValue()[0]
//     return (
//         <Control {...props}>
//             {selected && (
//                 <Avatar
//                     className="ltr:ml-4 rtl:mr-4"
//                     shape="circle"
//                     size={20}
//                     src={`/img/countries/${selected.value}.png`}
//                 />
//             )}
//             {children}
//         </Control>
//     )
// }

const OverviewSection = ({ control, errors }: OverviewSectionProps) => {
    // const dialCodeList = useMemo(() => {
    //     const newCountryList: Array<CountryOption> = JSON.parse(
    //         JSON.stringify(countryList),
    //     )

    //     return newCountryList.map((country) => {
    //         country.label = country.dialCode
    //         return country
    //     })
    // }, [])

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
            {/* <FormItem
                label="Email"
                invalid={Boolean(errors.email)}
                errorMessage={errors.email?.message}
            >
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="email"
                            autoComplete="off"
                            placeholder="Email"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <div className="flex items-end gap-4 w-full">
                <FormItem
                    invalid={
                        Boolean(errors.phoneNumber) || Boolean(errors.dialCode)
                    }
                >
                    <label className="form-label mb-2">Phone number</label>
                    <Controller
                        name="dialCode"
                        control={control}
                        render={({ field }) => (
                            <Select<CountryOption>
                                options={dialCodeList}
                                {...field}
                                className="w-[150px]"
                                components={{
                                    Option: CustomSelectOption,
                                    Control: CustomControl,
                                }}
                                placeholder=""
                                value={dialCodeList.filter(
                                    (option) => option.dialCode === field.value,
                                )}
                                onChange={(option) =>
                                    field.onChange(option?.dialCode)
                                }
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    className="w-full"
                    invalid={
                        Boolean(errors.phoneNumber) || Boolean(errors.dialCode)
                    }
                    errorMessage={errors.phoneNumber?.message}
                >
                    <Controller
                        name="phoneNumber"
                        control={control}
                        render={({ field }) => (
                            <NumericInput
                                autoComplete="off"
                                placeholder="Phone Number"
                                value={field.value}
                                onChange={field.onChange}
                                onBlur={field.onBlur}
                            />
                        )}
                    />
                </FormItem>
            </div> */}
        </Card>
    )
}

export default OverviewSection
