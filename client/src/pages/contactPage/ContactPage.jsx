import ContactHeaderFoto from '../../components/contactHeaderFoto/ContactHeaderFoto';
import ContactSection from '../../components/contactSection/ContactSection';
import HomeHeaderFoto from '../../components/homeHeaderFoto/HomeHeaderFoto';

import { FirstSection, SecondSection } from './contactPage.styles';

const ContactPage = () => {
	return (
		<>
			<FirstSection>
				<ContactHeaderFoto />
			</FirstSection>
			<SecondSection>
				<ContactSection />
			</SecondSection>
		</>
	);
};
export default ContactPage;
