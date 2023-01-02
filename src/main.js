import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.css"

import axios, {isCancel, AxiosError} from 'axios';

import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faPlay, faForwardStep, faBackwardStep, faShuffle, faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons';

/* add icons to the library */
library.add(faUserSecret,faPlay,faForwardStep,faBackwardStep,faShuffle,faRotateRight,faCirclePlay)



createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
