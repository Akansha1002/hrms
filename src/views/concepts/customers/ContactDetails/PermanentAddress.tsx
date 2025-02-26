import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'

type PermanentAddressProps = FormSectionBaseProps


const PermanentAddress = ({ control, errors }: PermanentAddressProps) => {
    return (
        <Card>
            <h4 className="mb-6">Permanent Address</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Permanent Address 1"
                    invalid={Boolean(errors.permanentAddress1)}
                    errorMessage={errors.permanentAddress1?.message}
                >
                    <Controller
                        name="permanentAddress1"
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
                    label="Permanent Address 2"
                    invalid={Boolean(errors.permanentAddress2)}
                    errorMessage={errors.permanentAddress2?.message}
                >
                    <Controller name="permanentAddress2" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
        
                <FormItem
                    label="Country"
                    invalid={Boolean(errors.country)}
                    errorMessage={errors.country?.message}
                >
                    <Controller name="country" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Region"
                    invalid={Boolean(errors.region)}
                    errorMessage={errors.region?.message}
                >
                    <Controller name="region" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="State"
                    invalid={Boolean(errors.state)}
                    errorMessage={errors.state?.message}
                >
                    <Controller name="state" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="State Name"
                    invalid={Boolean(errors.stateName)}
                    errorMessage={errors.stateName?.message}
                >
                    <Controller name="stateName" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="City"
                    invalid={Boolean(errors.city)}
                    errorMessage={errors.city?.message}
                >
                    <Controller name="city" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                <FormItem
                    label="Zip Code"
                    invalid={Boolean(errors.zipCode)}
                    errorMessage={errors.zipCode?.message}
                >
                    <Controller name="zipCode" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                
                <FormItem
                    label="Contact Number"
                    invalid={Boolean(errors.contactNumber)}
                    errorMessage={errors.contactNumber?.message}
                >
                    <Controller name="contactNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
            </div>
        </Card>
    )
}

export default PermanentAddress
