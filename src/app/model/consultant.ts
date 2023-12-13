export interface Consultant {

    firstname: string;
    lastname: string;
    role: string;
    img: string;
    contact: Contact;
}

interface Contact {
    mobile: string;
    mail: string;
    linkedin?: Social;
}

interface Social {
    alt: string;
    src: string;
}