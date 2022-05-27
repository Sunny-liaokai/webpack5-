import _ from 'lodash'
import './style.css'
import Icon from './Icon.jpg'
function component(){
    const el =document.createElement('div')
    el.innerHTML=_.join(['Hello','webpack'],'')
    el.classList.add('hello')


    const myIcon=new Image()
    myIcon.src = Icon

    el.appendChild(myIcon)
    return el
}
document.body.appendChild(component())
