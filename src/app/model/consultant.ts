export interface Consultant {

    firstname: string;
    lastname: string;
    role: string;
    img: string;
    experiences: Experience[];
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

interface Experience {
    title: string;
    description: string;
    company?: string;
    keywords?: string[];
}