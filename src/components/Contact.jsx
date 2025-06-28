import './Contact.css'

export default function Contact() {
  return (
    <>
      <div className='contact-text'>
        <h2 className='contact-title'>Contact</h2>
        <p className='contact-subtitle'>Get in touch</p>
      </div>

      <div className='contact-wrapper'>
          <div className='contact-form'>
            <form>
              <div className='form-group'>
                <input type='text' placeholder='Enter your title here...'/>
                <textarea 
                  id="message"
                  name="message"
                  className='message-textarea'
                  rows="6"
                  placeholder="Enter your message here..."
                />
              </div>
              <p className='contact-email'>myemail@gmail.com</p>
            </form>
          </div>
      </div> 
    </>
  )
}