import { useEffect } from 'react'
import { Form } from '@/components/ui/Form'
import Container from '@/components/shared/Container'
import BottomStickyBar from '@/components/template/BottomStickyBar'
import isEmpty from 'lodash/isEmpty'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import type { ZodType } from 'zod'
import type { CommonProps } from '@/@types/common'
import { PastEmploymentDetailsSchema } from './types'
import EmploymentDetails from './EmploymentDetailSection'

type PastEmploymentDetailsProps = {
    onFormSubmit: (values: PastEmploymentDetailsSchema) => void
    defaultValues?: PastEmploymentDetailsSchema
    newCustomer?: boolean
} & CommonProps

const validationSchema: ZodType<PastEmploymentDetailsSchema> = z.object({
    email: z
        .string()
        .min(1, { message: 'Email required' })
        .email({ message: 'Invalid email' }),
    dialCode: z.string().min(1, { message: 'Please select your country code' }),
    phoneNumber: z
        .string()
        .min(1, { message: 'Please input your mobile number' }),

    dateOfJoin: z.string().min(1, { message: 'Date of join required' }),
    effectiveFrom: z.string().min(1, { message: 'Effective from required' }),
    position: z.string().min(1, { message: 'Position required' }),
    orgStructure: z.string().min(1, { message: 'Organization structure required' }),

    country: z.string().min(1, { message: 'Please select a country' }),
    address: z.string().min(1, { message: 'Addrress required' }),
    postcode: z.string().min(1, { message: 'Postcode required' }),
    city: z.string().min(1, { message: 'City required' }),
    img: z.string(),
    tags: z.array(z.object({ value: z.string(), label: z.string() })),
})

const PastEmploymentDetails = (props: PastEmploymentDetailsProps) => {
    const {
        onFormSubmit,
        defaultValues = {},
        newCustomer = false,
        children,
    } = props

    const {
        handleSubmit,
        reset,
        formState: { errors },
        control,
    } = useForm<PastEmploymentDetailsSchema>({
        defaultValues: {
            ...{
                banAccount: false,
                accountVerified: true,
            },
            ...defaultValues,
        },
        resolver: zodResolver(validationSchema),
    })

    useEffect(() => {
        if (!isEmpty(defaultValues)) {
            reset(defaultValues)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(defaultValues)])

    const onSubmit = (values: PastEmploymentDetailsSchema) => {
        onFormSubmit?.(values)
    }


    return (
        <Form
            className="flex w-full h-full"
            containerClassName="flex flex-col w-full justify-between"
        >
            <Container>
                <div className="flex items-center justify-between">
                    <div className="gap-4 flex flex-col flex-auto">
                        <EmploymentDetails control={control} errors={errors} />
                    </div>
                </div>
            </Container>
            <BottomStickyBar>{children}</BottomStickyBar>
        </Form>
    )
}

export default PastEmploymentDetails   
