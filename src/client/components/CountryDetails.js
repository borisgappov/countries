import React from 'react'
import styled from 'styled-components'

export const CountryDetails = props => {
  return (
    <dl>
      <PropName>Name</PropName>
      <PropValue>{props.country.name}</PropValue>
      <PropName>Native Name</PropName>
      <PropValue>{props.country.nativeName}</PropValue>
      <PropName>Capital</PropName>
      <PropValue>{props.country.capital}</PropValue>
      <PropName>Region</PropName>
      <PropValue>{props.country.region}</PropValue>
      <PropName>Sub region</PropName>
      <PropValue>{props.country.subregion}</PropValue>
      <PropName>Population</PropName>
      <PropValue>{props.country.population}</PropValue>
      <PropName>Currencies</PropName>
      <PropValue>
        {props.country.currencies &&
          props.country.currencies.map(x => (
            <div key={x.code}>
              <Currency>
                {x.code}, {x.symbol}
              </Currency>{' '}
              - {x.name}
            </div>
          ))}
      </PropValue>
      <PropName>Alpha 3 code</PropName>
      <PropValue>{props.country.alpha3Code}</PropValue>
      <PropName>Flag</PropName>
      <PropValue>
        <Flag src={props.country.flag} />
      </PropValue>
    </dl>
  )
}

const PropName = styled.dt`
  float: left;
  clear: left;
  width: 100px;
  text-align: right;
  font-weight: bold;
  font-size: 0.8rem;
  color: rgb(0, 102, 150);
  ::after {
    content: ':';
  }
`
const PropValue = styled.dd`
  margin-left: 110px;
  padding: 0 0 0.5rem 0;
`

const Flag = styled.img`
  width: 200px;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
`

const Currency = styled.span`
  color: green;
  font-weight: normal;
  width: 50px;
`
