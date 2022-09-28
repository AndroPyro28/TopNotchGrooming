import React, {useRef} from 'react'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';
import AppointmentLogic from '../../pages/customerPages/appointment/appointmentLogic';
import {FilterContainer} from "./components"
function FilterData({ dateSetter }) {
  const {setFilterDateFrom, setFilterDateTo} = dateSetter;
  const {dateTodayFormatter} = AppointmentLogic({})
  const Date1Ref = useRef();
  const Date2Ref = useRef();
  useLayoutEffect(() => {
    if(Date1Ref.current) {
      Date1Ref.current.max =`${dateTodayFormatter({})}T00:00:00`
    }

    if(Date2Ref.current) {
      Date2Ref.current.max =`${dateTodayFormatter({})}T00:00:00`
    }
  }, [])
  return (
    <FilterContainer>
      from
        <input type="datetime-local" ref={Date1Ref} onChange={(e) => setFilterDateFrom(e.target.value)} />
        to
        <input type="datetime-local" ref={Date2Ref} onChange={(e) => setFilterDateTo(e.target.value)} />
    </FilterContainer>
  )
}

export default FilterData