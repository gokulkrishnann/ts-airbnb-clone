import React, {useState} from 'react';
import './Search.css'
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import {DateRangePicker} from 'react-date-range';
import {Button} from '@material-ui/core';
import PeopleIcon from '@material-ui/icons/People';
import {useHistory} from 'react-router-dom';

type SearchProps = {
    ranges?: any;
}
const Search: React.FC = () =>{
    const history = useHistory();
    const [startDate,setStartDate] = useState(new Date());
    const [endDate,setEndDate] = useState(new Date());

    const dateSelectionRange= {
        startDate: startDate,
        endDate: endDate,
        key:'selection'
    }

    const dateSelectionHandler = (ranges:any) =>{
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return(
        <div className="search">
            <DateRangePicker ranges={[dateSelectionRange]} onChange= {dateSelectionHandler}/>
            <div>
            <h2>
                Number of guests <PeopleIcon/>
            </h2>
            </div>
            <input min={0} defaultValue={3} type="number"/>
            <Button onClick= {()=>history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search;