import { Button } from '@/components/ui'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { object, string } from 'yup'
import React, { useState } from 'react'
import { LineArrow } from '@/components/icons'
import { MetaFields } from '../../../form'
import { getFirstLastName } from '../../../form/utils'
import { departmentOptions } from '../../../../utils/constant'

export const subscriberSchema = object({
  fullName: string().required('Full name is required'),
  CONTACT_EMAIL: string()
    .email('Email is invalid')
    .required('Email is required'),
  CONTACT_CF1: string().required('Industry is required'),
  CONTACT_CF3: string().required('Department is required'),
})
export const subscriberDefaultValues = {
  fullName: '',
  CONTACT_EMAIL: '',
  CONTACT_CF1: '',
  CONTACT_CF3: '',
}

const GetUpdates = () => {
  const [step, setStep] = useState(1)
  const { register, formState, trigger, watch, reset } = useForm({
    defaultValues: subscriberDefaultValues,
    mode: 'onBlur',
    resolver: yupResolver(subscriberSchema),
  })

  const [email, fullName, department] = watch([
    'CONTACT_EMAIL',
    'fullName',
    'CONTACT_CF3',
  ])
  const firstStepDisabled =
    formState.errors.email || !email || email.length == 0

  const onStepChange = () => {
    if (step == 1 && !firstStepDisabled) {
      setStep(2)
    }
  }

  return (
    <section className="bg-rb-mercury py-16 md:py-32">
      <div className="container">
        <h2 className="text-[24px] md:text-[64px] lg:text-[100px] leading-[120%] tracking-[-1px] lg:tracking-[-4px] uppercase font-semibold mb-15 text-center">
          Get cool updates
        </h2>
        <form
          method="POST"
          id="zcampaignOptinForm"
          action="https://mdkqeorq-zgpm.maillist-manage.com/weboptin.zc"
          target="_blank"
          onSubmit={async (e) => {
            const isValidForm = await trigger()
            if (isValidForm) {
              setTimeout(() => {
                setStep(1)
                reset(subscriberDefaultValues)
              }, 500)
              return true
            }
            e.preventDefault()
          }}
        >
          <MetaFields />
          <input type="hidden" name="CONTACT_EMAIL" defaultValue={email} hidden />

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
          <input type="hidden" id="mode" name="mode" defaultValue="OptinCreateView" />
          <input type="hidden" id="zcld" name="zcld" defaultValue="1e40004258f91711" />
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
          <input type="hidden" id="scriptless" name="scriptless" defaultValue="yes" />
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
          <input
            hidden
            type="hidden"
            name="FIRSTNAME"
            value={getFirstLastName(fullName).firstName}
          />
          <input
            hidden
            type="hidden"
            name="LASTNAME"
            value={getFirstLastName(fullName).lastName}
          />
          <div
            className="flex bg-white rounded-3xl md:rounded-full px-[14px] items-center flex-wrap lg:flex-nowrap md:mx-auto md:data-[step='1']:max-w-[725px]"
            data-step={step}
          >
            {step == 1 && (
              <>
                <div className="flex-grow flex gap-3 items-center py-2 lg:py-6">
                  <div className="w-9 h-9 bg-rb-mercury rounded-full inline-flex justify-center items-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.33268 3.33142H16.666C17.5827 3.33142 18.3327 4.08142 18.3327 4.99809V14.9981C18.3327 15.9148 17.5827 16.6648 16.666 16.6648H3.33268C2.41602 16.6648 1.66602 15.9148 1.66602 14.9981V4.99809C1.66602 4.08142 2.41602 3.33142 3.33268 3.33142Z"
                        stroke="#333333"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.3327 5L9.99935 10.8333L1.66602 5"
                        stroke="#333333"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <input
                    {...register('CONTACT_EMAIL')}
                    name="CONTACT_EMAIL"
                    type="email"
                    className="outline-none border-none w-full text-18 font-medium"
                    placeholder="Enter your email address"
                  />
                </div>
              </>
            )}
            {step == 2 && (
              <div className="flex flex-1 flex-wrap md:flex-nowrap">
                <div className="flex-grow flex gap-3 items-center py-6 md:border-r-4 border-r-rb-mercury">
                  <div className="w-9 h-9 bg-rb-mercury rounded-full inline-flex justify-center items-center">
                    <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                      <path
                        d="M14.6654 16.5V14.8333C14.6654 13.9493 14.3142 13.1014 13.6891 12.4763C13.0639 11.8512 12.2161 11.5 11.332 11.5H4.66536C3.78131 11.5 2.93346 11.8512 2.30834 12.4763C1.68322 13.1014 1.33203 13.9493 1.33203 14.8333V16.5M11.3346 4.83333C11.3346 6.67428 9.84225 8.16667 8.0013 8.16667C6.16035 8.16667 4.66797 6.67428 4.66797 4.83333C4.66797 2.99238 6.16035 1.5 8.0013 1.5C9.84225 1.5 11.3346 2.99238 11.3346 4.83333Z"
                        stroke="#333333"
                        strokeWidth="1.42222"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    name="fullName"
                    {...register('fullName')}
                    className="outline-none border-none w-full text-18 font-medium"
                    placeholder="Enter full name"
                  />
                </div>
                <div className="flex-grow flex gap-3 items-center py-6 md:border-r-4 border-r-rb-mercury md:pl-6">
                  <div className="w-9 h-9 bg-rb-mercury rounded-full inline-flex justify-center items-center">
                    <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
                      <path
                        d="M13.3346 16.5V3.16667C13.3346 2.72464 13.159 2.30072 12.8465 1.98816C12.5339 1.67559 12.11 1.5 11.668 1.5H8.33464C7.89261 1.5 7.46869 1.67559 7.15612 1.98816C6.84356 2.30072 6.66797 2.72464 6.66797 3.16667V16.5M3.33464 4.83203H16.668C17.5884 4.83203 18.3346 5.57822 18.3346 6.4987V14.832C18.3346 15.7525 17.5884 16.4987 16.668 16.4987H3.33464C2.41416 16.4987 1.66797 15.7525 1.66797 14.832V6.4987C1.66797 5.57822 2.41416 4.83203 3.33464 4.83203Z"
                        stroke="#333333"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <input
                    type="text"
                    name="CONTACT_CF1"
                    className="outline-none border-none w-full text-18 font-medium"
                    placeholder="Enter industry type"
                    {...register('CONTACT_CF1')}
                  />
                </div>
                <div className="flex-grow flex gap-3 items-center py-6 md:pl-6">
                  <div className="w-9 h-9 bg-rb-mercury rounded-full inline-flex justify-center items-center">
                    <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
                      <path
                        d="M7.5 1.83203V4.33203M12.5 1.83203V4.33203M7.5 17.668V20.168M12.5 17.668V20.168M16.668 8.5H19.168M16.668 12.668H19.168M0.832031 8.5H3.33203M0.832031 12.668H3.33203M4.9987 4.33203H14.9987C15.9192 4.33203 16.6654 5.07822 16.6654 5.9987V15.9987C16.6654 16.9192 15.9192 17.6654 14.9987 17.6654H4.9987C4.07822 17.6654 3.33203 16.9192 3.33203 15.9987V5.9987C3.33203 5.07822 4.07822 4.33203 4.9987 4.33203ZM7.5 8.5H12.5V13.5H7.5V8.5Z"
                        stroke="#333333"
                        strokeWidth="1.66667"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <select
                    type="text"
                    name="CONTACT_CF3"
                    {...register('CONTACT_CF3')}
                    style={{
                      color:
                        department == '' ? 'rgb(17 16 16 / 0.4)' : 'inherit',
                    }}
                    className="outline-none border-none w-full text-18 font-medium"
                  >
                    <option
                      defaultValue=""
                      disabled
                      className="disabled:text-rb-black/40"
                    >
                      Enter your department
                    </option>

                    {departmentOptions.map((o) => (
                      <option
                        key={o?.value}
                        defaultValue={o?.value}
                        className="text-rb-black"
                      >
                        {o?.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
            <div className="w-full lg:w-auto mb-2 lg:mb-0 lg:block hidden">
              <Button
                className="min-w-[180px] mx-auto"
                disabled={firstStepDisabled}
                onClick={onStepChange}
                type={step == 1 ? 'button' : 'submit'}
                suffix={<LineArrow hover />}
              >
                SUBSCRIBE
              </Button>
            </div>
          </div>
          <div className="w-full lg:w-auto mb-2 mt-5 lg:hidden">
              <Button
                className="min-w-[180px] mx-auto"
                disabled={firstStepDisabled}
                onClick={onStepChange}
                type={step == 1 ? 'button' : 'submit'}
                suffix={<LineArrow hover />}
              >
                SUBSCRIBE
              </Button>
            </div>
        </form>
      </div>
    </section>
  )
}

export default GetUpdates
