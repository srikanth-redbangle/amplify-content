export const fileRequiredValidation = (value) => {
  if (value && value.length > 0) {
    return true
  }
  return false
}
export const fileSizeValidation = (
  value,
  MAX_FILE_SIZE = 2097152 //2MB
) => {
  if (
    (value &&
      value?.reduce(
        (isValidSize, v) => isValidSize && v.size <= MAX_FILE_SIZE,
        true
      )) ||
    value.length == 0
  ) {
    return true
  }
  return false
}

export const liveUrlValidation = (value) => {
  if (value) {
    const urlregex = new RegExp(
      "^((((h|H)(t|T)|(f|F))(t|T)(p|P)((s|S)?)://[-.\\w]*)|(((w|W){3}\\.)[-.\\w]+)|((\\w+)([-\\w]*)(\\.([-\\w]+))+))(/?)([-\\w.?,:'/\\\\+=&;%$#@()!~]*)?$"
    ) // Same regex as website_field_url in security-regex.xml. But single backslash is replaced with two backslashes.
    return urlregex.test(value)
  }
  return false
}

export const phoneNumberValidation = (value) => {
  if (value) {
    // const phoneregex = /^[+]{0,1}[()0-9-. ]+$/
    const phoneregex = /^[+]{0,1}[()0-9-.]+([ ]*[()0-9-.]+)*[ ]*[+]{0,1}$/
    return phoneregex.test(value)
  }
  return false
}

export const companyEmailValidation = (value) => {
  if (value) {
    const domains = ['gmail', 'yahoo', 'outlook', 'hotmail', 'aol', 'rediffmail']
    let check = true
    domains.forEach((d) => {
      check = check && `${value}`.search(`${d}.`) == -1
    })

    // not valid if any 1 present
    return check
  }
  return false
}

export const allEmailValidation = (value) => {
  if (value) {
    // You can keep a list of prohibited domains if needed
    const prohibitedDomains = [
      'example.com',
      'test.com',
      'invalid.com',
      'spam.com',
      'suspicious.com',
      'evil-domain.com',
      'spammy-domain.net',
      'fake-domain.org',
      'temporary-domain.net',
      'disposable-email.com',
      'example.net',
      'test.org',
    ]

    if (
      value.includes('@') &&
      prohibitedDomains.every((domain) => !value.endsWith('@' + domain)) &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
    ) {
      return true // Valid email
    }
  }
  return false // Invalid email
}

export const getFirstLastName = (fullName) => {
  const splitText = `${fullName}`.split(' ')
  return {
    firstName: splitText.shift(),
    lastName: splitText.join(' '),
  }
}

export const passwordValidation = (value) => {
  if (value) {
    // const passwordRegex = /^(?=.*\d)[+()a-zA-Z0-9-.]{6,}$/ // Password length >= 6 and should have 1 numeric character
    const passwordRegex = /^(?=.*[a-z])(?=.*\d).{6,}$/ // Password length >= 6 and should have 1 numeric character
    return passwordRegex.test(value)
  }
  return false
}


export const isValidName = (name) => {
  // console.log(name,"name")
  if (typeof name !== "string") return false;
  // Basic checks
  const namePattern = /^[A-Za-z\s'-]+$/; // Allow alphabets, spaces, hyphens, and apostrophes
  const parts = name.trim().split(/\s+/); // Split into parts by spaces
  if (!namePattern.test(name)) {
    // console.log('Failed general pattern check.');
    return false;
  }
  // Check each part for length and case pattern
  for (let part of parts) {
    if (part.length < 2 || part.length > 30) {
      // console.log(`Failed length check for "${part}".`);
      return false;
    }
    const titleCasePattern = /^[A-Za-z][a-z'-]*$/; // First letter uppercase, rest lowercase
    if (!titleCasePattern.test(part)) {
      // console.log(`Failed title case check for "${part}".`);
      return false;
    }

  }

  // Passed all checks
  return true;
}

export const companyNameValidation = (name) => {
  if (typeof name !== "string") return false; // Ensure it's a string

  name = name.trim(); // Remove extra spaces from the start and end
  if (!name) return false; // Reject empty input

  const regex = /^[a-zA-Z0-9!(),.'\-\/&]+(?: [a-zA-Z0-9!(),.'\-\/&]+)*$/;
  return regex.test(name); // Returns true if valid, false if not
};




export const sanitizeformData = (emailData) => {
  // console.log(emailData, "email")
  const errors = {};
  // Validate first name
  if (!isValidName(emailData.first_name)) {
    errors.first_name = "Invalid first name. Ensure it is properly formatted.";
  }
  // Validate last name
  if (!isValidName(emailData.last_name)) {
    errors.last_name = "Invalid last name. Ensure it is properly formatted.";
  }
  if (!companyEmailValidation(emailData.work_email)) {
    errors.work_email = "Invalid email format.";
  }
  if (!phoneNumberValidation(emailData.phone_number)) {
    errors.phone_number = "Invalid phone number";
  }
  // Validate company name
  if (!companyNameValidation(emailData.company_name) || emailData.company_name.trim().length < 2) {
    errors.company_name = "Company name must be at least 2 characters long.";
  }
  // Validate designation
  if (!isValidString(emailData.designation.trim())) {
    errors.designation = "Designation must be at least 2 characters long.";
  }

  if (!validateDescription(emailData?.description)) {
    errors.description = "Description must be less than 500 characters.";
  }

  // Return validation result
  return Object.keys(errors).length === 0 ? { isValid: true } : { isValid: false, errors };
};


export const validateDescription = (description) => {
  return !/[{}]/.test(description) &&
    !/<script\b[^>]*>(.*?)<\/script>/gi.test(description) &&
    !/<iframe\b[^>]*>(.*?)<\/iframe>/gi.test(description);
}


export const isValidString = (name) => {
  if (typeof name !== "string") return false; // Ensure it's a string

  name = name.trim(); // Remove extra spaces from the start and end
  if (!name) return false; // Reject empty input

  const regex = /^[a-zA-Z0-9\/\-&.,]+(?: [a-zA-Z0-9\/\-&.,]+)*$/; // Allow numbers & specific special characters  with optional spaces
  return regex.test(name); // Returns true if valid, false if not
};