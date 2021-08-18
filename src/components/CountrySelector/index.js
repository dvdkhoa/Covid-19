import { FormControl, FormHelperText, InputLabel, NativeSelect } from '@material-ui/core'
import React from 'react'

export default function CountrySelector({ value, handlerOnchange, countries }) {
    return (
        <FormControl>
            <InputLabel htmlFor="country-selector" shrink>Quốc gia</InputLabel>
            <NativeSelect value={value} onChange={handlerOnchange} inputProps= {{ name: 'country' , id: "country-selector"}}>
                {countries.map(country => {
                    return <option value={country.ISO2}>{country.Country}</option>
                })}
            </NativeSelect>
            <FormHelperText>Lựa chọn quốc gia</FormHelperText>
        </FormControl>
    )
}
