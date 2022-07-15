import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const nav = {
    0: {
        name: 'DEFAULT',
        href: '/',
    },
    1: {
        name: 'HOME',
        icon: <FontAwesomeIcon icon={solid('house')} color={'#AAACAE'} />,
        href: '/home',
    },
    2: {
        name: 'ITEMS',
        icon: <FontAwesomeIcon icon={solid('person-chalkboard')} color={'#AAACAE'} />,
        href: '/items',
    },
    3: {
        name: 'BASKET',
        icon: <FontAwesomeIcon icon={solid('basket-shopping')} color={'#AAACAE'} />,
        href: '/basket',
    },
    4: {
        name: 'SETTINGS',
        icon: <FontAwesomeIcon icon={solid('gear')} color={'#AAACAE'} />,
        href: '/settings',
    },
    5: {
        name: 'ENTRY',
        href: '/entry',
    }
};

export default nav;