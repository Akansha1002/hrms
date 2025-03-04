import { useMemo } from 'react'
import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import Select, { Option as DefaultOption } from '@/components/ui/Select'
import { FormItem } from '@/components/ui/Form'
import NumericInput from '@/components/shared/NumericInput'
import { Employee } from '../../EmployeeList/types'

interface PersonalInfoSectionProps {
    data: Employee
}

const salutationOptions = [
    { value: 'Mr', label: 'Mr' },
    { value: 'Ms', label: 'Ms' },
    { value: 'Dr', label: 'Dr' }
]

const genderOptions = [
    { value: 'Male', label: 'Male' },
    { value: 'Female', label: 'Female' },
]

const PersonalInfoSection = ({ data }: PersonalInfoSectionProps) => {

    return (
        <Card>
            <h4 className="mb-6">Personal</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Employee No."
                >
                    <NumericInput
                        placeholder="Employee Number"
                        autoComplete="off"
                        defaultValue={data?.name}
                    />
                </FormItem>
                <FormItem
                    label="Login ID"
                >
                    <NumericInput
                        autoComplete="off"
                        placeholder="Login ID"
                        defaultValue={data?.login_id}
                    />
                </FormItem>
                <FormItem
                    label="Salutation"
                >
                    <Select
                        options={salutationOptions}
                        defaultValue={salutationOptions.find(option => option.value === data?.salutation)}
                    />
                </FormItem>
                <FormItem
                    label="First Name"
                >
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="First Name"
                        defaultValue={data?.first_name}
                    />
                </FormItem>
                <FormItem
                    label="Middle Name"
                >
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Middle Name"
                        defaultValue={data?.middle_name}
                    />
                </FormItem>
                <FormItem
                    label="Last Name"
                >
                    <Input
                        type="text"
                        autoComplete="off"
                        placeholder="Last Name"
                        defaultValue={data?.last_name}
                    />
                </FormItem>
                <FormItem
                    label="Date of Birth"
                >
                    <Input
                        type="date"
                        defaultValue={data?.date_of_birth}
                    />
                </FormItem>
                <FormItem
                    label="Gender"
                >
                    <Select
                        options={genderOptions}
                        defaultValue={genderOptions.find(option => option.value === data?.gender)}
                    />
                </FormItem>
            </div>
        </Card>
    )
}

export default PersonalInfoSection
