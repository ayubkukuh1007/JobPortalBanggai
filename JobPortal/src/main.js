import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from "./router/index.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram} from "@fortawesome/free-brands-svg-icons";
import { faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {faList} from "@fortawesome/free-solid-svg-icons";
import {faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faTelegram} from "@fortawesome/free-brands-svg-icons";
import {faGooglePlay} from "@fortawesome/free-brands-svg-icons";

library.add(faInstagram,
    faFacebookSquare,
    faWhatsapp,
    faLinkedin,
    faTelegram,
    faGooglePlay,
    faBars,
    faList,

)
createApp(App)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
