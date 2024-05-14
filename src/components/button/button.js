import './index.css'


const Button = ({label, color})=> {
    return <button className='btn' style={{color}} onClick={()=> alert(`A label deste botão é "${label}".`)}>{label}</button>
}

Button.defaultProps = {
    label: 'Baixar CV',
    color: '#122750'
}

export default Button