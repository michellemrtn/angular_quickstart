export interface Contact {
    id: number;
    name: string;
    vorname: string;
    adresse: {
        strasse: string;
        plz: string;
        ort: string;
    },
    firma?: string;
}