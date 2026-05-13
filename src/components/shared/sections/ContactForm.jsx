import { FormProvider, useForm } from 'react-hook-form'
import { Input, MetaFields } from '@/components/form'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  companyEmailValidation,
  // liveUrlValidation,
  phoneNumberValidation, isValidName, companyNameValidation, sanitizeformData, validateDescription,isValidString
} from '@/components/form/utils'

import Script from 'next/script'
import { useFormMeta } from '@/hooks'
import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

const schema = object({
  First_Name: string().required('First name is required').test('name', 'First Name is invalid', isValidName),
  Last_Name: string().required('Last name is required').test('name', 'Last Name is invalid', isValidName),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Company email is required', companyEmailValidation),
  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be in 20 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  Company: string().required('Company name is required').test('name', 'Company is invalid', companyNameValidation), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Designation: string().required('Designation is required').test('name', 'Designation is invalid', isValidString), //designation
  Description: string().test('name', 'Company is invalid', validateDescription),
})
const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Phone: '',
  Company: '',
  // Website: '',
  Designation: '',
  Description: '',
}


export const ContactForm = () => {

  const [storedCompaign, setStoredCompaign] = useState(null);
  const [storedSource, setStoredSource] = useState(null);
  const [storedMedium, setStoredMedium] = useState(null);
  const [storedTerm, setStoredTerm] = useState(null);
  useEffect(() => {
    const utm_campaign = sessionStorage.getItem('utm_campaign');
    setStoredCompaign(utm_campaign);
    const utm_source = sessionStorage.getItem('utm_source');
    setStoredSource(utm_source);
    const utm_medium = sessionStorage.getItem('utm_medium');
    setStoredMedium(utm_medium);
    const utm_term = sessionStorage.getItem('utm_term');
    setStoredTerm(utm_term);
  }, []);

  const metaValues = useFormMeta()
  const router = useRouter()
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000';
  const sourceAsPath = router.asPath
  const sourcePath = baseUrl + sourceAsPath
  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })
  const [First_Name, Last_Name] = methods.watch(['First_Name', 'Last_Name'])
  const sourceURL =
    typeof window !== 'undefined'
      ? window.location.href
      : 'https://www.makerrs.com'
  const routerSource = router.query['utm_source'] || storedSource
  const routerCampaign = router.query['utm_campaign'] || storedCompaign
  const routerMedium = router.query['utm_medium'] || storedMedium
  const routerContent = router.query['utm_content']
  const routerTerm = router.query['utm_term'] || storedTerm
  const onSubmit = async (e) => {
    e.preventDefault()

    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL = 'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'

    const token = await grecaptcha.execute(siteKey, {
      action: 'submit',
    })
    // console.log(token, "token")

    fetch(verifyURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'token': token,
      }),
    })
      .then(async (response) => {
        const captchaResult = await response.json()
        const parsedBody = JSON.parse(captchaResult.body);
        const score = parsedBody.data.score;
        const isValidForm = await methods.trigger()
        if (isValidForm) {
          const formData = methods.getValues(); // Get the form data
          const emailData = {
            first_name: formData?.First_Name,
            last_name: formData?.Last_Name,
            work_email: formData?.Email,
            phone_number: formData?.Phone,
            company_name: formData?.Company,
            designation: formData?.Designation,
            description: formData?.Description,
            lead_source: routerSource ?? metaValues['utm_source'] ?? 'NA',
            utm_source: routerSource ?? metaValues['utm_so urce'] ?? 'NA',
            utm_medium: routerMedium ?? metaValues['utm_medium'] ?? 'NA',
            utm_term: routerTerm ?? metaValues['utm_term'] ?? 'NA',
            utm_campaign: routerCampaign ?? metaValues['utm_campaign'] ?? 'NA',
            source: "India",
            source_path: sourcePath
          }

          const result = sanitizeformData(emailData)
          // console.log(result, score)
          if (result.isValid && score > 0.5) {
            emailjs.send("service_2guc9eu", "template_y19ec3r", emailData, "1fEuQCSphx_UcWUSv");
            console.log(emailData)
            setTimeout(() => {
              e.target.submit()
            }, 300);

            setTimeout(() => {
              methods.reset(defaultValues)
            }, 500)
          } else {
            throw new Error("Error in form submission");
          }


        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })


  }

  return (
    <FormProvider {...methods}>
      <form
        action="https://crm.zoho.com/crm/WebToLeadForm"
        name="WebToLeads3202011000002781001"
        method="POST"
        acceptCharset="UTF-8"
        encType="multipart/form-data"
        onSubmit={onSubmit}
        style={{ color: 'white' }}
      >
        <MetaFields />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xnQsjsdp"
          // defaultValue="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          defaultValue='49472eef5fe266059d34486f17cb3a52129c1ef5712821a5856087bcde1797bc'
        />
        <input type="hidden" name="zc_gad" id="zc_gad" defaultValue="" />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="xmIwtLD"
          // defaultValue="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
          defaultValue={'18fe3511462f5b75d032761a6844845a26546c0c10c66b3decfccd87f8a4133c267492f90a28b936eb01f99ad60820fd'}
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="actionType"
          defaultValue="TGVhZHM="
        />
        <input
          type="text"
          hidden
          style={{ display: 'hidden' }}
          name="returnURL"
          defaultValue="https&#x3a;&#x2f;&#x2f;www.makerrs.com&#x2f;success"
        />

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

        {/* <input type="hidden" name="zf_referrer_name" defaultValue="" /> */}
        {/* To Track referrals , place the referrer name within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zf_redirect_url" defaultValue="" /> */}
        {/* To redirect to a specific page after record submission , place the respective url within the " " in the above hidden input field */}
        {/* <input type="hidden" name="zc_gad" defaultValue="" /> */}
        {/* If GCLID is enabled in Zoho CRM Integration, click details of AdWords Ads will be pushed to Zoho CRM  */}
        <div className="grid grid-cols-1 gap-8">
          <div className="grid gap-8 md:gap-x-5 md:gap-y-8 grid-cols-1 md:grid-cols-2">
            <Input
              borderedInput
              name="First_Name"
              placeholder="First Name"
              required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
            />
            <Input
              borderedInput
              name="Last_Name"
              placeholder="Last Name"
              required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
            />
            <Input
              borderedInput
              name="Email"
              placeholder="Work Email"
              required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
            />
          
            <PhoneInput
              borderedInput
              name="Phone"
              placeholder="Phone Number "
              required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
            />
          </div>
          <Input
            borderedInput
            name="Company"
            placeholder="Company Name"
            required
            inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
          />

          <Input
            borderedInput
            name="Designation"
            placeholder="Designation"
            required
            inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"  
          />
          <Input
            borderedInput
            name="Description"
            placeholder="Message"
            required
            inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-8 md:mt-10"
          suffix={<LineArrow hover />}
        >
          Contact us
        </Button>
        <Script
          id="wf_anal"
          src="https://crm.zoho.com/crm/WebFormServeServlet?rid=98534105cfab9c9c5abad7800f35488593710a1a319d580fb3d0a33d14d1040b110ccdbe5460435a5e3acc4d644f82adgid03f30335e7c3e5f1f864248c0ca94611a90767737aba1aae1e480486624cc0e6"
        ></Script>
      </form>
    </FormProvider>
  )
}
