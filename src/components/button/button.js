import './button.css'


const Button = ({label, color})=> {
    const sendLabeltoAlert = ()=> {
        alert(`A label deste botão é "${label}"`)
    }
    return (
        <button className='btn' style={{color}} onClick={sendLabeltoAlert}>{label}</button>
    )
}

Button.defaultProps = {
    label: 'Baixar CV',
    color: '#122750'
}

export default Button