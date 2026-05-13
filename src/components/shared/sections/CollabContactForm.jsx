import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '@/components/form'
import { Button } from '@/components/ui'
import { LineArrow } from '@/components/icons'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  companyEmailValidation,
  // liveUrlValidation,
  phoneNumberValidation, isValidName, companyNameValidation, sanitizeformData, validateDescription, isValidString
} from '@/components/form/utils'


import { useRouter } from 'next/router'
import { PhoneInput } from '@/components/form/PhoneInput'
import { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser';

const schema = object({
  First_Name: string().required('First name is required').test('name', 'First Name is invalid', isValidName),
  Last_Name: string().required('Last name is required').test('name', 'Last Name is invalid', isValidName),
  Email: string()
    .email('Email is invalid')
    .required('Email is required'),
  Phone: string()
    .required('Phone number is required')
    .max(10, 'Phone number must be in 10 characters')
    .test('phonenumber', 'Phone number is invalid', phoneNumberValidation), //PhoneNumber
  // Company: string().required('Company name is required').test('name', 'Company is invalid', companyNameValidation), //company
  // Website: string()
  //   .test('website', 'Website url not valid', liveUrlValidation)
  //   .required('Website is required'),
  // Designation: string().required('Designation is required').test('name', 'Designation is invalid', isValidString), //designation
  Description: string().test('name', 'Company is invalid', validateDescription),
})
const defaultValues = {
  First_Name: '',
  Last_Name: '',
  Email: '',
  Phone: '',
  // Company: '',
  // Website: '',
  // Designation: '',
  Description: '',

}


export const CollabContactForm = () => {
  const router = useRouter()

  const methods = useForm({
    defaultValues,
    mode: 'onBlur',
    resolver: yupResolver(schema),
  })


  const onSubmit = async (e) => {

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
            Expertise: formData?.Expertise,
            description: formData?.Description,
          }
          // const result = sanitizeformData(emailData)
          // if (score >= 0.5) {

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


          // }


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
        onSubmit={methods.handleSubmit(onSubmit)}
      >

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
            <Input borderedInput name="Email" placeholder="Email" required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"  
            />

            <PhoneInput
              borderedInput
              name="Phone"
              placeholder="Mobile"
              required
              inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"  
            />
          </div>

          <Input borderedInput name="Description" placeholder="Message"
            inputClassname="text-rb-white placeholder:text-rb-white/100 border-b-rb-white/100"  
          />
        </div>
        <Button
          type="submit"
          className="w-full mt-8 md:mt-10 !bg-rb-red !hover:bg-rb-milano-red !text-rb-black"
          suffix={<LineArrow hover />}
        >
          Contact us
        </Button>
      </form>
    </FormProvider>
  )
}
