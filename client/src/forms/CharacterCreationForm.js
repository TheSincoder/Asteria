import React from 'react'
import * as Yup from "yup";
import { useFormik } from 'formik';
import Button from "../components/Button";
// import {AppContext} from '../context/AppContext';
// import ReactDOM from 'react-dom';
import Typography from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';






const FormSchema = Yup.object({
    "name":Yup.string().required("Required"),
    "race":Yup.string().required("Required"),
    "char_class": Yup.string().required("Required"),
    "strength": Yup.number().integer().required("Required"),
    "dexterity": Yup.number().integer().required("Required"),
    "constitution": Yup.number().integer().required("Required"),
    "intelligence": Yup.number().integer().required("Required"),
    "wisdom": Yup.number().integer().required("Required"),
    "charisma": Yup.number().integer().required("Required")
})

//Defining the Images of each race
const r1 = <img src={require("../static/images/human_male.jpg")} width={69} alt="Human Male"/>
const r2 =  <img src={require("../static/images/human_female.jpg")} width={69} alt="Human Female"/>
const r3 = <img src={require("../static/images/elf_male.jpg")} width={69} alt="Elf Male"/>
const r4 = <img src={require("../static/images/elf_female.jpg")} width={69} alt="Elf Female"/>
const r5 = <img src={require("../static/images/dwarf_male.jpg")} width={69} alt="Dwarf Male"/>
const r6 = <img src={require("../static/images/dwarf_female.jpg")} width={69} alt="Dwarf Female"/>
const r7 = <img src={require("../static/images/orc_male.jpg")} width={69} alt="Orc Male"/>
const r8 = <img src={require("../static/images/orc_female.jpg")} width={69} alt="Orc Female"/>
const r9 = <img src={require("../static/images/rusyon_male.jpg")} width={69} alt="Rusyon Male"/>
const r10 = <img src={require("../static/images/rusyon_female.jpg")} width={69} alt="Rusyon Female"/>
const r11 = <img src={require("../static/images/ervakt.jpg")} width={69} alt="Ervakt"/>

//Defining the Images of each class
const c1 = <img src={require("../static/images/cleric.jpg")} height={212} alt="Cleric"/>
const c2 = <img src={require("../static/images/mage.jpg")} height={212} alt="Mage"/>
const c3 = <img src={require("../static/images/monk.jpg")} height={212} alt="Monk"/>
const c4 = <img src={require("../static/images/ranger.jpg")} height={212} alt="Ranger"/>
const c5 = <img src={require("../static/images/rogue.jpg")} height={212} alt="Rogue"/>
const c6 = <img src={require("../static/images/warrior.jpg")} height={212} alt="Warrior"/>

//Defining the marks for the stat sliders
const marks = [
    {value: 6, label: '6'},
    {value: 12, label: '12'},
    {value: 18, label: '18'}
]

export default function CharacterCreationForm({values}) {
    
    
    const initialValues ={
        name: "",
        race: "",
        char_class: "",
        strength: 0,
        dexterity:0,
        constitution:0,
        intelligence:0,
        wisdom:0,
        charisma:0,
    }
    
    const handleSubmit =(values,resetForm)=>{
        console.log(values)        
        console.log('Character Created')
    }

    const formik = useFormik({
        initialValues:initialValues,
        validationSchema:FormSchema,
        onSubmit:(values)=>{handleSubmit(values)},
        enableReinitialize:true

    })

    

  

  return (
    <form onSubmit={formik.handleSubmit}>
        


 <br/>
<Typography variant='h5' color='primary'><strong>Character Name: {formik.values.name}</strong></Typography>
<TextField
            id="name"
            name="name"
            fullWidth
            sx={{color: 'primary', mb:2, mt:2}}
            label="Enter Name"
            placeholder="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            color='primary'
        />
    
    <br/>
    <RadioGroup
    name="race-selection"
    value = {formik.values?.race}
    onChange={formik.handleChange}
    
    >
    
    <div id="my-radio-group"><Typography variant='h5' color='primary'><strong>Race: {formik.values?.race}</strong></Typography></div>
    <div role="group" aria-labelledby="my-radio-group">
        
      <label>
        <FormControlLabel  control={<Radio/>} name="race" label={r1} value="Human Male" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r2} value="Human Female" />       
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r3} value="Elf Male" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r4} value="Elf Female" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r5} value="Dwarf Male" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r6} value="Dwarf Female" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r7} value="Orc Male" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r8} value="Orc Female" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r9} value="Rusyon Male" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r10} value="Rusyon Female" />        
      </label>
      <label>
        <FormControlLabel control={<Radio/>} name="race" label={r11} value="Ervakt" />        
      </label>        
    </div>         
    </RadioGroup>
    <br/>
    <RadioGroup
    name="class-selection"
    value = {formik.values?.char_class}
    onChange={formik.handleChange}
    >
    <div id="my-radio-group"><Typography variant='h5' color='primary'><strong>Class: {formik.values?.char_class}</strong></Typography></div>
    <div role="group" aria-labelledby="my-radio-group">
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c1} value="Cleric" />    
  </label>
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c2} value="Mage" />    
  </label>
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c3} value="Monk" />    
  </label>
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c4} value="Ranger" />    
  </label>
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c5} value="Rogue" />    
  </label>
  <label>
    <FormControlLabel control={<Radio/>} name="char_class" label={c6} value="Warrior" />    
  </label>  
</div>
    </RadioGroup>

    {/* Setting Character Stats. I want the combination of all the stats to be no more than */}
   
<br/>

{/* Strength */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Strength: {formik.values?.strength}</strong></Typography>    
    <Slider 
    name="strength" 
    value={formik.values?.strength} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Strength' 
    defaultValue={11} 
    step={1} 
    marks={marks} 
    min={6} 
    max={18}
    />        
</Box>

{/* Dexterity */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Dexterity: {formik.values?.dexterity}</strong></Typography>
    <Slider 
    name="dexterity" 
    value={formik.values?.dexterity} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Dexterity' 
    defaultValue={11} 
    step={1} 
    marks={marks} 
    min={6} 
    max={18}
    /> 
</Box>

{/* Constitution */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Constitution: {formik.values?.constitution}</strong></Typography>
    <Slider 
    name="constitution" 
    value={formik.values?.constitution} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Constitution' 
    defaultValue={11} 
    step={1} 
    marks={marks} 
    min={6} 
    max={18}
    />
    </Box>

{/* Intelligence */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Intelligence: {formik.values?.intelligence}</strong></Typography>
    <Slider 
    name="intelligence" 
    value={formik.values?.intelligence} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Intelligence' 
    defaultValue={11} 
    step={1} 
    marks={marks} 
    min={6} 
    max={18}
    />
    </Box>

{/* Wisdom */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Wisdom: {formik.values?.wisdom}</strong></Typography>
    <Slider 
    name="wisdom" 
    value={formik.values?.wisdom} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Wisdom' 
    defaultValue={11} 
    step={1} 
    marks={marks} 
    min={6} 
    max={18}
    />
    </Box>

{/* Charisma */}
<Box sx={{ width: '98%' }}>
<Typography variant='h5' color='primary'><strong>Charisma: {formik.values?.charisma}</strong></Typography>
    <Slider 
    name="charisma" 
    value={formik.values?.charisma} 
    onChange={formik.handleChange} 
    valueLabelDisplay="auto" 
    label='Charisma' defaultValue={11} step={1} marks={marks} min={6} max={18}/>
    </Box>


    <br/>
<Button type="submit" sx={{ width: "100%", my:1 }}>Submit</Button>

</form>
  )
}