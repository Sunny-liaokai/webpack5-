import _ from 'lodash'
import './style.css'
import Icon from './Icon.jpg'
import printMe from './print'

function component () {
    const el = document.createElement('div')
    el.innerHTML = _.join(['Hello', 'webpack'], '')
    el.classList.add('hello')
    const btn = document.createElement('btn')
    btn.innerHTML='点击哈哈哈哈'
    btn.onclick = printMe;

    const myIcon = new Image()
    myIcon.src = Icon

    el.appendChild(myIcon)

    el.appendChild(btn)
    return el
}

document.body.appendChild(component())
