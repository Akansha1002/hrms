import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type GovernmemtDataProps = FormSectionBaseProps


const GovernmemtData = ({ control, errors }: GovernmemtDataProps) => {
    return (
        <Card>
            <h4 className="mb-6">Government Data</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem label="SSN" invalid={Boolean(errors.ssn)} errorMessage={errors.ssn?.message}>
                    <Controller name="ssn" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="Aadhar No." invalid={Boolean(errors.aadharNo)} errorMessage={errors.aadharNo?.message}>
                    <Controller name="aadharNo" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="PAN Number" invalid={Boolean(errors.panNumber)} errorMessage={errors.panNumber?.message}>
                    <Controller name="panNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem label="UAN Number" invalid={Boolean(errors.uanNumber)} errorMessage={errors.uanNumber?.message}>
                    <Controller name="uanNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default GovernmemtData
