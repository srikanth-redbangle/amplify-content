import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useController, useFormContext } from 'react-hook-form'
import { ErrorLabel } from './ErrorLabel'

const TagsInput = ({
  name,
  placeholder,
  limit,
  // selectedTags,
  outerClassName,
  selectInput,
  ...props
}) => {
  const { control, setValue, trigger } = useFormContext()
  const { fieldState, field } = useController({ name, control })
  // const [tags, setTags] = React.useState([])

  const tags = field.value

  const setTags = (e) => {
    setValue(field.name, Array.from(e ?? []))
    trigger(name)
  }

  // const addTags = (event) => {
  //   if (event.key === 'Enter' && event.target.value !== '') {
  //     setTags([...tags, event.target.value])

  //     event.target.value = ''
  //   }
  // }
  const addTags = (event) => {
    if (
      (event.key === 'Enter' ||
        event.key === 'Tab' ||
        event.key === ',' ||
        event.type === 'blur') &&
      event.target.value !== ''
    ) {
      event.preventDefault() // Prevents the default behavior (e.g., new line or focus change for Tab)

      let newTag = event.target.value.replace(',', '').trim()

      if (newTag) {
        setTags([...tags, newTag])
      }

      event.target.value = ''
    }
  }

  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)])
  }

  // console.log(tags)
  return (
    <div className={outerClassName}>
      <label className="form-label font-medium font-everett text-2xl text-label md:text-label-large inline-block mb-2 md:mb-4">
        {props.label}
      </label>
      <div className="tags-input">
        <ul className="tags">
          {tags?.map((tag, index) => (
            <li className="tag" key={index}>
              <span className="tag-title">{tag}</span>
              <span
                className="tag-close-icon"
                onClick={() => removeTags(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M14 6L6 14"
                    stroke="#000"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L14 14"
                    stroke="#000"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </li>
          ))}
        </ul>
        {tags?.length <= limit - 1 && (
          <input
            onKeyDown={(event) => addTags(event)}
            type="text"
            placeholder={placeholder}
            {...props}
            onBlur={(e) => {
              trigger(name), addTags(e)
            }}
          />
        )}
      </div>
      {fieldState?.error && (
        <>
          <ErrorLabel className={''}>
            {fieldState?.error ? fieldState?.error?.message ?? 'Error' : ''}
          </ErrorLabel>
        </>
      )}
    </div>
  )
}

TagsInput.defaultProps = {
  placeholder: '',
  outerClassName: 'mb-0',
  label: '',
  limit: 10,
  selectInput: false,
  // isReq: true,
  // onChangeFunc: () => {},
  // onValidateFunc: () => {},
}

TagsInput.propTypes = {
  placeholder: PropTypes.string,
  outerClassName: PropTypes.string,
  label: PropTypes.any,
  limit: PropTypes.number,
  selectInput: PropTypes.bool,
  // isReq: PropTypes.bool,
  errorMsg: PropTypes.any,
  // onValidateFunc: PropTypes.func,
}

export default memo(TagsInput)
