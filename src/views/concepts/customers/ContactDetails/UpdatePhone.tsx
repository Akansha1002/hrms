import Card from '@/components/ui/Card'
import Input from '@/components/ui/Input'
import { FormItem } from '@/components/ui/Form'
import { Controller } from 'react-hook-form'
import type { FormSectionBaseProps } from './types'
import Upload from '@/components/ui/Upload'
import { Button } from '@/components/ui'

type UpdatePhoneProps = FormSectionBaseProps


const UpdatePhone = ({ control, errors }: UpdatePhoneProps) => {
    const beforeUpload = (files: FileList | null) => {
        let valid: string | boolean = true

        const allowedFileType = ['image/jpeg', 'image/png']
        if (files) {
            for (const file of files) {
                if (!allowedFileType.includes(file.type)) {
                    valid = 'Please upload a .jpeg or .png file!'
                }
            }
        }

        return valid
    }
    return (
        <Card>
            <h4 className="mb-6">Add/Update Phone</h4>
            <div className="grid md:grid-cols-2 gap-4">
                <FormItem
                    label="Home Telephone"
                    invalid={Boolean(errors.homeTelephone)}
                    errorMessage={errors.homeTelephone?.message}
                >
                    <Controller name="homeTelephone" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Extension Number"
                    invalid={Boolean(errors.extensionNumber)}
                    errorMessage={errors.extensionNumber?.message}
                >
                    <Controller name="extensionNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Personal Email"
                    invalid={Boolean(errors.personalEmail)}
                    errorMessage={errors.personalEmail?.message}
                >
                    <Controller name="personalEmail" control={control} render={({ field }) => <Input type="email" {...field} />} />
                </FormItem>

                <FormItem
                    label="Work Mobile Number"
                    invalid={Boolean(errors.workMobile)}
                    errorMessage={errors.workMobile?.message}
                >
                    <Controller name="workMobile" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Preferred Email Language"
                    invalid={Boolean(errors.preferredEmailLanguage)}
                    errorMessage={errors.preferredEmailLanguage?.message}
                >
                    <Controller name="preferredEmailLanguage" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Personal Mobile Number"
                    invalid={Boolean(errors.personalMobile)}
                    errorMessage={errors.personalMobile?.message}
                >
                    <Controller name="personalMobile" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Work Telephone"
                    invalid={Boolean(errors.workTelephone)}
                    errorMessage={errors.workTelephone?.message}
                >
                    <Controller name="workTelephone" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>

                <FormItem
                    label="Work Email"
                    invalid={Boolean(errors.workEmail)}
                    errorMessage={errors.workEmail?.message}
                >
                    <Controller name="workEmail" control={control} render={({ field }) => <Input type="email" {...field} />} />
                </FormItem>

                <FormItem
                    label="Fax Number"
                    invalid={Boolean(errors.faxNumber)}
                    errorMessage={errors.faxNumber?.message}
                >
                    <Controller name="faxNumber" control={control} render={({ field }) => <Input type="text" {...field} />} />
                </FormItem>
                {/* <Upload
                    showList={false}
                    uploadLimit={1}
                    beforeUpload={beforeUpload}
                    onChange={(files) => {
                        if (files.length > 0) {
                            field.onChange(
                                URL.createObjectURL(files[0]),
                            )
                        }
                    }}
                >
                    <Button
                        variant="solid"
                        className="mt-4"
                        type="button"
                    >
                        Upload
                    </Button>
                </Upload> */}
            </div>
        </Card>
    )
}

export default UpdatePhone
