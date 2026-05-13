'use client'
import { useState, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { bool, mixed, number, object, string } from 'yup'
import {
  companyEmailValidation,
  fileSizeValidation,
  // liveUrlValidation,
  phoneNumberValidation, isValidName, companyNameValidation, validateDescription, isValidString
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
import SelectCountry from '@/components/form/SelectCountry'
import emailjs from '@emailjs/browser';


const schema = object({
  First_Name: string().required('First name is required').test('name', 'First Name is invalid', isValidName),
  Last_Name: string().required('Last name is required').test('name', 'Last Name is invalid', isValidName),

  Phone: string()
    .required('Phone number is required')
    .max(20, 'Phone number must be within 20 characters')
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
    .required('Email is required'),
  Expertise: string().required('Expertise is required').test('name', 'Expertise is invalid', validateDescription), //Expertise
  //   Company: string().required('Company name is required').test('name', 'Company is invalid', companyNameValidation), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  Description: string().required('Message is required').test('name', 'Message is invalid', validateDescription),
  theFile: mixed().test('filesize', 'File size not more than 2 MB', (v) =>
    fileSizeValidation(v)
  ),
  Email_Opt_Out: bool(),
}).required()

const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Expertise: '',
  Company: '',
  Phone: '',
  // Website: '',
  Description: '',
  theFile: [],
  Email_Opt_Out: true,
  Country: null,
}



export const sanitizeformData = (emailData) => {
  const errors = {};
  // Validate first name
  if (!isValidName(emailData.First_Name)) {
    errors.First_Name = "Invalid first name. Ensure it is properly formatted.";
  }
  // Validate last name
  if (!isValidName(emailData.Last_Name)) {
    errors.Last_Name = "Invalid last name. Ensure it is properly formatted.";
  }
  // if (!companyEmailValidation(emailData.Email)) {
  //   errors.Email = "Invalid email format.";
  // }
  if (!phoneNumberValidation(emailData.Phone)) {
    errors.Phone = "Invalid phone number";
  }
  // if (!isValidString(emailData.Expertise)) {
  //   errors.Phone = "Invalid Expertise";
  // }
  // Validate company name
  //   if (!companyNameValidation(emailData.Company) || emailData.Company.trim().length < 2) {
  //     errors.Company = "Company name must be at least 2 characters long.";
  //   }

  // Validate description (optional, but limit length)
  // if (emailData?.Description && emailData?.Description.trim().length > 500) {
  //   errors.Description = "Description must be less than 500 characters.";
  // }

  // Return validation result
  return Object.keys(errors).length === 0 ? { isValid: true } : { isValid: false, errors };
};


export const CollabInquiryForm = () => {
  // const [callingCode, setCallingCode] = useState('')
  const [countryData, setCountryData] = useState(null)
  const [crews, setCrews] = useState(false)

  const [otherServices, setOtherServices] = useState('')

  const metaValues = useFormMeta()
  const router = useRouter()

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
            // label: (
            //   <div className="flex items-center gap-2">
            //     <img
            //       className="w-6 h-4 md:w-10 md:h-6.5"
            //       src={item?.flag}
            //       alt={item?.name}
            //     />
            //     <span>+ {item?.callingCodes[0]}</span>
            //   </div>
            // ),
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

  const onSubmit = async (e) => {
    // e.preventDefault()
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL = 'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'


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
        "token": token
      }),
    })
      .then(async (response) => {
        const isValidForm = await methods.trigger()
        const score = JSON.parse((await response.json()).body)?.data?.score ?? 0;
        const formData = methods.getValues(); // Get form values
        const result = sanitizeformData(formData)
        if (isValidForm && score > 0.5 && result.isValid) {
          const emailData = {
            first_name: formData?.First_Name,
            last_name: formData?.Last_Name,
            work_email: formData?.Email,
            phone_number: formData?.Phone,
            Expertise: formData?.Expertise,
            Description: formData?.Description,
          }
          emailjs //collab emailjs 
            .send(
             "service_ufdcfdc", "template_8y9ogfc",
              emailData,
              '5pg--KUIUQjmE0nqH' 
            )
            .then(
              () => {
                  methods.reset(defaultValues)
                 router.push('/success?type=collab');
              },
              (error) => {
                // alert('Failed to send message. Please try again.')
                console.error(error)
              }
            )



        }
      })
      .catch((error) => {
        // Handle any errors that occur during the fetch request
        console.error('Error:', error)
      })
  }


  const toggleDropdown = () => {
    let selectBox = document.querySelector('.select-box')
    let checkboxes = document.getElementById('checkboxes')
    checkboxes.style.display =
      checkboxes.style.display === 'none' ? 'block' : 'none'
    selectBox.classList.toggle('open')
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
      "#checkboxes input[type='checkbox']:checked"
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
      <p className="text-rb-black/90 font-normal text-sm md:text-2xl mb-6 md:mb-21 md:mt-4">
        We love collaborating with amazingly creative people. 
        <br />
        Let&apos;s start a conversation today!
      </p>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <MetaFields />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xnQsjsdp"
            value="4cc8622095994ef39e8cdc2b3cd1fd98c36d2e2b911d8ae251785b602a4261ae"
          />
          <input type="hidden" name="zc_gad" id="zc_gad" value="" />
          <input
            type="text"
            style={{ display: 'none' }}
            name="xmIwtLD"
            value="085cc69187c7848f10bdb9778be4b4a6aa6d940a6de6344bb4107f9f9091d273"
          />
          <input
            type="text"
            style={{ display: 'none' }}
            name="actionType"
            value="TGVhZHM="
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
          <input
            name="Email Opt Out"
            type="checkbox"
            id="Email_Opt_Out"
            value={!Email_Opt_Out ? 'on' : ''}
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

          {/* Country code */}
          <input name="LEADCF19" hidden value={Country?.value} />

          {/* Services Interested */}
          <input name="LEADCF20" hidden value={otherServices} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-y-14">
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                Name*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <Input
                  name="First_Name"
                  label=""
                  placeholder="Your first name"
                  required
                  hideLabel={true}
                />
                <Input
                  name="Last_Name"
                  label=""
                  placeholder="Your last name"
                  required
                  hideLabel={true}
                />
              </div>
            </div>

            {/* <PhoneInput
              name="Phone"
              label="Phone Number"
              placeholder="Your Phone Number"
              required
            /> */}
            <div className="col-span-1 ">
              <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
               Mobile*
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                {/* <div className="w-[25%] h-[57.6px] md:h-[73.6px] mr-2 p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg px-3 md:px-4 pointer-none">{`${
                  callingCode && '+' + callingCode
                }`}</div> */}
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
                  label=""
                  placeholder="Your mobile number"
                  inputClassname="px-3 md:px-4 font-normal"
                />
              </div>
            </div>
            <Input
              name="Email"
              label="Email"
              placeholder="Your email address"
              required
            />
            <Input
              name="Expertise"
              label="Expertise"
              placeholder="Your expertise"
              required
            />
            <div className="md:col-span-2">
              <Label>
                Message*
              </Label>
              <div className=" border-rb-border-grey rounded-lg border p-4 md:p-6">

                <TextArea
                  name="Description"
                  hideLabel
                  placeholder="Let us know what you would like to reach us about. And we’ll get back to you."
                  required
                  // className="md:pb-14"
                  noBorder
                  rows={12}
                />
              </div>

            </div>
            <Button
              type="submit"
              suffix={<LineArrow hover />}
              className="w-full md:w-auto g-recaptcha"
            >
              SUBMIT
            </Button>
          </div>

        </form>
      </FormProvider>
    </div>
  )
}
