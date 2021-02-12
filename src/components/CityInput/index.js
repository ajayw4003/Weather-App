
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const CityInput = ({city, setCity, fetchCityWeather}) => {
    const [error, setError] = useState("");
    const onInputChange = (event)=>{
        setCity(event.target.value);
    }
    
    const handleSubmit = ()=>{
        if(!city){
            setError("City field is empty");
        }else{
            setError("");
            //make api call
            fetchCityWeather();
        }
    }
    return (
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" 
                    value = {city}
                    placeholder="Enter City" 
                    onChange = {onInputChange}/>
                    <p className = "text-danger">{error}</p>
                </Form.Group>

                <Button variant="primary" onClick = {handleSubmit}>
                    Submit
                </Button>
            </Form>
    );
};

export default CityInput;