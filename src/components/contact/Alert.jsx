// alert icons
import {AiOutlineCheckCircle} from 'react-icons/ai'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineLoading} from 'react-icons/ai'

function getAlert(state) {
  if (state === "sending") {
    return (
        <>
            <AiOutlineLoading className='contact__alert-icon contact__alert-iconSending' />
        </>
    )
  }
  else if(state === "sent") {
    return (
        <>
            <AiOutlineCheckCircle className='contact__alert-icon' />
            <p className='alert__label'>Message sent successfully</p>
        </>
    )
  }
  else if(state === "notsent") {
    return (
        <>
            <AiOutlineCloseCircle className='contact__alert-icon' />
            <p className='alert__label'>Something went wrong</p>
        </>
    )
  }
}

function Alert({state}) {
  return (
        <div className="contact__alert-container">
            <div className="contact__alert">
                {getAlert(state)}
            </div>
        </div>
  )
}

export default Alert