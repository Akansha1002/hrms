import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from '../types'

type GovernmemtDataProps = FormSectionBaseProps & {
    data?: Record<string, any>
}

const GovernmemtData = ({ control, errors, data }: GovernmemtDataProps) => {
    return (
        <Card>
            <h4 className="mb-6">Government Data</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem label="Aadhar No." invalid={Boolean(errors.aadhar_number)} errorMessage={errors.aadhar_number?.message}>
                    <Controller name="aadhar_number" control={control} defaultValue={data?.aadhar_number || ''} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="PAN Number" invalid={Boolean(errors.pan_number)} errorMessage={errors.pan_number?.message}>
                    <Controller name="pan_number" control={control} defaultValue={data?.pan_number || ''} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                {/* <FormItem label="UAN Number" invalid={Boolean(errors.uanNumber)} errorMessage={errors.uanNumber?.message}>
                    <Controller name="uanNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem> */}
            </div>
        </Card>
    )
}

export default GovernmemtData
