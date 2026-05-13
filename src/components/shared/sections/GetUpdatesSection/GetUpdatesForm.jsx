import { useState, useEffect, useRef } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Input, MetaFields, TextArea } from '@/components/form'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  companyEmailValidation,
  // liveUrlValidation,
  phoneNumberValidation,
  isValidName,
  companyNameValidation,
  validateDescription,
  isValidString,
} from '@/components/form/utils'

import { Label } from '@/components/form'
import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import { Controller } from 'react-hook-form' // Make sure this is imported at top

const schema = object({
  First_Name: string()
    .required('First name is required')
    .test('name', 'First name is invalid', isValidName),
  Last_Name: string()
    .required('Last name is required')
    .test('name', 'Last name is invalid', isValidName),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company email is required', companyEmailValidation),
  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be in 20 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Company: string()
    .required('Company name is required')
    .test('name', 'Company name is invalid', companyNameValidation), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  // Designation: string().required('Designation is required').test('name', 'Designation is invalid', isValidString), //designation
  Description: string()
    .required('Message is required')
    .max(125, 'Maximum allowed is 125 characters')
    .test('name', 'Description is invalid', validateDescription),
})
const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Phone: '',
  Company: '',
  // Website: '',
  // Designation: '',
  Description: '',
}

export const sanitizeformData = (emailData) => {
  const errors = {}
  // Validate first name
  if (!isValidName(emailData.First_Name)) {
    errors.First_Name = 'Invalid first name. Ensure it is properly formatted.'
  }
  // Validate last name
  if (!isValidName(emailData.Last_Name)) {
    errors.Last_Name = 'Invalid last name. Ensure it is properly formatted.'
  }
  if (!companyEmailValidation(emailData.Email)) {
    errors.Email = 'Invalid email format.'
  }
  if (!phoneNumberValidation(emailData.Phone)) {
    errors.Phone = 'Invalid phone number'
  }
  // Validate company name
  if (
    !companyNameValidation(emailData.Company) ||
    emailData.Company.trim().length < 2
  ) {
    errors.Company = 'Company name must be at least 2 characters long.'
  }

  if (!validateDescription(emailData.Description)) {
    errors.Description = 'Invalid Message'
  }

  // if (!isValidString(emailData.Designation)) {
  //   errors.Designation = 'Invalid Designation'
  // }

  // Return validation result
  return Object.keys(errors).length === 0
    ? { isValid: true }
    : { isValid: false, errors }
}

export const GetUpdatesForm = ({
  CTAbreak = false,
  ID = '1',
  pickCampaign = true,
  pickVideo = true,
}) => {
  // const [otherServices, setOtherServices] = useState(false)
  const [otherServices, setOtherServices] = useState('')
  const [crews, setCrews] = useState(false)
  const metaValues = useFormMeta()
  const router = useRouter()
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name] = methods.watch(['First_Name', 'Last_Name'])
  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://makerrs.com/'
  const routerSource = router.query['utm_source']
  const routerCampaign = router.query['utm_campaign']
  const routerMedium = router.query['utm_medium']
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term']
  const textareaRef = useRef(null)

  const onSubmit = async (e) => {
    e.preventDefault()
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then(async (response) => {
        const score = JSON.parse((await response.json()).body)?.data?.score ?? 0
        const isValidForm = await methods.trigger()
        const formData = methods.getValues() // Get form values
        const result = sanitizeformData(formData)
        if (isValidForm && score > 0.5 && result.isValid) {
          const formData = methods.getValues() // Get form values
          console.log('Form Values Before Submit:', formData) // Log form data
          setTimeout(() => {
            methods.reset(defaultValues)
          }, 500)
          e.target.submit()
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  const toggleDropdown = () => {
    let selectBox = document.querySelector(`.CF-box${ID}`)
    let checkboxes = document.getElementById(`checkboxes${ID}`)
    checkboxes.style.display =
      checkboxes?.style?.display === 'none' ? 'block' : 'none'
    selectBox?.classList?.toggle('open')
  }

  const crewsItems = [
    'Single-camera Shoot',
    'Multi-camera Shoot',
    'Multi-location Shoot',
    'Others',
  ]

  const updateSelectedOptions = () => {
    let selectedOptions = []
    let checkedCheckboxes = document.querySelectorAll(
      `#checkboxes${ID} input[type='checkbox']:checked`
    )
    checkedCheckboxes.forEach(function (checkbox) {
      if (crewsItems.includes(checkbox.value)) {
        if (selectedOptions.includes('Crews')) {
          const a = new Set(selectedOptions)
          selectedOptions = [...a]
        } else {
          selectedOptions.push('Crews')
          setCrews(true)
        }
      }
      selectedOptions.push(checkbox.value)
    })
    let selectedOptionsText = document.querySelector(`.CF-options${ID}`)
    if (selectedOptionsText) {
      selectedOptionsText.textContent =
        selectedOptions.length > 0
          ? selectedOptions.join(', ')
          : 'Pick a service you would like to explore'
    }
    setOtherServices(selectedOptions.join(', '))
  }

  useEffect(() => {
    document.addEventListener('click', function (event) {
      var dropdown = document.querySelector(`.CF-select${ID}`)
      var target = event.target
      if (!dropdown?.contains(target)) {
        let checkboxes = document.getElementById(`checkboxes${ID}`)
        if (checkboxes) {
          checkboxes.style.display = 'none'
        }
        let selectBox = document.querySelector(`.CF-box${ID}`)
        if (selectBox) {
          selectBox.classList.remove('open')
        }
        updateSelectedOptions()
      }
    })
  }, [])

  useEffect(() => {
    const el = textareaRef.current
    if (!el) return

    const stopScrollPropagation = (e) => e.stopPropagation()

    const handleFocus = () => {
      el.addEventListener('wheel', stopScrollPropagation, { passive: false })
    }

    const handleBlur = () => {
      el.removeEventListener('wheel', stopScrollPropagation)
    }

    el.addEventListener('focus', handleFocus)
    el.addEventListener('blur', handleBlur)

    return () => {
      el.removeEventListener('focus', handleFocus)
      el.removeEventListener('blur', handleBlur)
      el.removeEventListener('wheel', stopScrollPropagation)
    }
  }, [])

  return (
    <FormProvider {...methods}>
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads3202011000002781001"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={onSubmit}
      >
        <MetaFields />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xnQsjsdp"
          value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
        />
        <input type="hidden" name="zc_gad" id="zc_gad" value="" />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xmIwtLD"
          value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="actionType"
          value="TGVhZHM="
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="returnURL"
          defaultValue={
            typeof window !== 'undefined' &&
            window.location.hostname.includes('staging')
              ? 'https://www.staging.makerrs.com/success'
              : 'https://www.makerrs.com/success'
          }
        />

        <input
          name="First Name"
          type="text"
          id="First_Name"
          value={First_Name}
          hidden
        />
        <input
          name="Last Name"
          type="text"
          id="Last_Name"
          value={Last_Name}
          hidden
        />
        {/* Lead source URL */}
        <input name="LEADCF4" value={sourceURL} hidden />

        {/*  Lead Source */}
        <input
          name="Lead Source"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Source */}
        <input
          name="LEADCF11"
          value={routerSource ?? metaValues['utm_source'] ?? ''}
          hidden
        />

        {/*  UTM Campaign */}
        <input
          name="LEADCF7"
          value={routerCampaign ?? metaValues['utm_campaign'] ?? ''}
          hidden
        />

        {/*  UTM Medium */}
        <input
          name="LEADCF8"
          value={routerMedium ?? metaValues['utm_medium'] ?? ''}
          hidden
        />

        {/*  UTM Content */}
        <input
          name="LEADCF9"
          value={routerContent ?? metaValues['utm_content'] ?? ''}
          hidden
        />

        {/*  UTM Term */}
        <input
          name="LEADCF10"
          value={routerTerm ?? metaValues['utm_term'] ?? ''}
          hidden
        />

        {/* Website Version */}
        <input name="LEADCF18" hidden value="Global" />

        {/* Services Interested */}
        <input name="LEADCF20" hidden value={otherServices} />

        {/* <input type="hidden" name="zf_referrer_name" value="" /> */}
        {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zf_redirect_url" value="" /> */}
        {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zc_gad" value="" /> */}
        {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}

        <div className="grid grid-cols-1 gap-7">
          <div className="grid gap-7 md:gap-x-5 md:gap-y-7 grid-cols-1 md:grid-cols-2">
            <Input
              borderedInput
              name="First_Name"
              placeholder="First Name "
              inputClassname="placeholder:opacity-[90%] tracking-[-0.16px]"
              required
            />
            <Input
              borderedInput
              name="Last_Name"
              inputClassname="opacity-[90%]  tracking-[-0.16px]"
              placeholder="Last Name "
              required
            />
            <Input
              borderedInput
              name="Email"
              placeholder="Work Email "
              required
            />

            <PhoneInput
              borderedInput
              name="Phone"
              placeholder="Mobile "
              required
            />
          </div>
          <Input
            borderedInput
            name="Company"
            placeholder="Company Name "
            required
          />

          {/* <Input
            borderedInput
            name="Designation"
            placeholder="Designation "
            required
          /> */}
          {/* <Input borderedInput name="Description" placeholder="Message" /> */}
          <div>
            <label for="Description" className="text-[16px] text-[#726f6f]">
              Message *
            </label>
            <Controller
              name="Description"
              control={methods.control}
              render={({ field, fieldState }) => (
                <div>
                  <textarea
                    {...field}
                    ref={textareaRef}
                    onChange={(e) => {
                      field.onChange(e)
                      methods.trigger('Description')
                    }}
                    maxLength={125}
                    rows={2}
                    placeholder=""
                    className="rounded-lg bg-transparent font-normal md:text-input-large placeholder:text-rb-black/40 text-rb-black !text-[16px] !p-2 !mt-3 border border-rb-davy-grey/60 w-full
                      resize-none touch-manipulation focus:touch-auto overflow-y-auto scroll-touch"
                  />
                  {/* {fieldState.error && (
                    <span className="mt-1 flex items-center font-normal tracking-[-0.14px] text-xs text-red-500">
                      {fieldState.error.message}
                    </span>
                  )} */}
                  {(field.value?.length === 125 || fieldState?.error) && (
                    <span className="mt-1 flex items-center font-normal tracking-[-0.14px] text-xs text-red-500">
                      {field.value?.length === 125
                        ? "Maximum allowed is 125 characters"
                        : fieldState?.error?.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex gap-3 items-center mt-8 md:mt-8 md:flex-row flex-col">
          <Button
            type="submit"
            className="w-full "
            suffix={<LineArrow hover />}
          >
            Let&apos;s talk
          </Button>
          {CTAbreak && (
            <div className="hidden lg:flex items-center gap-3 flex-shrink-0 mt-4 md:mt-0">
              <div className="stack-images flex">
                <img
                  src="/img/home/marin.png"
                  alt="marin"
                  loading="lazy"
                  className="translate-x-[13px] w-10 h-10 md:w-12 md:h-12"
                />
                <img
                  src="/img/manisha.webp"
                  alt="Manisha"
                  loading="lazy"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </div>
              <div className="flex flex-col">
                <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black">
                  Marin / Manisha<span className="md:hidden">,&nbsp;</span>
                </div>
                <div className="text-[16px] leading-[1.25] tracking-[-0.64px] font-medium font-everett text-rb-black/60">
                  Global Services
                </div>
              </div>
            </div>
          )}
        </div>

        <Script
          id="wf_anal"
          src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
        ></Script>
      </form>
    </FormProvider>
  )
}
