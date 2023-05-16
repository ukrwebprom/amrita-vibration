import './contactbuttons.scss';

export const ContactButtons = () => {
    const telURL = 'https://t.me/Amritaananda';
    const whatsURL = 'https://api.whatsapp.com/send?phone=+380503334846&text=Hi';
    const openMessager = url => {
        window.open(url, '_blank');
    }
    return (
        <div className="contact-buttons">
            <p>Отправить сообщение</p>
            <div className='buttons-group'>
            <button type="button" className='telegram' onClick={() => openMessager(telURL) }>Telegram</button>
            <button type="button" className='whatsapp' onClick={() => openMessager(whatsURL) }>WhatsApp</button>
            </div>
        </div>
    )
}