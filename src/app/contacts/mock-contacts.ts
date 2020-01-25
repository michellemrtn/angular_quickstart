import { Contact } from './contacts.model';

export const CONTACTS: Contact[] = [
    {
        id: 0,
        vorname: 'Max',
        name: 'Mustermann',
        adresse: {
            strasse: 'Teststrasse 1',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        id: 1,
        vorname: 'Judith',
        name: 'Androthe',
        adresse: {
            strasse: 'Teststrasse 2',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        id: 2,
        vorname: 'Julia',
        name: 'Stoh',
        adresse: {
            strasse: 'Teststrasse 3',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        id: 3,
        vorname: 'Andreas',
        name: 'Meier',
        adresse: {
            strasse: 'Teststrasse 15',
            ort: 'Nürnberg',
            plz: '12345'
        }
    }
]