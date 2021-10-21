import React from 'react'
import { NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
    FormControl, FormLabel } from "@chakra-ui/react"

function InputNumber({ label, value, isRequired, ...props }) {
    return (
        <FormControl isRequired={isRequired} mb={2}>
            <FormLabel my={0}>{label}</FormLabel>
            <NumberInput min={0} value={value} {...props} >
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    )
}

export default InputNumber
