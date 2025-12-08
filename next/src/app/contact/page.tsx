import { fetchWithToken } from '@/dynamicRendering/utils';
import { StrapiResponse } from './strapi';
import { offices as localOffices } from './consts';
import ContactComponent from './component';
import { getCoordinates } from '../utils/coordinates';

type Offices = typeof localOffices;

interface ContactPageContent {
  data: {
    attributes: {
      mainTitle: string;
      fullNameLabel: string;
      emailLabel: string;
      phoneLabel: string;
      cvLabel: string;
      positionLabel: string;
      companyLabel: string;
      messageLabel: string;
      submitButtonLabel: string;
      officesTitle: string;
      cvRequiredMessage: string;
      successMessage: string;
      noFileSelected: string;
      pendingName: string;
    };
  };
}

const defaultTextContent = {
  mainTitle: 'Trabajemos juntos',
  fullNameLabel: 'Nombre completo',
  emailLabel: 'Correo eléctrónico',
  phoneLabel: 'Teléfono',
  cvLabel: 'Sube tu currículum',
  positionLabel: 'Puesto',
  companyLabel: 'Empresa',
  messageLabel: 'Mensaje',
  submitButtonLabel: 'Enviar',
  officesTitle: 'Nuestras oficinas',
  cvRequiredMessage: 'Por favor, sube tu currículum',
  successMessage: 'Formulario enviado correctamente, gracias por contactarnos',
  noFileSelected: 'Sin seleccionar',
  pendingName: 'Nombre pendiente',
};

async function getContactPageContent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/pagina-contacto`,
      { next: { revalidate: 60 } }
    );
    const contentRequest = (await response.json()) as ContactPageContent;
    if (contentRequest?.data?.attributes) {
      return contentRequest.data.attributes;
    }
  } catch (error) {
    console.error('Error fetching contact page content from Strapi:', error);
  }
  return defaultTextContent;
}

export default async function ContactPage() {
  const remoteOffices = (await getCoordinates()) || [];
  const offices = remoteOffices;

  const stylesrequest = await fetchWithToken<StrapiResponse>(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/json-snazzy-map?populate=*`
  );
  const styles = stylesrequest.data.attributes.data;

  const textContent = await getContactPageContent();

  return <ContactComponent offices={offices} styles={styles} texts={textContent} />;
}
