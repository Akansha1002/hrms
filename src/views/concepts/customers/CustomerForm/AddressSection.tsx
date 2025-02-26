import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'
import { Select } from '@/components/ui/Select'

type AddressSectionProps = FormSectionBaseProps

const positionOptions = [
    { value: 'Assistant Project Manager - Telecom Wireline', label: 'Assistant Project Manager - Telecom Wireline' },
    { value: 'Assistant Team Lead - Telecom Wireline', label: 'Assistant Team Lead - Telecom Wireline' },
    { value: 'Assistant Project Manager - Robotics', label: 'Assistant Project Manager - Robotics' }
];

const organizationStructureOptions = [
    { value: 'Centillion Networks Pvt Ltd', label: 'Centillion Networks Pvt Ltd' },
    { value: 'Centillion Solution B V', label: 'Centillion Solution B V' },
    { value: 'Centillion Solution INC', label: 'Centillion Solution INC' },
    { value: 'Centillion Solution Pty Ltd', label: 'Centillion Solution Pty Ltd' },
];

const locationOptions = [
    { value: 'hyderabad', label: 'Hyderabad' },
    { value: 'victoria', label: 'Victoria' },
    { value: 'visakhapatnam', label: 'Visakhapatnam' }
];

const departmentOptions = [
    { value: 'rob-robotics', label: 'ROB-Robotics' },
    { value: 'rob-seniorHardwareEngineer', label: 'ROB-Senior Hardware Engineer' },
    { value: 'sof-software', label: 'Sof-Software' },
    { value: 'tel-telecomWireline', label: 'Tel-Telecom Wireline' },
    { value: 'wir-telecomWireless', label: 'Wir-Telecom Wireless' }
];

const designationOptions = [
    { value: 'juniorTelecomEngineer', label: 'Junior Telecom Engineer' },
    { value: 'seniorTelecomEngineer', label: 'Senior Telecom Engineer' },
    { value: 'telecomEngineer', label: 'Telecom Engineer' },
    { value: 'telecomTechnician', label: 'Telecom Technician' },
    { value: 'traineeTelecomEngineer', label: 'Trainee Telecom Engineer' },
    { value: 'roboticsEngineer', label: 'Robotics Engineer' },
    { value: 'softwareDeveloper', label: 'Software Developer' }
];

const gradeOptions = [
    { value: 'associate', label: 'Associate' },
    { value: 'consultant', label: 'Consultant' },
    { value: 'executiveManagement', label: 'Executive Management' },
    { value: 'expatriate', label: 'Expatriate' },
    { value: 'intern', label: 'Intern' },
    { value: 'juniorManagement', label: 'Junior Management' },
    { value: 'middleManagement', label: 'Middle Management' },
    { value: 'seniorManagement', label: 'Senior Management' }
];



const AddressSection = ({ control, errors }: AddressSectionProps) => {
    return (
        <Card>
            <h4 className="mb-6">Organization</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Date of Join"
                    invalid={Boolean(errors.dateOfJoin)}
                    errorMessage={errors.dateOfJoin?.message}
                >
                    <Controller
                        name="dateOfJoin"
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
                    label="Effective From"
                    invalid={Boolean(errors.effectiveFrom)}
                    errorMessage={errors.effectiveFrom?.message}
                >
                    <Controller
                        name="effectiveFrom"
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
                    label="Position"
                    invalid={Boolean(errors.position)}
                    errorMessage={errors.position?.message}
                >
                    <Controller
                        name="position"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={positionOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Organization Structure"
                    invalid={Boolean(errors.orgStructure)}
                    errorMessage={errors.orgStructure?.message}
                >
                    <Controller
                        name="orgStructure"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={organizationStructureOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Location"
                    invalid={Boolean(errors.location)}
                    errorMessage={errors.location?.message}
                >
                    <Controller
                        name="location"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={locationOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Department"
                    invalid={Boolean(errors.department)}
                    errorMessage={errors.department?.message}
                >
                    <Controller
                        name="department"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={departmentOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Designation"
                    invalid={Boolean(errors.designation)}
                    errorMessage={errors.designation?.message}
                >
                    <Controller
                        name="designation"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={designationOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Grade"
                    invalid={Boolean(errors.grade)}
                    errorMessage={errors.grade?.message}
                >
                    <Controller
                        name="grade"
                        control={control}
                        render={({ field }) =>
                            <Select
                                options={gradeOptions}
                                onChange={(option) => field.onChange(option)}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Cost Center"
                    invalid={Boolean(errors.costCenter)}
                    errorMessage={errors.costCenter?.message}
                >
                    <Controller
                        name="costCenter"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Official Email"
                    invalid={Boolean(errors.officialEmail)}
                    errorMessage={errors.officialEmail?.message}
                >
                    <Controller
                        name="officialEmail"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="email"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Reporting Manager"
                    invalid={Boolean(errors.reportingManager)}
                    errorMessage={errors.reportingManager?.message}
                >
                    <Controller
                        name="reportingManager"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Functional Manager"
                    invalid={Boolean(errors.functionalManager)}
                    errorMessage={errors.functionalManager?.message}
                >
                    <Controller
                        name="functionalManager"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Action"
                    invalid={Boolean(errors.action)}
                    errorMessage={errors.action?.message}
                >
                    <Controller
                        name="action"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>
                <FormItem
                    label="Action Reason"
                    invalid={Boolean(errors.actionReason)}
                    errorMessage={errors.actionReason?.message}
                >
                    <Controller
                        name="actionReason"
                        control={control}
                        render={({ field }) =>
                            <Input
                                type="text"
                                {...field}
                            />
                        }
                    />
                </FormItem>
            </div>

            {/* <FormItem
                label="Country"
                invalid={Boolean(errors.country)}
                errorMessage={errors.country?.message}
            >
                <Controller
                    name="country"
                    control={control}
                    render={({ field }) => (
                        <Select<CountryOption>
                            options={countryList}
                            {...field}
                            components={{
                                Option: CustomSelectOption,
                                Control: CustomControl,
                            }}
                            placeholder=""
                            value={countryList.filter(
                                (option) => option.value === field.value,
                            )}
                            onChange={(option) => field.onChange(option?.value)}
                        />
                    )}
                />
            </FormItem>
            <FormItem
                label="Address"
                invalid={Boolean(errors.address)}
                errorMessage={errors.address?.message}
            >
                <Controller
                    name="address"
                    control={control}
                    render={({ field }) => (
                        <Input
                            type="text"
                            autoComplete="off"
                            placeholder="Address"
                            {...field}
                        />
                    )}
                />
            </FormItem>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormItem
                    label="City"
                    invalid={Boolean(errors.city)}
                    errorMessage={errors.city?.message}
                >
                    <Controller
                        name="city"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="City"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
                <FormItem
                    label="Postal Code"
                    invalid={Boolean(errors.postcode)}
                    errorMessage={errors.postcode?.message}
                >
                    <Controller
                        name="postcode"
                        control={control}
                        render={({ field }) => (
                            <Input
                                type="text"
                                autoComplete="off"
                                placeholder="Postal Code"
                                {...field}
                            />
                        )}
                    />
                </FormItem>
            </div> */}
        </Card>
    )
}

export default AddressSection
