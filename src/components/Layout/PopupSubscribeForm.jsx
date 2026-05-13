import React, { useEffect } from 'react'
import { IoClose } from "react-icons/io5";
import { FormProvider, useForm } from 'react-hook-form'
import { useRouter } from 'next/router';
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, FileInput, Input, Label, MetaFields, Select, TextArea } from '../form';
import { PhoneInput } from '../form/PhoneInput';
import { Button } from '../ui';
import { LineArrow } from '../icons';
import Script from 'next/script';
import { subscribePopupSchemas, subscriberDefaultValues } from '@/content/subscribePopupSchemas'
import { departmentOptions } from '../../utils/constant'



function PopupSubscribeForm({ setIsPopupOpen, isPopupOpen, setIsClosed }) {
    const router = useRouter()

    const whatYouDoData = [
        {
            title: 'Industry Insights'
        },
        {
            title: 'Trends & Reports'
        },
        {
            title: 'Case Studies'
        },
        {
            title: 'Practical Tips'
        },
        {
            title: 'Exclusive Contents'
        },
        {
            title: 'Company News'
        }
    ]

    const methods = useForm({
        defaultValues: subscriberDefaultValues,
        mode: 'onBlur',
        resolver: yupResolver(subscribePopupSchemas),
    })
    const { register, watch, formState } = methods
    const [email] = watch(['CONTACT_EMAIL'])
    const disabled = formState.errors.email || !email || email.length == 0

    useEffect(() => {
        if (!isPopupOpen) {
            methods.reset(subscriberDefaultValues)
        }
    }, [isPopupOpen, methods])

    const handleClose = () => {
        setIsPopupOpen(false)
        setIsClosed(true)
        sessionStorage.setItem('formClosed', true)
    }

    return (
        <>
            <div className='h-screen w-screen fixed z-[9999] top-0 right-0 left-0 bottom-0 bg-black bg-opacity-[32%] backdrop-filter backdrop-blur-sm cursor-auto' onClick={() => setIsPopupOpen(false)} />
            <div className='lg:min-w-[550px] min-w-[90%] fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[10000] cursor-auto bg-[#F1F2F6] rounded-xl grid grid-cols-2 overflow-hidden'>
                <IoClose className="top-[13.25px] right-[10.91px] absolute bg-[#0000001A] h-[30.78px] w-[33.6px] rounded-full cursor-pointer" onClick={handleClose} />
                <div className='col-span-2 p-6 overflow-y-scroll'>

                    <p className='lg:text-2xl text-xl font-bold mb-10'>Subscribe to our newsletter</p>
                    <FormProvider {...methods}>
                        <form
                            method="POST"
                            id="zcampaignOptinForm"
                            action="https://mdkqeorq-zgpm.maillist-manage.com/weboptin.zc"
                            target="_blank"
                            onSubmit={async (e) => {
                                // console.log('methods', methods)
                                const isValidForm = await methods.trigger()
                                // const formData = methods.getValues(); 
                                // console.log('formData', formData)
                                if (isValidForm) {
                                    setTimeout(() => {
                                        // close form after success
                                        setIsPopupOpen(false)
                                    }, 500)
                                    setTimeout(() => {
                                        e.target.submit()
                                    }, 300);
                                    setTimeout(() => {
                                        methods.reset()
                                        router.reload()
                                    }, 500)
                                    sessionStorage.setItem('formSubmitted', true)
                                    return true
                                }
                                e.preventDefault()
                            }}
                        >
                            <MetaFields />
                            {/* <input type="hidden" name="CONTACT_EMAIL" defaultValue={email} hidden /> */}

                            <input
                                type="hidden"
                                id="secretid"
                                defaultValue="6LdNeDUUAAAAAG5l7cJfv1AA5OKLslkrOa_xXxLs"
                            />
                            {/* <!-- Do not edit the below Zoho Campaigns hidden tags --> */}
                            <input type="hidden" id="fieldBorder" defaultValue="" onLoad="" />
                            <input
                                type="hidden"
                                name="zc_trackCode"
                                id="zc_trackCode"
                                defaultValue="ZCFORMVIEW"
                                onLoad=""
                            />
                            <input
                                type="hidden"
                                name="viewFrom"
                                id="viewFrom"
                                defaultValue="URL_ACTION"
                            />
                            <input
                                type="hidden"
                                id="submitType"
                                name="submitType"
                                defaultValue="optinCustomView"
                            />
                            <input type="hidden" id="lD" name="lD" defaultValue="1e40004258f91711" />
                            <input
                                type="hidden"
                                name="emailReportId"
                                id="emailReportId"
                                defaultValue=""
                            />
                            <input type="hidden" name="zx" id="cmpZuid" defaultValue="127b2e617" />
                            <input type="hidden" name="zcvers" defaultValue="3.0" />
                            <input
                                type="hidden"
                                name="oldListIds"
                                id="allCheckedListIds"
                                defaultValue=""
                            />
                            <input
                                type="hidden"
                                id="mode"
                                name="mode"
                                defaultValue="OptinCreateView"
                            />
                            <input
                                type="hidden"
                                id="zcld"
                                name="zcld"
                                defaultValue="1e40004258f91711"
                            />
                            <input type="hidden" id="zctd" name="zctd" defaultValue="" />
                            <input type="hidden" id="document_domain" defaultValue="" />
                            <input
                                type="hidden"
                                id="zc_Url"
                                defaultValue="mdkqeorq-zgpm.maillist-manage.com"
                            />
                            <input type="hidden" id="new_optin_response_in" defaultValue="0" />
                            <input type="hidden" id="duplicate_optin_response_in" defaultValue="0" />
                            <input
                                type="hidden"
                                id="zc_formIx"
                                name="zc_formIx"
                                defaultValue="3z1c98bf32c1a2b03d6ba41e46862e8d0aef3ac055bf4665edfc78b3343e5b4d2b"
                            />
                            {/* <!-- End of the campaigns hidden tags --> */}
                            <input
                                type="hidden"
                                id="scriptless"
                                name="scriptless"
                                defaultValue="yes"
                            />
                            {/* <input
              type="hidden"
              id="zc_spmSubmit"
              name="zc_spmSubmit"
              defaultValue="ZCSPMSUBMIT"
            /> */}
                            <input type="hidden" id="isCaptchaNeeded" defaultValue="false" />
                            <input type="hidden" id="superAdminCap" defaultValue="0" />
                            <input
                                type="hidden"
                                id="zcWebOptin"
                                name="SIGNUP_SUBMIT_BUTTON"
                                defaultValue="Join Now"
                            ></input>
                            <div className="grid gap-x-6 md:gap-8">
                                <div className="grid gap-x-6 md:gap-5 grid-cols-1 md:grid-cols-2">
                                    <div className="lg:mb-2 mb-4">
                                        <Input
                                            name="FIRSTNAME"
                                            label="Name"
                                            placeholder="First Name"
                                            required
                                            borderedInput
                                        />
                                    </div>
                                    <div className="lg:mb-2 mb-4">
                                        <Input
                                            // hideLabel
                                            hideLabel
                                            hideStar={true}
                                            name="LASTNAME"
                                            placeholder="Last Name"
                                            required
                                            borderedInput
                                        />
                                    </div>
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Input
                                        // {...register('CONTACT_EMAIL')}
                                        name="CONTACT_EMAIL"
                                        type="email"
                                        // label={'Email'}
                                        label={'Work Email'}
                                        required
                                        // placeholder="Enter email id"
                                        placeholder="Work Email id"
                                        borderedInput
                                    />
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Input
                                        name="CONTACT_CF1"
                                        // label="Industry"
                                        label="Company Name"
                                        // placeholder="Enter industry type"
                                        placeholder="Company Name"
                                        required
                                        borderedInput
                                    />
                                </div>
                                <div className="lg:mb-2 mb-4">
                                    <Select
                                        name="CONTACT_CF3"
                                        label="Department"
                                        // label="Department"
                                        options={departmentOptions}
                                        // placeholder="Select your department"
                                        placeholder="Department"
                                        required
                                        borderedInput
                                    />
                                </div>
                            </div>
                            <Button
                                type="submit"
                                className="w-full mt-5 md:mt-10"
                                suffix={<LineArrow />}
                            >
                                SUBSCRIBE
                            </Button>
                        </form>
                    </FormProvider>
                </div>
            </div>
        </>
    )

}

export default PopupSubscribeForm 