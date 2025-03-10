import { useEffect, useState } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import type { EmployeeFormSchema } from './types'
import Steps from '@/components/ui/Steps'
import Button from '@/components/ui/Button'
import PersonalInfoSection from './components/PersonalInfoSection'
import OrganizationSection from './components/OrganizationSection'
import AdditionalInformation from './components/AdditionalInformation'
import PayRollSection from './components/PayrollSection'
import ProfileImageSection from './components/ProfileImageSection'
import useSWR from 'swr'
import { apiGetHolidayList } from '@/services/HolidayService'

type EmployeeFormProps = {
    onFormSubmit: (values: EmployeeFormSchema) => void
    defaultValues?: EmployeeFormSchema
    newEmployee?: boolean
} & CommonProps

const validationSchema: ZodType<EmployeeFormSchema> = z.object({
    //  PersonalInfoFields
    employee: z.string().optional(),
    loginId: z.string().optional(),
    salutation: z.string().optional().nullable(),
    first_name: z.string().min(1, { message: 'First name required' }),
    middle_name: z.string().optional().nullable(),
    last_name: z.string().min(1, { message: 'Last name required' }),
    date_of_birth: z.string().min(1, { message: 'Date of Birth required' }),
    gender: z.string().optional().nullable(),

    //  ProfileImageFields
    image: z.string().optional().nullable(),
    user_email: z
        .string()
        .min(1, { message: 'Email required' })
        .email({ message: 'Invalid email' }),
    // dialCode: z.string().min(1, { message: 'Please select your country code' }),
    // phoneNumber: z
    //     .string()
    //     .min(1, { message: 'Please input your mobile number' }),

    //  OrganizationFields
    date_of_joining: z.string().min(1, { message: 'Date of Joining required' }),
    effectiveFrom: z.string().optional().nullable(),
    position: z.string().optional().nullable(),
    orgStructure: z.string().optional().nullable(),
    custom_location: z.string().optional().nullable(),
    department: z.string().optional().nullable(),
    designation: z.string().optional().nullable(),
    grade: z.string().optional().nullable(),
    payroll_cost_center: z.string().optional().nullable(),
    // officialEmail: z.string().optional().nullable(),
    custom_reporting_manager: z.string().optional().nullable(),
    custom_functional_manager: z.string().optional().nullable(),
    custom_peoples_manager: z.string().optional().nullable(),

    // AdditionalInformationFields
    calendar: z.string().optional().nullable(),
    custom_attendance: z.string().optional().nullable(),
    custom_shift_type: z.string().optional().nullable(),
    custom_shift_group: z.string().optional().nullable(),
    custom_employment_status: z.string().optional().nullable(),
    final_confirmation_date: z.string().optional().nullable(),
    custom_full_part_time: z.string().optional().nullable(),
    custom_contract_type: z.string().optional().nullable(),
    contract_end_date: z.string().optional().nullable(),
    custom_contractor: z.string().optional().nullable(),
    custom_experience_in_category: z.string().optional().nullable(),
    custom_experience_in_months: z.string().optional().nullable(),
    notice_number_of_days: z.string().optional().nullable(),
    custom_secretary: z.string().optional().nullable(),
    custom_old_employee_number: z.string().optional().nullable(),
    originalHireDate: z.string().optional().nullable(),

    //  PayRollfields
    pan_number: z.string().optional().nullable(),
    custom_pf_number: z.string().optional().nullable(),
    custom_esi_number: z.string().optional().nullable(),
    custom_pt_location: z.string().optional().nullable(),
    custom_gl_code: z.string().optional().nullable(),
    salary_mode: z.string().optional().nullable(),
    custom_applied_from: z.string().optional().nullable(),
    custom_pay_group: z.string().optional().nullable(),
})

const CustomerForm = (props: EmployeeFormProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newEmployee = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
        setValue,
    } = useForm<EmployeeFormSchema>({
        defaultValues,
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: EmployeeFormSchema) => {
        onFormSubmit?.(values)
    }

    const { data, error, isLoading, mutate } = useSWR(
        ['/api/resource/Holiday List', {}],
        ([_, params]) => apiGetHolidayList<{ data: { name: string }[] }, Record<string, unknown>>(params),
        {
            revalidateOnFocus: false,
        }
    );

    // const holidayList = data?.data?.map((holiday) => holiday.name) || [];
    const holidayList = data?.data?.map((holiday) => ({
        value: holiday.name,
        label: holiday.name,
    })) || [];

    const [step, setStep] = useState(0)

    const steps = [
        { component: <PersonalInfoSection control={control} errors={errors} /> },
        { component: <OrganizationSection control={control} errors={errors} /> },
        { component: <AdditionalInformation control={control} errors={errors} holidayList={holidayList} isLoading={isLoading} /> },
        { component: <PayRollSection control={control} errors={errors} /> }
    ]

    const onChange = (nextStep: number) => {
        if (nextStep < 0) {
            setStep(0)
        } else if (nextStep > 3) {
            setStep(3)
        } else {
            setStep(nextStep)
        }
    }

    const onNext = () => onChange(step + 1)

    const onPrevious = () => onChange(step - 1)


    return (
        <Form
            id="employeeForm"
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
            onSubmit={handleSubmit(onSubmit)}
        >
            <div>
                <Steps current={step}>
                    <Steps.Item title="Personal" />
                    <Steps.Item title="Organization" />
                    <Steps.Item title="additional Information" />
                    <Steps.Item title="Payroll" />
                </Steps>
                <Container>
                    <div className="flex flex-col md:flex-row gap-4 mt-10">
                        <div className="gap-4 flex flex-col flex-auto">
                            {steps[step].component}
                        </div>
                        <div className="md:w-[370px] gap-4 flex flex-col">
                            <ProfileImageSection
                                control={control}
                                errors={errors}
                            />
                        </div>
                    </div>
                </Container>
                <div className="my-4 text-right">
                    <Button
                        className="mx-2"
                        disabled={step === 0}
                        onClick={onPrevious}
                        type="button"
                    >
                        Previous
                    </Button>
                    {step < 3 && (
                        <Button
                            variant="solid"
                            onClick={onNext}
                            type="button"
                        >
                            Next
                        </Button>
                    )}
                </div>
            </div>
            {step === 3 && (
                <BottomStickyBar>{children}</BottomStickyBar>
            )}
        </Form>
    )
}

export default CustomerForm    