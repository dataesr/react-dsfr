import { render, screen } from '@testing-library/react';
import {
  FooterBody,
  FooterBodyItem,
  FooterTop,
  FooterTopCategory,
  FooterBottom,
  FooterPartners,
  FooterLink,
  FooterCopy,
  FooterPartnersTitle,
  FooterPartnersLogo,
  Footer,
  FooterOperator,
} from '..';
import Logo from '../../Logo';

describe('<Footer />', () => {
  it('should render Footer properly', () => {
    render(
      <Footer data-testid="footer">
        <FooterTop data-testid="footertop">
          <FooterTopCategory title="Nom de la catégorie" data-testid="footertopcategory">
            <FooterLink href="/" data-testid="footerlink">Lien de navigation</FooterLink>
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
          data-testid="footerbody"
        >
          <Logo splitCharacter={10} data-testid="footerlogo">
            Ministère de l&apos;enseignement supérieur de la rechercher et de l&apos;innovation
          </Logo>
          <FooterOperator>
            <img src="https://fakeimg.pl/145x81/" alt="texte alternatif" />
          </FooterOperator>
          <FooterBodyItem>
            legifrance.gouv.fr
          </FooterBodyItem>
          <FooterBodyItem>
            gouvernement.fr
          </FooterBodyItem>
          <FooterBodyItem>
            service-public.fr
          </FooterBodyItem>
          <FooterBodyItem>
            data.gouv.fr
          </FooterBodyItem>
        </FooterBody>
        <FooterPartners data-testid="footerpartners">
          <FooterPartnersTitle data-testid="title">Nos partenaires</FooterPartnersTitle>
          <FooterPartnersLogo isMain href="/" imageSrc="img/logo1" imageAlt="Logo 1" data-testid="logo" />
          <FooterPartnersLogo href="/" imageSrc="img/logo2" imageAlt="Logo 2" />
          <FooterPartnersLogo href="/" imageSrc="img/logo3" imageAlt="Logo 3" />
          <FooterPartnersLogo href="/" imageSrc="img/logo4" imageAlt="Logo 4" />
        </FooterPartners>
        <FooterBottom data-testid="bottom">
          <FooterLink href="/" data-testid="link">Plan du site</FooterLink>
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
