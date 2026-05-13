'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bool, mixed, object, string, number} from 'yup'
import {
  companyEmailValidation,
  fileSizeValidation,
  // liveUrlValidation,
  phoneNumberValidation,
  isValidName,
  companyNameValidation,
  sanitizeformData,
  validateDescription,
  isValidString,
} from '@/components/form/utils'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import {
  Checkbox,
  FileInput,
  Input,
  MetaFields,
  TextArea,
} from '@/components/form'
import { Label } from '@/components/form'
import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import emailjs from '@emailjs/browser'
import SelectCountry from '@/components/form/SelectCountry'
import { useState, useEffect } from 'react'

const schema = object({
  First_Name: string()
    .required('First name is required')
    .test('name', 'First name is invalid', isValidName),
  Last_Name: string()
    .required('Last name is required')
    .test('name', 'Last name is invalid', isValidName),

  Phone: string()
    .required('Phone number is required')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Country: object()
    .shape({
      id: number(),
      label: object({ flag: string(), name: string() }),
      value: string(),
    })
    .nullable()
    .required('Country code is required'),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company email is required', companyEmailValidation),
  Designation: string()
    .required('Designation is required')
    .test('name', 'Designation is invalid', isValidString), //designation
  Company: string()
    .required('Company name is required')
    .test('name', 'Company name is invalid', companyNameValidation), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Description: string().required('Project details are required').test('name','Project details are invalid',validateDescription),
  theFile: mixed().test('filesize', 'File size not more than 2 MB', (v) =>
    fileSizeValidation(v)
  ),
  Email_Opt_Out: bool(),
}).required()

const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Designation: '',
  Company: '',
  Phone: '',
  // Website: '',
  Description: '',
  theFile: [],
  Email_Opt_Out: true,
  Country: null
}

const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

export const ClientInquiryForm = ({ isPopop = false, content = false }) => {
  const metaValues = useFormMeta()
  const router = useRouter()
  const baseUrl =
    typeof window !== 'undefined'
      ? window.location.origin
      : 'http://localhost:3000'
  const sourceAsPath = router.asPath
  const sourcePath = baseUrl + sourceAsPath
  const isBlogRoute = router.pathname.startsWith('/blog/')

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name, Email_Opt_Out, Country] = methods.watch([
    'First_Name',
    'Last_Name',
    'Email_Opt_Out',
    'Country',
  ])
  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://makerrs.com/'

  const routerSource = router.query['utm_source']
  const routerCampaign = router.query['utm_campaign']
  const routerMedium = router.query['utm_medium']
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term']

  const onSubmit = async (e) => {
    e.preventDefault()
    // const secretKey = '6LfsAwApAAAAALauUGbhQ9gkrnzoE1m1eQ5zTDnK'
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    // const verifyURL ='https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify'
    const verifyURL =
      'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })
    // console.log(token)

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
        const captchaResult = await response.json()
        const parsedBody = JSON.parse(captchaResult.body)
        const score = parsedBody.data.score
        const isValidForm = await methods.trigger()
         if (isValidForm && score > 0.5) {
          const formData = methods.getValues() // Get the form data
          const base64Files = await Promise.all(
            formData?.theFile.map(fileToBase64)
          )
          // const file_Names = formData.theFile?.map(f => f.name).join(', ') || "None"
          formData.attachments = base64Files
          // console.log(formData, "formData")
          const emailData = {
            first_name: formData?.First_Name,
            last_name: formData?.Last_Name,
            work_email: formData?.Email,
            phone_number: formData?.Phone,
            company_name: formData?.Company,
            designation: formData?.Designation,
            description: JSON.stringify(formData?.Description ?? ''),
            attachments: base64Files, // attach only if not empty
            lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
            utm_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
            utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
            utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
            utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
            // file_names: file_Names,
            source: 'India',
            source_path: sourcePath,
          }
          const result = sanitizeformData(emailData)

          if (result.isValid) {
            // console.log(base64Files,"base64Files")
            // console.log(emailData,"emailDataemailData")

            // emailjs.send("service_2guc9eu", "template_y19ec3r", emailData, "1fEuQCSphx_UcWUSv");

            setTimeout(() => {
              e.target.submit()
            }, 300)

            setTimeout(() => {
              methods.reset(defaultValues)
            }, 500)
          } else {
            throw new Error('Error in form submission')
          }
        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }

  const [countryData, setCountryData] = useState(null)
  useEffect(() => {
    let countrylist = []
    const fetchData = async () => {
      try {
        // countrylist api call

        const response1 = await fetch(
          'https://api.redbangle.com/redbangle/user/api/getCountryCode'
        )
        const jsonData1 = await response1.json()

        jsonData1?.data.forEach((item, index) =>
          countrylist.push({
            id: index,
            label: { flag: item?.flag, name: item?.name },
            value: '+' + item?.callingCodes[0],
          })
        )
        setCountryData(countrylist)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [Country])

  const [otherServices, setOtherServices] = useState('')

  const toggleDropdown = () => {
    let selectBox = document.querySelector('.select-box')
    let checkboxes = document.getElementById('checkboxes')
    checkboxes.style.display =
      checkboxes.style.display === 'none' ? 'block' : 'none'
    selectBox.classList.toggle('open')
  }

  const updateSelectedOptions = () => {
    let selectedOptions = []
    let checkedCheckboxes = document.querySelectorAll(
      "#checkboxes input[type='checkbox']:checked"
    )
    checkedCheckboxes.forEach(function (checkbox) {
      if (selectedOptions) {
        const a = new Set(selectedOptions)
        selectedOptions = [...a]
      }
      selectedOptions.push(checkbox.value)
    })
    let selectedOptionsText = document.querySelector('.selected-options')
    selectedOptionsText.textContent =
      selectedOptions.length > 0
        ? selectedOptions.join(', ')
        : 'Select Services'
    setOtherServices(selectedOptions.join(', '))
  }
  useEffect(() => {
    document.addEventListener('click', function (event) {
      var dropdown = document.querySelector('.custom-select')
      var target = event.target

      if (dropdown && !dropdown.contains(target)) {
        var checkboxes = document.getElementById('checkboxes')
        checkboxes.style.display = 'none'
        var selectBox = document.querySelector('.select-box')
        selectBox.classList.remove('open')
        updateSelectedOptions()
      }
    })
  }, [])

  return (
    <div>
      {isBlogRoute ? (
        <p className="lg:text-2xl text-xl font-bold mb-10">
          Give us few details and we&apos;ll get in touch
        </p>
      ) : (
        <p
          className={`text-rb-black/90 font-normal ${
            isPopop
              ? 'text-xs text-center mt-2 mb-3'
              : 'text-sm md:text-2xl md:max-w-[80%] mb-6 md:mb-21 md:mt-4'
          }`}
        >
          {!content ? (
            <p>
              We love working on new briefs.
              <br />
              Let&apos;s start a conversation today!
            </p>
          ) : (
            <p>Drop us a line and we&apos;ll get back to you.</p>
          )}
        </p>
      )}
      <FormProvider {...methods}>
        <form
          // Prod
          action="https://crm.zoho.com/crm/WebToLeadForm"
          name="WebToLeads3202011000002781001"
          method="POST"
          acceptCharset="UTF-8"
          encType="multipart/form-data"
          onSubmit={onSubmit}
          className={`${isBlogRoute ? 'mt-10' : ''}`}
        >
          <MetaFields />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xnQsjsdp"
            defaultValue="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xmIwtLD"
            defaultValue="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="actionType"
            defaultValue="TGVhZHM="
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="returnURL"
            defaultValue={
              typeof window !== 'undefined' &&
              window.location.hostname.includes('staging')
                ? 'https://www.staging.makerrs.com/success'
                : 'https://www.makerrs.com/success'
            }
          />

          {/* <input type="hidden" name="zf_referrer_name" defaultValue="" /> */}
          {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zf_redirect_url" defaultValue="" /> */}
          {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
          {/* <input type="hidden" name="zc_gad" defaultValue="" /> */}
          {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
          <input
            name="First Name"
            type="text"
            id="First_Name"
            defaultValue={First_Name}
            hidden
          />
          <input
            name="Last Name"
            type="text"
            id="Last_Name"
            defaultValue={Last_Name}
            hidden
          />
          <input
            name="Email Opt Out"
            type="checkbox"
            id="Email_Opt_Out"
            defaultValue={!Email_Opt_Out ? 'on' : ''}
            hidden
          />
          {/* Lead source URL */}
          <input name="LEADCF4" defaultValue={sourceURL} hidden />

          {/*  Lead Source */}
          <input
            name="Lead Source"
            defaultValue={routerSource ?? metaValues['utm_source'] ?? ''}
            hidden
          />

          {/*  UTM Source */}
          <input
            name="LEADCF11"
            defaultValue={routerSource ?? metaValues['utm_source'] ?? ''}
            hidden
          />

          {/*  UTM Campaign */}
          <input
            name="LEADCF7"
            defaultValue={routerCampaign ?? metaValues['utm_campaign'] ?? ''}
            hidden
          />

          {/*  UTM Medium */}
          <input
            name="LEADCF8"
            defaultValue={routerMedium ?? metaValues['utm_medium'] ?? ''}
            hidden
          />

          {/*  UTM Content */}
          <input
            name="LEADCF9"
            defaultValue={routerContent ?? metaValues['utm_content'] ?? ''}
            hidden
          />

          {/*  UTM Term */}
          <input
            name="LEADCF10"
            defaultValue={routerTerm ?? metaValues['utm_term'] ?? ''}
            hidden
          />

          <div
            className={`${
              isBlogRoute ? '' : 'md:gap-y-14'
            } grid grid-cols-1 md:grid-cols-2 gap-6`}
          >
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Name*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  name="First_Name"
                  label="First Name"
                  placeholder={isBlogRoute ? 'First Name' : 'Your first name'}
                  required
                  borderedInput={isBlogRoute}
                  hideLabel={true}
                />
                <Input
                  name="Last_Name"
                  label="Last Name"
                  placeholder={isBlogRoute ? 'Last Name' : 'Your last name'}
                  required
                  borderedInput={isBlogRoute}
                  hideLabel={true}
                />
              </div>
            </div>
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Mobile*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <SelectCountry
                  name="Country"
                  // title="Country*"
                  displayLabel="hidden"
                  addCustomStyle
                  options={countryData}
                  // placeholder="Select your Country"
                  required
                />
                <PhoneInput
                  name="Phone"
                  label={'Mobile Number'}
                  placeholder={
                    isBlogRoute ? 'Mobile Number' : 'Your mobile number'
                  }
                  required
                  borderedInput={isBlogRoute}
                  hideLabel={true}
                />
              </div>
            </div>
            {/* <Input
              name="Phone"
              label="Phone Number"
              placeholder="Your Phone Number"
              required
            /> */}
            <Input
              name="Email"
              label="Email"
              placeholder={isBlogRoute ? 'Work Email' : 'Your work email ID'}
              required
              borderedInput={isBlogRoute}
            />
            <div className={`${isBlogRoute && 'col-span-1 lg:col-span-2'}`}>
              <Input
                name="Designation"
                label="Job Title"
                placeholder={isBlogRoute ? 'Job Title' : 'Your job title'}
                required
                borderedInput={isBlogRoute}
              />
            </div>
            <div className={`${isBlogRoute && 'col-span-1 lg:col-span-2'}`}>
              <Input
                name="Company"
                label="Company"
                placeholder={isBlogRoute ? 'Company Name' : 'Your company name'}
                required
                borderedInput={isBlogRoute}
              />
            </div>
            {/* <div className="custom-select-services">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Which business vertical would you like to connect with?
              </label>
              <div className="custom-select">
                <div className="select-box" onClick={toggleDropdown}>
                  <div
                    className={`selected-options ${
                      otherServices.length === 0 ? 'opacity-60' : ''
                    }`}
                  >
                    Select Services
                  </div>
                  <div
                    className="options-container"
                    id="checkboxes"
                    style={{ display: 'none' }}
                  >
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="Global B2B"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      Global B2B
                    </label>
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="India B2C"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      India B2C
                    </label>
                    <label className="text-[18px] font-bold">
                      <input
                        type="checkbox"
                        value="AI Labs"
                        onChange={updateSelectedOptions}
                        className="pointer-events-none"
                      />{' '}
                      AI Labs
                    </label>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="md:col-span-2">
              {isBlogRoute ? (
                ''
              ) : (
                <Label>
                  {!content
                    ? 'Tell us a bit about your brief*'
                    : 'Send us a query'}
                </Label>
              )}
              {isBlogRoute ? (
                <div className=" border-rb-border-grey border-b-2">
                  <TextArea
                    name="Description"
                    hideLabel
                    placeholder="Message"
                    required
                    // className="md:pb-14"
                    noBorder
                    rows={isBlogRoute ? 1 : 12}
                  />
                </div>
              ) : (
                <div className=" border-rb-border-grey rounded-lg border p-4 md:p-6">
                  <TextArea
                    name="Description"
                    hideLabel
                    placeholder="Please provide us with the details of your inquiry or any questions you may have"
                    required
                    noBorder
                    rows={isBlogRoute ? 3 : 12}
                  />
                  {!content && (
                    <FileInput
                      name="theFile"
                      hideLabel
                      label="Attach Files"
                      labelClassName="mt-4 relative right-[6px]"
                      placeholder="File size not more than 2 MB"
                    />
                  )}
                </div>
              )}
              {!isBlogRoute && (
                <Checkbox
                  name="Email_Opt_Out"
                  label="Yes, sign me up for your newsletter"
                  labelClassName="mt-4"
                />
              )}
            </div>
            <Button
              type="submit"
              suffix={<LineArrow hover />}
              className={`${isBlogRoute ? 'mt-5' : ''} md:w-auto g-recaptcha ${
                isPopop ? 'lg:col-span-2' : ''
              }`}
            >
              {isBlogRoute ? 'CONTACT US' : 'SUBMIT'}
            </Button>
          </div>
          <Script
            id="wf_anal"
            src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273gid4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261aegid885e3c1045bd9bdcc91bdf30f82b5696gid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
          ></Script>
        </form>
      </FormProvider>
    </div>
  )
}
