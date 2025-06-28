import './Contact.css';

export default function Contact() {
  async function handleSubmit(e) {
    e.preventDefault();

    const data = {
      title: e.target.title.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      alert(result.message);
    } catch (err) {
      alert('AN ERROR OCCURRED');
      console.error(err);
    }
  }

  return (
    <>
      <div className='contact-text'>
        <h2 className='contact-title'>Contact</h2>
        <p className='contact-subtitle'>Get in touch</p>
      </div>

      <div className='contact-wrapper'>
        <div className='contact-form'>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <input
                type='text'
                name='title'
                placeholder='Enter your title here...'
                required
              />
              <textarea
                id='message'
                name='message'
                className='message-textarea'
                rows='6'
                placeholder='Enter your message here...'
                required
              />
            </div>
            <button type='submit' className='contact-button'>Send</button>
            <br /><br />
          </form>

          <p className='contact-email'>
            {import.meta.env.VITE_MYEMAIL || 'example@email.com'}
          </p>
        </div>
      </div>
    </>
  );
}
