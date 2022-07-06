import React, { SyntheticEvent, useCallback, useEffect, useRef, useState } from "react";

import Textbox from "../textbox";

const defaultDomains = ['yahoo.com', 'hotmail.com', 'gmail.com', 'me.com', 'aol.com', 'mac.com', 'live.com', 'googlemail.com', 'msn.com', 'facebook.com', 'verizon.net', 'outlook.com', 'icloud.com', 'table.co', 'fb.com','bigpond.com']


export interface EmailProps {
  domains?: string[];
  validation?: boolean;
}

export default function Email(props: EmailProps) {
  const { domains, validation = true } = props
  const prevEmail = useRef('')
  const prevVal = useRef('')
  const container = useRef()
  const input = useRef()
  const email = useRef('')
  const isValid = useRef(null)
  const [, forceUpdate] = useState(false)
  const theDomains = [...(domains || []), ...defaultDomains]


  const findInput = useCallback(element => {
    if (element && element.tagName === 'INPUT') return element
    if (element && element.children && element.children.length > 0) {
      for (const child of element.children) {
        const potentialInput = findInput(child)
        if (potentialInput) return potentialInput
      }
    }
  }, [])

  useEffect(() => {
    input.current = findInput(container.current)
    if (!input.current) console.error('There is no input in the component you\'re trying to attach useEmailAutocomplete to')
  }, [findInput])

  const suggest = useCallback((email:string) => {
    
    const [/* emailName */, partialDomain] = email.split('@')
    if (!partialDomain || email.length <= prevVal.current.length) return ''
    const domain = theDomains.find(d => d.indexOf(partialDomain) === 0) || ''
    return domain.replace(partialDomain, '')
  }, [theDomains])

  const validate = useCallback((email:string) => {
    const inputIsFocused = input.current === document.activeElement
    // eslint-disable-next-line
    const isValidEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    if (!email) {
      return null
    } else if (isValidEmail.test(email)) {
      return 'yes'
    } else if (inputIsFocused && prevEmail.current.length !== email.length) {
      return 'maybe'
    } else {
      return 'no'
    }
  }, [])

  const onChange = useCallback((e: SyntheticEvent) => {
    // works for strings, and objects, not for numbers
    if (!e.hasOwnProperty('target')) {
      return console.error('NOT IMPLEMENTED YET')
    }
    const { value } = e.target
    const suggestion = suggest(value)
    const theEmail = value + suggestion
    const isValidEmail = validate(theEmail)
    email.current = theEmail
    isValid.current = isValidEmail
    forceUpdate(x => !x)
    if (suggestion) highlight(suggestion)
    prevEmail.current = theEmail
    prevVal.current = value
  }, [suggest, validate])

  function highlight(suggestion:string) {
    setTimeout(() => {
      const email = prevVal.current + suggestion
      const startPos = email.lastIndexOf(suggestion)
      const endPos = startPos + suggestion.length
      input.current.setSelectionRange(startPos, endPos)
    }, 0)
  }

  const doValidationCheck = useCallback(e => {
    if (validation) {
      isValid.current = validate(email)
      forceUpdate(x => !x)
    }
  }, [email, validate, validation])

  const htmlAttributes = {
    value: email.current,
    onChange,
    inputRef: container,
    onBlur: doValidationCheck,
    onFocus: doValidationCheck,
  }


  return (
    <>
      <Textbox {...htmlAttributes} />
    </>
  );
}
