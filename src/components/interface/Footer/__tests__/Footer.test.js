import { render, screen } from '@testing-library/react';
import {
  FooterBody,
  FooterTop,
  FooterTopCategory,
  FooterBottom,
  FooterPartners,
  FooterLink,
  FooterCopy,
  FooterPartnersTitle,
  FooterPartnersLogo,
  Footer,
} from '..';
import Logo from '../../Logo';

describe('<Footer />', () => {
  it('should render Footer properly', () => {
    render(
      <Footer>
        <FooterTop>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
          </FooterTopCategory>
          <FooterTopCategory title="Nom de la catégorie">
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
            <FooterLink href="/">Lien de navigation</FooterLink>
          </FooterTopCategory>
        </FooterTop>
        <FooterBody
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        >
          <Logo splitCharacter={10}>
            Ministère de l&apos;enseignement supérieur de la rechercher et de l&apos;innovation
          </Logo>
        </FooterBody>
        <FooterPartners>
          <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
          <FooterPartnersLogo isMain href="/" imageSrc="img/logo1" imageAlt="Logo 1" />
          <FooterPartnersLogo href="/" imageSrc="img/logo2" imageAlt="Logo 2" />
          <FooterPartnersLogo href="/" imageSrc="img/logo3" imageAlt="Logo 3" />
          <FooterPartnersLogo href="/" imageSrc="img/logo4" imageAlt="Logo 4" />
        </FooterPartners>
        <FooterBottom>
          <FooterLink href="/">Plan du site</FooterLink>
          <FooterLink href="/">Accessibilité: non/partiellement/totalement conforme</FooterLink>
          <FooterLink href="/">Mentions légales</FooterLink>
          <FooterLink href="/">Données personnelles</FooterLink>
          <FooterLink href="/">Gestion des cookies</FooterLink>
          <FooterCopy href="/">© République Française 2020</FooterCopy>
        </FooterBottom>
      </Footer>,
    );
    const footer = screen.getByTestId('footer');
    expect(footer).toMatchSnapshot();
  });
});
