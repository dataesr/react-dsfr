```jsx
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
} from '.';
import Logo from '../Logo';

<Footer>
    <FooterTop>
        <FooterTopCategory title="Category #1">
            <FooterLink href="/">Navigation link</FooterLink>
            <FooterLink href="/">Navigation link</FooterLink>
        </FooterTopCategory>
        <FooterTopCategory title="Category #2">
            <FooterLink href="/">Navigation link</FooterLink>
            <FooterLink href="/">Navigation link</FooterLink>
            <FooterLink href="/">Navigation link</FooterLink>
        </FooterTopCategory>
        <FooterTopCategory title="Category #3">
            <FooterLink href="/">Navigation link</FooterLink>
            <FooterLink href="/">Navigation link</FooterLink>
            <FooterLink href="/">Navigation link</FooterLink>
        </FooterTopCategory>
    </FooterTop>
    <FooterBody
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    >
        <Logo>bloc-marque</Logo>
    </FooterBody>
    <FooterPartners>
        <FooterPartnersTitle>Our partners</FooterPartnersTitle>
        <FooterPartnersLogo isMain href="/" imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo"
                            imageAlt="Logo 1"/>
        <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+2"
                            imageAlt="Logo 2"/>
        <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+3"
                            imageAlt="Logo 3"/>
        <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+4"
                            imageAlt="Logo 4"/>
    </FooterPartners>
    <FooterBottom>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
        <FooterLink href="/">Footer Link</FooterLink>
    </FooterBottom>
</Footer>
```
