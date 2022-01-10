import React,{useState,useEffect} from 'react';
import PersonalDetails from './PersonalDetails';
import ProfessionalDetails from './ProfessionalDetails';
import Documents from './Documents';
import { css, styled, setup } from 'goober';

// react multi-step styling
setup(React.createElement)
const Ol = styled('ol')`
  margin: 0px;
  padding-bottom:2.2rem;
  @media(min-width:1120px) {
    padding-left:1.8rem;
  }
  list-style-type: none;
`
const Li = styled('li')`
  display:inline-block;
  text-align: center;
  line-height: 0.35rem;
  cursor: pointer;
  
  color: black;
  border-bottom: 5px solid #2E519E;
  &:hover,
  &:before {
    color: #2E519E;
  }
  &:after {
    content: "\\00a0\\00a0";
  }

&:not(:first-child)   {
  padding-left:10rem;
}
@media(max-width:1350px) {
  &:not(:first-child)   {
    padding-left:10rem;
  }
}
@media(max-width:468px) {
  &:not(:first-child)   {
    padding-left:7.5rem;
  }
}
@media(max-width:386px) {
  &:not(:first-child)   {
    padding-left:6rem;
  }
}
@media(min-width:1440px){
  &:not(:first-child)   {
    padding-left:15rem;
  }
}
  span {
    padding: 0 rem;
  }
  &:before {
    position: absolute;
    float: left;
    width: 1rem;
    line-height: 1em;
    border-radius: 50%;
  }
`
const Todo = css`
  &:before {
    content: "\u039F";
    margin-left:-1px;
    color: #2E519E;
    background-color: #2E519E;
  }
`
const Doing = css`
  &:before {
    content: "\u2B24";
    color: white;
    margin-left:-1px;
    background-color: #2E519E; 
  }
`
const Done = css`
  &:before {
    content: "\u2714";
    margin-left:-1px;
    color: white;
    background-color: #2E519E;
  }
`
const barTitle={
  display:"flex",
  fontSize:"1em",
  marginTop:"-35px",
  fontFamily:"fira sans,sans-serif",
}

// 
const getStep = (defaultIndex, newIndex, length) => {
  if(newIndex <=  length){
      return newIndex;
  }
  return defaultIndex;
}

const getTopNavStyles = (indx, length) => {
const styles = []
for (let i = 0; i < length; i++) {
  if (i < indx) {
    styles.push('done')
  } else if (i === indx) {
    styles.push('doing')
  } else {
    styles.push('todo')
  }
}
return styles
}

const getButtonsState = (indx, length) => {
if (indx > 0 && indx < length - 1) {
  return {
    showPreviousBtn: true,
    showNextBtn: true
  }
} else if (indx === 0) {
  return {
    showPreviousBtn: false,
    showNextBtn: true
  }
} else {
  return {
    showPreviousBtn: true,
    showNextBtn: false
  }
}
}

function Form() {
  // state 
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    phoneNumber: "",
    dob:"",
    nationality:"",
    userName:"",
    password: "",
    confirmPassword: "",
    email: "",
    practiceType: "",
    specialization: "",
    clinicAddress: "",
    city:"",
    state:"",
    country:"",
    zipcode: "",
    medRegNum: "",
    yor: "",
    smc: "",
    hd: "",
    yoe: ""
  });

  const handleInputData = input => e => {
  const {value } = e.target;
  setFormData(prevState => ({
    ...prevState,
    [input]: value
    }));
  }
const nextStep = ()=> {
next()
}

const steps = [
  {name:"Personal Details",component:<PersonalDetails  handleFormData={handleInputData} values={formData} nextStep={()=>{nextStep()}}/>},
  {name:"Professional Details",component:<ProfessionalDetails handleFormData={handleInputData} values={formData} nextStep={()=>{nextStep()}}/>},
  {name:"Professional Details",component:<Documents handleFormData={handleInputData} values={formData} />}
]

// react multi-step default functions

const { activeComponentClassName, inactiveComponentClassName } = true
    // const showNav =
    //   typeof showNavigation === 'undefined' ? true : showNavigation
  
    const [activeStep] = useState(getStep(0,   steps.length));
    const [stylesState, setStyles] = useState(getTopNavStyles(activeStep, steps.length))
    const [compState, setComp] = useState(activeStep)
    const [buttonsState, setButtons] = useState(getButtonsState(activeStep,steps.length))
    
    useEffect(() => {
      console.log('Index changed: ', activeStep);
      setStepState(activeStep);
    }, [activeStep]);
    
    const setStepState = (indx) => {
      setStyles(getTopNavStyles(indx, steps.length))
      setComp(indx < steps.length ? indx : compState)
      setButtons(getButtonsState(indx, steps.length))
    }
    
    const next = () => setStepState(compState + 1);
    // const previous = () => setStepState(compState > 0 ? compState - 1 : compState)
  
    // const handleOnClick = evt => {
    //   if (
    //     evt.currentTarget.value === steps.length - 1 &&
    //     compState === steps.length - 1
    //   ) {
    //     setStepState(steps.length)
    //   } else {
    //     setStepState(evt.currentTarget.value)
    //   }
    // }
  var names= [
    {
      title:"Personal Details"
    },
    {
      title:"Professional Details"
    },
    {
      title:"Upload Documents"
    }

  ]
    const renderSteps = () =>
    
      steps.map((s, i) => {
        if (stylesState[i] === 'todo') {
          return (
            <Li
              className={Todo}
              // onClick={handleOnClick}
              key={i}
              value={i}
            >
              
              {/* <span className="span">{i+1}</span> */}
            </Li>
          )
        } else if (stylesState[i] === 'doing') {
          return (
            <>
            <Li
              className={Doing}
              // onClick={handleOnClick}
              key={i}
              value={i}
            >
            </Li>
            </>
          )
        } else {
          return (
            <Li
              className={Done}
              // onClick={handleOnClick}
              key={i}
              value={i}
            >
              {/* <span>{i+1}</span> */}
            </Li>
          )
        }
      })
  
    // const renderNav = (show) =>
    //   show && (
    //     <div>
          {/* <button
            style={buttonsState.showPreviousBtn ? props.prevStyle : { display: 'none' }}
            onClick={previous}
          >
            Previous
          </button> */}
  
          {/* <button
            style={buttonsState.showNextBtn ? props.nextStyle : { display: 'none' }}
            onClick={nextStep} 
          >
            Next
          </button> */}
      //   </div>
      // )
    return (
      <div>
        <Ol>{renderSteps()}</Ol>
        
        <span style={barTitle}>{
                names.map((data)=><div className="register_title"  style={{fontFamily:"fira sans,sans-serif"}}>
                  {data.title}</div>)
                }</span>
        {
        inactiveComponentClassName
          ?
           steps.map((step, index) => {
              const className = index === compState ? activeComponentClassName : inactiveComponentClassName
              return (<div 
                className={className} 
                 key={index}>{step.component}</div>)
              
            })
        : <div>{steps[compState].component}</div>
        }
        {/* <div>{renderNav(showNav)}</div> */}
      </div>
    )
    // 
}
export default Form;

