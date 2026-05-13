import { useEffect, useState, useCallback } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { array, bool, boolean, mixed, object, string } from 'yup'
import {
  // companyEmailValidation,
  allEmailValidation,
  fileRequiredValidation,
  phoneNumberValidation,
  passwordValidation,
} from '@/components/form/utils'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import {
  Checkbox,
  // FileInput,
  Input,
} from '@/components/form'

import { useRouter } from 'next/router'
import SelectReact from '@/components/form/SelectReact'
import TagsInput from '@/components/form/TagsInput'
import { PhoneInput } from '@/components/form/PhoneInput'
import SelectTagsInput from '@/components/form/SelectTagsInput'

const schema = object({
  Identify: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('This field is required'),
  FullName: string().required('Full name is required'),
  Country: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('Country is required'),

  City: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('City is required'),
  Phone: string()
    .required('Phone number is required')
    .min(10, 'Phone number must be in 10 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  PrimaryServices: mixed().required('This field is required'),
  Email: string()
    .email('Email is invalid')
    .required('Email is required')
    .test('domain', 'Correct Email is required', allEmailValidation),
  Password: string()
    .required('Password is required')
    .test(
      'Password',
      'Your password must have six characters and must contain one lower case letter and one number.',
      passwordValidation
    ),
  // Otherservices: array()
  //   .of(string())
  //   .test('Otherservices', 'Services is required', fileRequiredValidation),
  // Worklink: array()
  //   .of(string())
  //   .test('Worklink', 'Work link is required', fileRequiredValidation),
  Currency: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('Currency is required'),
  Duration: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('Duration is required'),
  MinimumFee: string().required('Minimum Fee is required'),
  TNC: boolean().oneOf([true], 'Please Accept'),
}).required()

const defaultValues = {
  Identify: null,
  FullName: '',
  Phone: '',
  Country: null,
  City: null,
  Email: '',
  Password: '',

  PrimaryServices: null,
  Otherservices: [],
  Worklink: [],

  Currency: null,
  Duration: null,
  MinimumFee: '',
  TNC: false,
}

const budgetList = [
  { label: 'INR', value: 'INR' },
  { label: 'USD', value: 'USD' },
  { label: 'EUR', value: 'EUR' },
  { label: 'JPY', value: 'JPY' },
  { label: 'GBP', value: 'GBP' },
]
const durationList = [
  { label: 'per hour', value: '8e42f730-babd-47ab-99df-51782b1afc0f' },
  { label: 'per week', value: 'dd737253-97b5-4cf1-9129-c6f60707a5f7' },
  { label: 'per project', value: 'd1492afe-0aa1-44da-82a3-07f822077aee' },
  { label: 'per day', value: '178242a9-261f-47fd-9161-a98b281e342a' },
]

const IdentifyList = [
  { label: 'Individual', value: 'individual' },
  { label: 'Business', value: 'business' },
]

const headingArray = ['About You', 'Services & Work', 'Sign Up Information']
const subHeadingTitleArray = [
  'Personal Information',
  'Services',
  'Email & Password',
]
const subHeadingDescArray = [
  'We ensure your personal information is protected and used responsibly.',
  // 'Safeguarding your data. Trust and privacy are our priorities.',
  // 'We ensure your personal information is protected and used responsibly.',
]

const primaryServiceList = [
  { label: '360 Shooter', value: '6745a962-c98d-400e-b322-8426f02feb6d' },
  { label: '3D Graphics', value: 'dbb91ccc-351b-4aa1-b929-3e9bb5f66c63' },
  { label: 'Animator - 2D', value: 'b9c2bb87-a700-4738-90ff-842ed9fb2624' },
  { label: 'Animator - 3D', value: '86358ac8-0f22-4587-bf08-e657630f957a' },
  { label: 'Art Assistant', value: '455c126c-1358-4108-af5a-346c185680fd' },
  { label: 'Art Director', value: 'b9bb799b-7690-4cac-8a3a-fe1d1d400f8d' },
  {
    label: 'Assistant Cinematographer',
    value: '6ff270bf-a2b0-4b5e-8173-6c8031fa6b21',
  },
  {
    label: 'Assistant Director',
    value: 'd3a1eca3-62fe-4345-a20d-a7c4cd33dade',
  },
  { label: 'Boom Operator', value: '9a75bdcb-093b-4780-8027-9ccbe86b4e2f' },
  { label: 'Camera Assistant', value: '7392a88e-4859-45ff-909a-180a8a0d3d87' },
  { label: 'Camera Operator', value: '5228d76f-eb17-4d54-ba49-4b0ac500ad41' },
  { label: 'Casting Director', value: 'e714c0c3-96c7-4fa2-95ac-5708bd0e03b0' },
  { label: 'Choreographer', value: 'afbb8a6f-1ba6-4f83-802e-95fad59bcd1b' },
  { label: 'Cinematographer', value: '02fbf950-30bc-44fc-adb2-696dde388cf3' },
  { label: 'Colourist', value: 'de6b8b59-1448-4799-8db1-028caa0455fa' },
  { label: 'Concept Artist', value: '4f9d6f06-5991-4917-ba71-a116edaa277c' },
  { label: 'Costumer', value: 'c7c69211-33a5-4ef0-b66e-e13ca8cfe7a4' },
  { label: 'Creative Director', value: '1060db4c-f5ab-4570-a1e1-7068ee72a1b8' },
  { label: 'Digital Marketing', value: '6159b493-c5cd-4819-a159-8f65b21f416b' },
  { label: 'Director', value: 'e7f18df3-3a9e-486f-ac8e-a8bf1d63dd51' },
  {
    label: 'Directors Assistant',
    value: 'f1fb82c7-14c8-49ba-9bc5-e956e073c173',
  },
  { label: 'Drone Operator', value: 'fa6e1395-f13b-4706-b608-896433e06226' },
  { label: 'Editor', value: '6c211723-8705-45ae-9295-6749998d0561' },
  { label: 'Focus Puller', value: '885d0c0f-4cb2-4048-8791-9a5aeef8ca1d' },
  { label: 'Gaffer', value: '396b8a88-3cbe-4704-bfd7-a79c502cf09e' },
  { label: 'Generator Team', value: 'a35c5ff6-3d69-49de-960c-2eefededf086' },
  { label: 'Graphic Designer', value: '08a031ae-073e-4f7a-8eeb-494d4ccafc5b' },
  { label: 'Grip', value: '7a7aa64c-606e-44aa-804d-c0203204565d' },
  { label: 'Hair & Makeup', value: '3554dec1-3d05-44fb-80e0-f7853a634267' },
  { label: 'Key Grip', value: 'f65eac16-2e1e-4a3b-a8e1-f5bc555875c7' },
  { label: 'Light Assistant', value: '2490b1ae-6270-4fec-8f91-28f59a1c6a56' },
  { label: 'Light Technician', value: '705573e0-1f9f-4ea9-8429-7ab068e8ca18' },
  { label: 'Line Producer', value: '960a853b-ff27-4495-9fee-ea13421838c4' },
  { label: 'Live editor', value: 'bbb6739f-4973-4ea8-acb0-62f78bb495b4' },
  { label: 'Live Mixer', value: 'fabaa457-5d9f-4ad8-bc40-9bdf3fdc277b' },
  {
    label: 'Location Scout/Manager',
    value: 'b9fda61f-8a24-4792-a937-6be28d609f86',
  },
  { label: 'Music Producer', value: '61658b8a-290f-4cfd-a317-50cdd5a318fe' },
  { label: 'Photographer', value: '872f4ac2-8c3e-472d-af28-81f4c9eca3fb' },
  { label: 'Producer', value: '3151008f-7631-4631-ac3f-c240dddaccb3' },
  {
    label: 'Production Assistant',
    value: 'd5af0b6b-72f3-43c4-acd4-4e5a38614cd5',
  },
  {
    label: 'Production Manager',
    value: 'f6338610-b2e1-479b-a829-f420649ddd83',
  },
  {
    label: 'Production/Set designer',
    value: 'b86864cb-9fb1-4e6a-94c1-11e044d2b57b',
  },
  { label: 'SFX Artist', value: '35bf1216-b2ca-41f9-a257-953d1e153f5c' },
  { label: 'Sound Designer', value: 'f8817019-93bb-4fd5-b764-306496928755' },
  { label: 'Sound Recordist', value: '694ff797-b8a2-4cf8-b731-7b8102fdd23c' },
  { label: 'Storyboard Artist', value: 'b68ca24a-2204-4152-991b-06ff795952fe' },
  { label: 'Styling Assistant', value: '0d8c5bfb-85ab-450e-b02e-6d65f871ec06' },
  { label: 'Stylist', value: 'a4835b90-8d7d-4489-90bd-70564b7ca138' },
  {
    label: 'Talent - On Screen',
    value: '41815ded-aa0e-4627-9fdc-e4d5f8bbde54',
  },
  {
    label: 'Talent - Voiceover',
    value: 'f0c09791-c9f1-4e84-b2be-3d283806c51b',
  },
  {
    label: 'Transcriptionist (Subtitling)',
    value: '3d9fa5b1-b36c-4ec4-aa64-9ee729685f02',
  },
  { label: 'VFX Artist', value: '5df6d4e3-532f-4592-9c4d-c5f42f87cb07' },
  { label: 'Writer', value: '04ea725f-30cd-4487-a1ed-4a153eb733fe' },
]

export const CollabForm = ({ modalTrigger }) => {
  const [message, setMessage] = useState('Signing you up, Please wait...')
  const [headingCount, setHeadingCount] = useState(0)
  const [countryData, setCountryData] = useState(null)
  const [cityData, setCityData] = useState([])

  const router = useRouter()

  let countrylist = []
  let citylist = []

  const [callingCode, setCallingCode] = useState('')

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })

  const [
    Country,
    City,
    Identify,
    Phone,
    FullName,
    PrimaryServices,
    Otherservices,
    Worklink,
    Email,
    Password,
    Currency,
    MinimumFee,
    Duration,
    TNC,
  ] = methods.watch([
    'Country',
    'City',
    'Identify',
    'Phone',
    'FullName',
    'PrimaryServices',
    'Otherservices',
    'Worklink',
    'Email',
    'Password',
    'Currency',
    'MinimumFee',
    'Duration',
    'TNC',
  ])

  useEffect(() => {
    methods.setValue('City', null)

    const fetchData = async () => {
      try {
        // countrylist api call
        const response1 = await fetch(
          'https://api.redbangle.com/redbangle/user/api/getCountryCode'
        )
        const jsonData1 = await response1.json()

        jsonData1?.data.forEach((item) =>
          countrylist.push({ label: item?.name, value: item?.name })
        )
        setCountryData(countrylist)

      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [Country])

  useEffect(() => {
    const fetchData = async () => {
      if (Country?.value) {
        try {
          // getting country calling code
          const response1 = await fetch(
            'https://api.redbangle.com/redbangle/user/api/getCountryCode'
          )
          const jsonData1 = await response1.json()
          let code = jsonData1?.data.filter(
            (item) => item?.name === Country.value
          )
          setCallingCode(code[0].callingCodes[0])

          // CityList api call
          const response2 = await fetch(
            `https://api.redbangle.com/redbangle/user/api/getCityList/${Country?.value}`
          )
          const jsonData2 = await response2.json()

          jsonData2?.data.forEach((item) =>
            citylist.push({ label: item, value: item })
          )
          setCityData(citylist)
        } catch (error) {
          console.log(error)
        }
      }
    }
    fetchData()
  }, [Country?.value])

  const modalChange = () => {
    if (headingCount < 2) {
      setHeadingCount(headingCount + 1)
    } else {
      if (Object.keys(methods.formState.errors).length === 0) {
        // modalController()
        // methods.reset(defaultValues)
      }
    }
  }

  const modalController = () => {
    setHeadingCount(0)
    modalTrigger()
  }

  const stepsChanger = (value) => {
    setHeadingCount(value - 1)
  }

  // const selectedTags = (tags) => console.log(tags)
  // console.log(methods.formState.errors)
  // console.log(methods.getValues())
  // console.log(
  //   Country,
  //   City,
  //   Identify,
  //   Phone,
  //   FullName,
  //   PrimaryServices,
  //   Otherservices,
  //   Worklink,
  //   Email,
  //   Password,
  //   Currency,
  //   MinimumFee,
  //   Duration
  // )
  // console.log(methods.getFieldState('Identify'))

  const payload = {
    type: Identify?.value,
    personal_information: {
      name: FullName,
      city: City?.value,
      country: Country?.value,
      phone_country_code: `+${callingCode}`,
      phone_number: Phone,
      email: Email,
      password: Password,
      role: 'collaborator',
    },
    services: [
      {
        job_type_id: PrimaryServices?.value,
        currency_code: Currency?.value,
        min_fee: MinimumFee,
        // max_fee: '50000',
        fee_uom_id: Duration?.value,
      },
    ],
    worklinks: Worklink?.map((item) => ({
      url: item,
    })),
  }
  // console.log(methods.formState.errors)
  // console.log(payload)

  // const onSubmit = () => {
  //   document.querySelector('.error-popup').classList.add('active')

  //   fetch('https://api.redbangle.com/redbangle/user/api/clbrtrSignup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       appid: 'COLLABORATOR',
  //     },
  //     body: JSON.stringify(payload),
  //   })
  //     .then((r) => r.json())
  //     .then((res) => {
  //       // console.log(res)
  //       if (res.success) {
  //         router.push('/thankyou')
  //       }
  //       if (!res.success) {
  //         if (res.message === 'Email id already existing in our records.') {
  //           setMessage(
  //             'Email Id already registered. Please sign in to continue.'
  //           )
  //         } else {
  //           setMessage('Sign up failed. Please try again.')
  //         }
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //       setMessage('Sign up failed. Please try again.')
  //     })
  // }

  const onSubmit = async (e) => {
    // e.preventDefault();
  
    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4';
    const verifyURL = 'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'
  
    try {
      const token = await grecaptcha.execute(siteKey, { action: 'submit' });
  
      // Verify CAPTCHA token
      const response = await fetch(verifyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'token': token }),
      });

      
      console.log('response', response)
      // const verificationResult = await response.json();
  
      if (response.success) {
        document.querySelector('.error-popup').classList.add('active');
  
        fetch('https://api.redbangle.com/redbangle/user/api/clbrtrSignup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            appid: 'COLLABORATOR',
          },
          body: JSON.stringify(payload),
        })
          .then((r) => r.json())
          .then((res) => {
            if (res.success) {
              router.push('/thankyou');
            }
            if (!res.success) {
              if (res.message === 'Email id already existing in our records.') {
                setMessage('Email Id already registered. Please sign in to continue.');
              } else {
                setMessage('Sign up failed. Please try again.');
              }
            }
            // console.log(payload);
          })
          .catch((err) => {
            console.log(err);
            setMessage('Sign up failed. Please try again.');
          });
      } else {
        console.error('CAPTCHA verification failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <>
      <div className="py-4 md:py-8 border-b border-b-black/10 flex items-center">
        <div className="flex items-center justify-between container relative md:flex-row flex-col-reverse">
          <div className="flex">
            <div className="flex">
              <div className="stages active">
                <span
                  className={`flex items-center cursor-pointer ${
                    Country && City && Identify && Phone && FullName
                      ? 'pointer-events-auto '
                      : 'pointer-events-none '
                  }`}
                  onClick={() => stepsChanger(1)}
                >
                  <div className="number">1</div>
                  <div className="desc">About&nbsp;You</div>
                </span>
              </div>
            </div>
            <div className="flex">
              <div className={`stages ${headingCount >= 1 ? 'active' : ''}`}>
                <div className="dash"></div>
                <span
                  className={`flex items-center cursor-pointer ${
                    PrimaryServices &&
                    // Otherservices &&
                    Currency &&
                    MinimumFee &&
                    // Worklink &&
                    Duration
                      ? 'pointer-events-auto '
                      : 'pointer-events-none '
                  }`}
                  onClick={() => stepsChanger(2)}
                >
                  <div className="number">2</div>
                  <div className="desc">Services&nbsp;&&nbsp;Work</div>
                </span>
              </div>
            </div>
            <div className="flex">
              <div className={`stages ${headingCount >= 2 ? 'active' : ''}`}>
                <div className="dash"></div>
                <span
                  className={`flex items-center cursor-pointer ${
                    Email && Password && TNC
                      ? 'pointer-events-auto '
                      : 'pointer-events-none '
                  }`}
                  onClick={() => stepsChanger(3)}
                >
                  <div className="number">3</div>
                  <div className="desc">Sign&nbsp;Up&nbsp;Information</div>
                </span>
              </div>
            </div>
          </div>
          <div className="mb-5 md:my-0 ml-auto">
            <Button onClick={modalController} size="sm" className="close-btn">
              CLOSE
            </Button>
          </div>
          <div className="absolute error-popup ">
            {message === 'Signing you up, Please wait...' ? (
              <img
                src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/collab/signup-loader.gif`}
                alt="loader"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            ) : (
              <img
                src={`${process.env.NEXT_PUBLIC_HOST_URL}/img/collab/alert-circle.svg`}
                alt="alert"
                width={24}
                height={24}
                className="w-6 h-6"
              />
            )}
            {message}
          </div>
        </div>
      </div>
      <div className="container">
        <div className="text-title md:text-title-md text-rb-black font-everett mt-12 mb-8 md:mb-16">
          {headingArray[headingCount]}
        </div>
        {/* <div className="flex md:flex-row flex-col justify-between"> */}
        <div className="grid grid-cols-1 md:grid-cols-[33.3%_58.3%] gap-[8.3%]">
          <div className="w-full ">
            <div className="text-accordion-medium md:text-accordion-large font-rb-black font-everett font-medium">
              {subHeadingTitleArray[headingCount]}
            </div>
            <div className="text-sm md:text-acc-large mt-2 md:mt-3 text-rb-dune/90">
              {subHeadingDescArray[headingCount]}
            </div>
            {headingCount === 1 && (
              <div className="w-full mt-6 md:mt-[340px]">
                <div className="text-accordion-medium md:text-accordion-large font-rb-black font-everett font-medium">
                  Work
                </div>
                {/* <div className="text-sm md:text-acc-large mt-2 md:mt-3 text-rb-dune/90">
                  We ensure your personal information is protected and used
                  responsibly.
                </div> */}
              </div>
            )}
          </div>
          <div className="w-full ">
            <div className="collab-form">
              <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6 md:gap-y-9">
                    {headingCount === 0 && (
                      <>
                        <SelectReact
                          name="Identify"
                          title="Identify as*"
                          options={IdentifyList}
                          placeholder="Select are you Individual/Business"
                        />
                        <Input
                          name="FullName"
                          label="Full Name"
                          placeholder="Enter your Full Name"
                          required
                        />

                        <SelectReact
                          name="Country"
                          title="Country*"
                          options={countryData}
                          placeholder="Select your Country"
                          required
                        />

                        <SelectReact
                          name="City"
                          title="City*"
                          options={cityData}
                          placeholder="Select your City"
                          required
                        />

                        <div className="col-span-1">
                          <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                            Phone Number*
                          </label>
                          <div style={{ display: 'flex' }}>
                            {/* <Input
                              name=""
                              label=""
                              placeholder={`+${callingCode}`}
                              labelClassName="!w-[30%] mr-2"
                              inputClassname="px-3 md:px-4 pointer-none"
                            /> */}
                            <div className="w-[25%] h-[57.6px] md:h-[73.6px] mr-2 p-4 md:p-6 font-normal text-base md:text-input-large placeholder:text-rb-black/40 text-rb-black border border-rb-border-grey rounded-lg px-3 md:px-4 pointer-none">{`${
                              callingCode && '+' + callingCode
                            }`}</div>
                            <PhoneInput
                              name="Phone"
                              label=""
                              placeholder="Enter your Phone Number"
                              inputClassname="px-3 md:px-4 font-normal"
                            />
                          </div>
                        </div>
                      </>
                    )}
                    {headingCount === 1 && (
                      <>
                        <SelectReact
                          name="PrimaryServices"
                          title="Primary Services*"
                          options={primaryServiceList}
                          placeholder="Enter Services"
                          required
                          outerClassName="w-full"
                        />

                        <SelectTagsInput
                          name="Otherservices"
                          options={primaryServiceList}
                        />

                        <div className="col-span-2">
                          <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
                            Budget*
                          </label>
                          <div style={{ display: 'flex' }}>
                            <SelectReact
                              name="Currency"
                              options={budgetList}
                              placeholder="Currency"
                              required
                              addCustomStyle
                              displayLabel="hidden"
                            />
                            <PhoneInput
                              name="MinimumFee"
                              label=""
                              placeholder="Minimum fee"
                              labelClassName="mx-1 md:mx-4"
                              inputClassname="p-[26px] md:p-6"
                            />
                            <SelectReact
                              name="Duration"
                              options={durationList}
                              placeholder="Rate Type"
                              required
                              addCustomStyle
                              displayLabel="hidden"
                            />
                          </div>
                        </div>
                        <TagsInput
                          name="Worklink"
                          outerClassName="col-span-2 md:mt-[70px]"
                          // selectedTags={selectedTags}
                          label={
                            <>
                              Work Links{' '}
                              <span className="text-[12px] md:text-[16px] tracking-[-0.64px] text-rb-black/[0.72]">
                                [Add multiple links with commas or Enter]
                              </span>
                            </>
                          }
                          placeholder="Enter work link"
                        />
                        <Button
                          onClick={modalChange}
                          type="button"
                          suffix={<LineArrow hover />}
                          className={`w-full md:w-auto mt-6 mb-6 md:mb-9 md:mt-9 ${
                            PrimaryServices &&
                            // Otherservices &&
                            Currency &&
                            MinimumFee &&
                            // Worklink &&
                            Duration
                              ? 'pointer-events-auto opacity-100'
                              : 'pointer-events-none opacity-[0.32]'
                          }`}
                        >
                          CONTINUE
                        </Button>
                      </>
                    )}
                    {headingCount >= 2 && (
                      <>
                        <Input
                          name="Email"
                          label="Email"
                          placeholder="Email id will be username"
                          required
                          labelClassName="col-span-2"
                        />
                        <Input
                          name="Password"
                          label="Password"
                          placeholder="Enter the password"
                          required
                          labelClassName="col-span-2"
                        />
                        <Checkbox
                          name="TNC"
                          label={
                            <>
                              I accept the
                              <a
                                href="https://collab.redbangle.com/terms-of-service"
                                className="text-rb-red"
                                target="_blank"
                              >
                                &nbsp;Terms & Conditions
                              </a>
                            </>
                          }
                          labelClassName="mt-4"
                          required
                        />
                        <Button
                          onClick={modalChange}
                          type="submit"
                          suffix={<LineArrow hover />}
                          className={`w-full md:w-[297px] mt-6 mb-6 md:mb-9 md:mt-9 col-span-2 ${
                            Email && Password && TNC
                              ? 'pointer-events-auto opacity-100'
                              : 'pointer-events-none opacity-[0.32]'
                          }`}
                        >
                          SIGN UP
                        </Button>
                      </>
                    )}
                  </div>
                  {headingCount === 0 && (
                    <>
                      <Button
                        onClick={modalChange}
                        type="button"
                        suffix={<LineArrow hover />}
                        className={`w-full md:w-auto mt-6 mb-6 md:mb-9 md:mt-9 ${
                          Country && City && Identify && Phone && FullName
                            ? 'pointer-events-auto opacity-100'
                            : 'pointer-events-none opacity-[0.32]'
                        }`}
                      >
                        CONTINUE
                      </Button>
                    </>
                  )}
                  {headingCount === 2 && (
                    <>
                      <div className="text-[16px] leading-[1.8] tracking-[-0.64px] font-semibold text-rb-black/40 mt-3 mb-6 md:mb-9">
                        Already on collab?{' '}
                        <a
                          href="https://collab.redbangle.com/login"
                          className="text-rb-red"
                          target="_blank"
                        >
                          Login
                        </a>
                      </div>
                    </>
                  )}
                </form>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
