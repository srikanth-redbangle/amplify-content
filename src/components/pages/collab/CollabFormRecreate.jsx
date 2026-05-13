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
    .min(15, '')
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
  Otherservices: object()
    .shape({ label: string(), value: string() })
    .nullable()
    .required('Secondary service is required'),
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
  Otherservices: null,
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

const primaryCategoryList = [
  { label: 'Strategy & Marketing', value: 'marketing_strategy' },
  { label: 'Gen AI', value: 'gen_ai' },
  { label: 'Interactive & Tech', value: 'interactive_tech' },
  { label: 'Digital & Media', value: 'digital_media' },
  { label: 'Creative & Copy', value: 'creative_copy' },
  { label: 'Design', value: 'design' },
  { label: 'Film, Video & Podcast', value: 'film_video_podcast' },
]

const primaryServiceList = [
  {
    label: 'B2B Marketer',
    value: '9081d86e-c0ce-4cdf-a512-1d53be51e831',
    primary_category: 'marketing_strategy',
  },
  {
    label: 'B2C Marketer',
    value: '4c647e8b-70c9-48ab-8ef7-d153bc553f76',
    primary_category: 'marketing_strategy',
  },
  {
    label: 'Brand Strategist',
    value: '68ed94e7-bf47-46a2-905d-b0107cdf3f03',
    primary_category: 'marketing_strategy',
  },
  {
    label: 'Content Strategy',
    value: '58b04c30-353e-487b-b862-b5683c9a6c2e',
    primary_category: 'marketing_strategy',
  },
  {
    label: 'Social Media Strategy',
    value: '06214bee-08a1-4087-bb5c-9d1f44c00cfb',
    primary_category: 'marketing_strategy',
  },
  {
    label: 'Gen-AI Creative Director',
    value: 'e6ce0efa-6d07-4c4e-bcff-fea69b94dbdf',
    primary_category: 'gen_ai',
  },
  {
    label: 'Prompt Designer / Prompt Engineer',
    value: '2c8aed96-5f59-4e35-9af2-a1b8603c7ac5',
    primary_category: 'gen_ai',
  },
  {
    label: 'Gen-AI Video Artist',
    value: 'c2805dcc-fad6-4970-a3ff-d47f99c0936b',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Model Operator (Text-to-Video / Image-to-Video)',
    value: '0fd15298-8c33-4970-a1dd-b69504240109',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Workflow Designer',
    value: 'ac1cc705-cdf3-4aa1-92ae-2ab96364ea68',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Tool Specialist',
    value: 'a47fad04-7f80-43db-8b9c-a7bbc44b3639',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Video Editor',
    value: '614fa51f-1433-403e-af64-ed97e0503b37',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Compositor',
    value: '867d2bb7-a2b5-4f61-ab6e-094035c61f0f',
    primary_category: 'gen_ai',
  },
  {
    label: 'Custom Model Trainer',
    value: '009b8c4a-5427-4c09-bd98-fbd886b0ce0a',
    primary_category: 'gen_ai',
  },
  {
    label: 'Automation Engineer (batch renders, pipelines)',
    value: 'adb39df4-11dc-4995-979a-bb0396e46d0d',
    primary_category: 'gen_ai',
  },
  {
    label: 'Platform Optimisation Specialist (social & digital formats)',
    value: '5e44d2d4-fa87-444d-bb3a-3422c38018bb',
    primary_category: 'gen_ai',
  },
  {
    label: 'Styleframe Designer',
    value: 'a13dbcc9-e13e-4a9e-990b-56f3c76afc15',
    primary_category: 'gen_ai',
  },
  {
    label: 'AI Art Director',
    value: 'c3c757d7-f5df-4a9c-b659-639a7d76b9f4',
    primary_category: 'gen_ai',
  },
  {
    label: 'Look Development Artist',
    value: '6416ac75-dc92-4378-baad-4189145ca66c',
    primary_category: 'gen_ai',
  },
  {
    label: 'UI Designer',
    value: '728b4963-535a-40cf-933f-6a98b2da32c3',
    primary_category: 'interactive_tech',
  },
  {
    label: 'Website Design',
    value: '17262a11-5095-4277-895e-13f69807d051',
    primary_category: 'interactive_tech',
  },
  {
    label: 'Website Development',
    value: '041dc3b4-0a4f-4a55-a9cb-d1c961b901cb',
    primary_category: 'interactive_tech',
  },
  {
    label: 'Front end developer',
    value: '2c0faf0a-0ef3-4803-a909-8a42cefc5218',
    primary_category: 'interactive_tech',
  },
  {
    label: 'Back end developer',
    value: '043c4bb5-bf5c-43a8-9e96-5126a888f349',
    primary_category: 'interactive_tech',
  },
  {
    label: 'Unreal Specialist',
    value: 'b7f018a2-b6f8-445f-9e83-982dab70c6bc',
    primary_category: 'interactive_tech',
  },
  {
    label: 'SEO',
    value: '7dd68dfb-fbbc-4f32-a3ca-98d3f969992a',
    primary_category: 'digital_media',
  },
  {
    label: 'Performance Marketing',
    value: '7320ff7d-d815-4f66-8b5f-edd02a0065b2',
    primary_category: 'digital_media',
  },
  {
    label: 'Media Planning',
    value: '0a6b0650-ddf3-47be-983e-b9b1a22cc656',
    primary_category: 'digital_media',
  },
  {
    label: 'Influencer Marketing',
    value: 'acf59798-c9c7-42f1-803e-c8ff13f9b620',
    primary_category: 'digital_media',
  },
  {
    label: 'Creative Director',
    value: '1060db4c-f5ab-4570-a1e1-7068ee72a1b8',
    primary_category: 'creative_copy',
  },
  {
    label: 'Copy Writer',
    value: 'cce068b3-b717-43f1-916a-ccb5035cce14',
    primary_category: 'creative_copy',
  },
  {
    label: 'Content Writer',
    value: '8bdba8b2-fe09-46e2-94f3-f343629cf246',
    primary_category: 'creative_copy',
  },
  {
    label: 'Illustrator',
    value: 'dec2c456-c092-4815-ae8c-5d0028d4ebbd',
    primary_category: 'design',
  },
  {
    label: 'Logo Design',
    value: '984f9e8a-79aa-4d62-9fe5-5beedc8cc18f',
    primary_category: 'design',
  },
  {
    label: 'Brand Identity',
    value: 'ccfa7cfa-ea6c-4844-9b68-472ced2d6cba',
    primary_category: 'design',
  },
  {
    label: 'Environmental graphics',
    value: '9b105af4-2cc3-46ea-b655-c6107616b29a',
    primary_category: 'design',
  },
  {
    label: 'Brand Mascots & Avatars',
    value: 'abd48d4a-480c-4ee2-9154-869c568749cb',
    primary_category: 'design',
  },
  {
    label: 'Presentation Design',
    value: 'cc7a896e-932a-44f8-93dc-f2f442d5c332',
    primary_category: 'design',
  },
  {
    label: '2D Character Design',
    value: '5f4c36d6-9633-4d3b-bead-2b3be4d83741',
    primary_category: 'design',
  },
  {
    label: 'Storyboard Artist',
    value: 'b68ca24a-2204-4152-991b-06ff795952fe',
    primary_category: 'design',
  },
  {
    label: 'Director',
    value: 'e7f18df3-3a9e-486f-ac8e-a8bf1d63dd51',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Cinematographer',
    value: '02fbf950-30bc-44fc-adb2-696dde388cf3',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Hair & Makeup',
    value: '3554dec1-3d05-44fb-80e0-f7853a634267',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Sound Recordist',
    value: '694ff797-b8a2-4cf8-b731-7b8102fdd23c',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Producer',
    value: '3151008f-7631-4631-ac3f-c240dddaccb3',
    primary_category: 'film_video_podcast',
  },
  {
    label: '3D Character Design',
    value: '00e4452b-6fb7-4f2b-943d-67184c3061fd',
    primary_category: 'design',
  },
  {
    label: 'Concept Artist',
    value: '4f9d6f06-5991-4917-ba71-a116edaa277c',
    primary_category: 'design',
  },
  {
    label: 'Graphic Design',
    value: '08a031ae-073e-4f7a-8eeb-494d4ccafc5b',
    primary_category: 'design',
  },
  {
    label: '3D Design',
    value: 'dbb91ccc-351b-4aa1-b929-3e9bb5f66c63',
    primary_category: 'design',
  },
  {
    label: 'Claymation Artist',
    value: '2e92ff11-9cd7-443e-8abf-dcb7a44b4d52',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Creative Producer',
    value: '24b52d0f-3ffc-4b0a-b956-1cefda26966e',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Foley Artist',
    value: 'f8283296-7a8f-4a72-a8d1-b291d6a14a4b',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Music Director',
    value: 'a5e866ca-2f6e-4e19-a693-1d618bfa1171',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Art Director',
    value: 'b9bb799b-7690-4cac-8a3a-fe1d1d400f8d',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Stylist',
    value: 'a4835b90-8d7d-4489-90bd-70564b7ca138',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Live Mixer',
    value: 'fabaa457-5d9f-4ad8-bc40-9bdf3fdc277b',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Assistant Director',
    value: 'd3a1eca3-62fe-4345-a20d-a7c4cd33dade',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Camera Assistant',
    value: '7392a88e-4859-45ff-909a-180a8a0d3d87',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Light Technician ',
    value: '705573e0-1f9f-4ea9-8429-7ab068e8ca18',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Gaffer',
    value: '396b8a88-3cbe-4704-bfd7-a79c502cf09e',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Light Assistant',
    value: '2490b1ae-6270-4fec-8f91-28f59a1c6a56',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Grip',
    value: '7a7aa64c-606e-44aa-804d-c0203204565d',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Production Assistant',
    value: 'd5af0b6b-72f3-43c4-acd4-4e5a38614cd5',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Line Producer',
    value: '960a853b-ff27-4495-9fee-ea13421838c4',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Generator Team',
    value: 'a35c5ff6-3d69-49de-960c-2eefededf086',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Focus Puller',
    value: '885d0c0f-4cb2-4048-8791-9a5aeef8ca1d',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Drone Operator',
    value: 'fa6e1395-f13b-4706-b608-896433e06226',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Live editor',
    value: 'bbb6739f-4973-4ea8-acb0-62f78bb495b4',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Camera Operator',
    value: '5228d76f-eb17-4d54-ba49-4b0ac500ad41',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Art Assistant',
    value: '455c126c-1358-4108-af5a-346c185680fd',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Styling Assistant',
    value: '0d8c5bfb-85ab-450e-b02e-6d65f871ec06',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Choreographer',
    value: 'afbb8a6f-1ba6-4f83-802e-95fad59bcd1b',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Directors Assistant',
    value: 'f1fb82c7-14c8-49ba-9bc5-e956e073c173',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Production/Set designer',
    value: 'b86864cb-9fb1-4e6a-94c1-11e044d2b57b',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Production Manager',
    value: 'f6338610-b2e1-479b-a829-f420649ddd83',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Casting Director',
    value: 'e714c0c3-96c7-4fa2-95ac-5708bd0e03b0',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Key Grip',
    value: 'f65eac16-2e1e-4a3b-a8e1-f5bc555875c7',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Boom Operator',
    value: '9a75bdcb-093b-4780-8027-9ccbe86b4e2f',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Animator - 2D',
    value: 'b9c2bb87-a700-4738-90ff-842ed9fb2624',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Animator - 3D',
    value: '86358ac8-0f22-4587-bf08-e657630f957a',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Assistant Cinematographer',
    value: '6ff270bf-a2b0-4b5e-8173-6c8031fa6b21',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Music Producer',
    value: '61658b8a-290f-4cfd-a317-50cdd5a318fe',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Photographer',
    value: '872f4ac2-8c3e-472d-af28-81f4c9eca3fb',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'SFX Artist',
    value: '35bf1216-b2ca-41f9-a257-953d1e153f5c',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Transcriptionist (Subtitling)',
    value: '3d9fa5b1-b36c-4ec4-aa64-9ee729685f02',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'VFX Artist',
    value: '5df6d4e3-532f-4592-9c4d-c5f42f87cb07',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Editor',
    value: '6c211723-8705-45ae-9295-6749998d0561',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Sound Designer',
    value: 'f8817019-93bb-4fd5-b764-306496928755',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Talent - On Screen',
    value: '41815ded-aa0e-4627-9fdc-e4d5f8bbde54',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Talent - Voiceover',
    value: 'f0c09791-c9f1-4e84-b2be-3d283806c51b',
    primary_category: 'film_video_podcast',
  },
  {
    label: '360 Videography',
    value: '6745a962-c98d-400e-b322-8426f02feb6d',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Colorist',
    value: 'de6b8b59-1448-4799-8db1-028caa0455fa',
    primary_category: 'film_video_podcast',
  },
  {
    label: 'Location/Scout Manager',
    value: 'b9fda61f-8a24-4792-a937-6be28d609f86',
    primary_category: 'film_video_podcast',
  },
]

export const CollabFormRecreate = ({ modalTrigger }) => {
  const [message, setMessage] = useState('')
  const [headingCount, setHeadingCount] = useState(0)
  const [countryData, setCountryData] = useState(null)
  const [cityData, setCityData] = useState([])
  const [isContinueDisabled, setIsContinueDisabled] = useState(true)

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

  // useEffect(() => {
  //   const isPhoneValid = Phone && Phone.length > 7;
  //   setIsContinueDisabled(!isPhoneValid);
  // }, [Phone]);
  useEffect(() => {
    if (Country?.value == 'India' && callingCode == 91 && Phone.length === 10) {
      setIsContinueDisabled(false)
    } else if (Phone.length > 7 && Country?.value != 'India') {
      setIsContinueDisabled(false)
    } else {
      setIsContinueDisabled(true)
    }
  }, [Phone, Country])

  useEffect(() => {
    methods.setValue('City', null)
    // toast.success('City is not available for this country')
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
        // setCityData([])
        // console.log(cityData)

        // CityList api call
        // const response2 = await fetch(
        //   `https://api.redbangle.com/redbangle/user/api/getCityList/India`
        // )
        // const jsonData2 = await response2.json()

        // jsonData2?.data.forEach((item) =>
        //   citylist.push({ label: item, value: item })
        // )
        // setCityData(citylist)
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()
  }, [Country])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage('')
    }, 5000)
    return () => clearTimeout(timer)
  }, [message])

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

  useEffect(() => {
    methods.setValue('Otherservices', null)
  }, [PrimaryServices?.value])

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
        job_type_id: Otherservices?.value,
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

  // const onSubmit = async (e) => {
  //   // e.preventDefault();

  //   const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4';
  //   const verifyURL = 'https://a9road3i6d.execute-api.ap-south-1.amazonaws.com/dev/verify';

  //   try {
  //     const token = await grecaptcha.execute(siteKey, { action: 'submit' });

  //     // Verify CAPTCHA token
  //     const response = await fetch(verifyURL, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({ 'g-recaptcha-response': token }),
  //     });

  //     console.log('response', response)
  //     // const verificationResult = await response.json();

  //     if (response.success) {
  //       document.querySelector('.error-popup').classList.add('active');

  //       fetch('https://api.redbangle.com/redbangle/user/api/clbrtrSignup', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           appid: 'COLLABORATOR',
  //         },
  //         body: JSON.stringify(payload),
  //       })
  //         .then((r) => r.json())
  //         .then((res) => {
  //           if (res.success) {
  //             router.push('/thankyou');
  //           }
  //           if (!res.success) {
  //             if (res.message === 'Email id already existing in our records.') {
  //               setMessage('Email Id already registered. Please sign in to continue.');
  //             } else {
  //               setMessage('Sign up failed. Please try again.');
  //             }
  //           }
  //           // console.log(payload);
  //         })
  //         .catch((err) => {
  //           console.log(err);
  //           setMessage('Sign up failed. Please try again.');
  //         });
  //     } else {
  //       console.error('CAPTCHA verification failed.');
  //     }
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const onSubmit = async (e) => {
    e.preventDefault()

    const siteKey = '6LfsAwApAAAAAJFgAQaO7_xrrt6Y61thOQqmOuD4'
    const verifyURL =
      'https://4u1pwvf8k3.execute-api.ap-south-1.amazonaws.com/dev'

    try {
      const token = await grecaptcha.execute(siteKey, { action: 'submit' })

      // Verify CAPTCHA token
      const response = await fetch(verifyURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token }),
      })

      // console.log('response', response)
      // const verificationResult = await response.json();

      // if (response.success) {
      //   document.querySelector('.error-popup').classList.add('active');

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
          // toast.success(res.message)
          if (res.success) {
            router.push('/thankyou')
          }
          if (!res.success) {
            if (res.message === 'Email id already existing in our records.') {
              setMessage(
                'Email Id already registered. Please sign in to continue.'
              )
            } else if (res.message) {
              setMessage(res.message)
            } else {
              setMessage('Sign up failed. Please try again.')
            }
          }
        })
        .catch((err) => {
          console.log(err)
          setMessage('Sign up failed. Please try again.')
        })

      //   }
      //  else {
      //   console.error('CAPTCHA verification failed.');
      // }
    } catch (error) {
      console.error('Error:', error)
    }
  }

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
          <div
            className={`fixed -top-20 error-popup ${message ? 'active' : ''}`}
          >
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
                              countryCode={callingCode}
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
                          title="Primary Service*"
                          options={primaryCategoryList}
                          placeholder="Select Service"
                          required
                          outerClassName="w-full"
                        />

                        {/* <SelectTagsInput
                          name="Secondary Service"
                          options={primaryServiceList}
                        /> */}

                        <SelectReact
                          name="Otherservices"
                          title="Secondary Service*"
                          options={primaryServiceList
                            .filter(
                              (service) =>
                                service.primary_category ===
                                PrimaryServices?.value
                            )
                            .sort((a, b) => a.label.localeCompare(b.label))}
                          placeholder="Select Service"
                          required
                          outerClassName="w-full"
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
                              I accept the&nbsp;
                              <a
                                href="https://collab.redbangle.com/terms-of-service"
                                className="text-black underline hover:text-rb-link-green"
                                target="_blank"
                              >
                                Terms & Conditions
                              </a>
                            </>
                          }
                          labelClassName="mt-4"
                          required
                        />
                        <Button
                          onClick={onSubmit}
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
                          Country &&
                          City &&
                          Identify &&
                          Phone &&
                          FullName &&
                          !isContinueDisabled
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
                      <div className="text-[16px] leading-[1.8] tracking-[-0.64px] font-semibold text-rb-black mt-3 mb-6 md:mb-9">
                        Already on collab?{' '}
                        <a
                          href="https://collab.redbangle.com/login"
                          className="text-black underline hover:text-rb-link-green"
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
