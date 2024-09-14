function WhatsAppButton() {
    const phoneNumber = "5534984024098"; // Substitua pelo número do WhatsApp com o código do país
  
    const handleWhatsAppRedirect = () => {
      window.open(`https://wa.me/${phoneNumber}`, '_blank');
    };
  
    return (
      <button onClick={handleWhatsAppRedirect}>
        Fale conosco no WhatsApp
      </button>
    );
  }
  
  export default WhatsAppButton;