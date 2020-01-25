export interface Contact {
    name: string;
    vorname: string;
    adresse: {
        strasse: string;
        plz: string;
        ort: string;
    },
    firma?: string;
}

export const testdata: Contact[] = [
    {
        vorname: 'Max',
        name: 'Mustermann',
        adresse: {
            strasse: 'Teststrasse 1',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        vorname: 'Judith',
        name: 'Androthe',
        adresse: {
            strasse: 'Teststrasse 2',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        vorname: 'Julia',
        name: 'Stoh',
        adresse: {
            strasse: 'Teststrasse 3',
            ort: 'Nürnberg',
            plz: '12345'
        }
    },
    {
        vorname: 'Andreas',
        name: 'Meier',
        adresse: {
            strasse: 'Teststrasse 15',
            ort: 'Nürnberg',
            plz: '12345'
        }
    }
]