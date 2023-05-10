import { ComponentStory } from '@storybook/react';

import Footer from './Footer';

import FooterTopCategory from './FooterTopCategory';
import FooterLink from './FooterLink';
import FooterTop from './FooterTop';
import FooterBody from './FooterBody';
import FooterOperator from './FooterOperator';
import FooterBodyItem from './FooterBodyItem';
import FooterPartners from './FooterPartners';
import FooterPartnersTitle from './FooterPartnersTitle';
import FooterPartnersSecondaryTitle from './FooterPartnersSecondaryTitle';
import FooterPartnersLogo from './FooterPartnersLogo';
import FooterBottom from './FooterBottom';
import FooterCopy from './FooterCopy';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';

// https://www.systeme-de-design.gouv.fr/elements-d-interface/composants/pied-de-page

export default {
  title: 'Pied de page - Footer',
  component: Footer,
  subcomponents: {
    FooterTopCategory,
    FooterLink,
    FooterTop,
    FooterBody,
    FooterOperator,
    FooterBodyItem,
    FooterPartners,
    FooterPartnersTitle,
    FooterPartnersSecondaryTitle,
    FooterPartnersLogo,
    FooterBottom,
    FooterCopy,
  },
};

const Template: ComponentStory<typeof Footer> = (args) => (
  <Footer {...args} />
);

export const SimpleCheckbox = Template.bind({});
SimpleCheckbox.args = {
  children: [
    <FooterTop>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink
          asLink={<Link href="/myFooterLink" />}
        >
          Footer Link Router
        </FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
      <FooterTopCategory title="Nom de la catégorie">
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
      </FooterTopCategory>
    </FooterTop>,
    <FooterBody
      description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
      <Logo>Ministère de l‘enseignement supérieur de la rechercher et de l‘innovation</Logo>
      <FooterOperator>
        <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
      </FooterOperator>
      <FooterBodyItem>
        <Link href="https://legifrance.gouv.fr">
          legifrance.gouv.fr
        </Link>
      </FooterBodyItem>
      <FooterBodyItem>
        <Link href="https://gouvernement.fr">
          gouvernement.fr
        </Link>
      </FooterBodyItem>
      <FooterBodyItem>
        <Link href="https://service-public.fr">
          service-public.fr
        </Link>
      </FooterBodyItem>
      <FooterBodyItem>
        <Link href="https://data.gouv.fr">
          data.gouv.fr
        </Link>
      </FooterBodyItem>
    </FooterBody>,
    <FooterPartners>
      <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
      <FooterPartnersLogo
        isMain
        href="/"
        imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo"
        imageAlt="Logo 1"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+2"
        imageAlt="Logo 2"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+3"
        imageAlt="Logo 3"
      />
      <FooterPartnersLogo
        href="/"
        imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+4"
        imageAlt="Logo 4"
      />
    </FooterPartners>,
    <FooterBottom>
      <FooterLink
        asLink={(
          <button type="button">
            <span
              className="fr-fi-theme-fill fr-link--icon-left"
              aria-controls="fr-theme-modal"
            >
              Paramètres d’affichage
            </span>
          </button>
        )}
      />
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterLink href="/">Footer Link</FooterLink>
      <FooterCopy>licence etalab-2.0</FooterCopy>
    </FooterBottom>],
};
SimpleCheckbox.storyName = 'Pied de page';
