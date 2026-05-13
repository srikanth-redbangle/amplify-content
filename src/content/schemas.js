import { object, string } from 'yup'

export const subscriberSchema = object({
  FIRSTNAME: string().required('First name is required'),
  LASTNAME: string().required('Last name is required'),
  CONTACT_EMAIL: string()
    .email('Email is invalid')
    .required('Email is required'),
  CONTACT_CF1: string().required('Industry is required'),
  CONTACT_CF3: string().required('Department is required'),
})
export const subscriberDefaultValues = {
  FIRSTNAME: '',
  LASTNAME: '',
  CONTACT_EMAIL: '',
  CONTACT_CF1: '',
  CONTACT_CF3: '',
}
