import {useState} from 'react'

const ReadDataFromInputsUseState = () => {
    const initialState = {
        name: '',
        city: ''
    }

    const [formData, setFormData] = useState(initialState)

    const handleNameChange = (e) => {
        setFormData({
            ...formData,
            name: e.target.value,
            
        })
    }
    const handleCityChange = (e) => {
        setFormData({
            ...formData,
            // city: e.target.value,
            //targetuje name inputa name='city' , tą drugą wartość
            [e.target.name]: e.target.value,
        })
    }
    const {name,city} = formData
    console.log(formData);
  return (
    <div>
        <h1>UseState Hook</h1>
        <div>
            <input onChange={handleNameChange} type="text" name="name" placeholder="Enter Name"></input>
            <select onChange={handleCityChange} name ="city">
                <option value = {""} id ="">
                    Select City
                </option>

                <option value = {"katowice"} id ="katowice">
                    Katowice
                </option>
                <option value = {"bielsko-biala"} id ="bielsko-biala">
                    Bielsko-Biala
                </option>
            </select>
            
        </div>
        <p>Name is : {name}</p>
        <p>City is : {city}</p>
    </div>
  )
}

export default ReadDataFromInputsUseState