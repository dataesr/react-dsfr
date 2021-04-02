import React from 'react';
import {
    Links, Accordion, AccordionItem, Breadcrumb, BreadcrumbItem, Button, Callout,
    Logo,
    CalloutTitle, CalloutText, Checkbox, CheckboxGroup,
    Col,
    Row,
    Container,
    Icon,
    Text,
    Title,
    TitleDisplay,
    Footer,
    FooterLink,
    FooterBody,
    FooterBottom,
    FooterCopy,
    FooterPartners,
    FooterPartnersLogo,
    FooterPartnersTitle,
    FooterTop,
    FooterTopCategory,
    Header,
    HeaderNav,
    HeaderBody,
    NavItem,
    NavSubItem,
    Service,
    Tool,
    ToolItem,
    ToolItemGroup
} from 'react-rfds';

const App = () => {
    return <Container>
        <Links title='title'>Link</Links>
        <Logo>Test</Logo>
        <Row>
            <Col>
                <Icon icon="alert-fill" size="xl" />
                <Text size="lg">Je suis un texte lg</Text>
                <Title as="h4">Je suis un titre h4</Title>
                <TitleDisplay as="h1" size="sm">Title sm</TitleDisplay>
            </Col>
            <Col>
                <CheckboxGroup>
                    <Checkbox
                        label="Label checkbox 1"
                        onChange={() => {
                        }}
                        value="value-1"
                    />
                    <Checkbox
                        label="Label checkbox 2"
                        onChange={() => {
                        }}
                        value="value-2"
                    />
                </CheckboxGroup>
            </Col>
            <Col>
                <Callout scheme="soft-green-warm">
                    <CalloutTitle as="h3">Callout title</CalloutTitle>
                    <CalloutText>Callout text that might be short and concise.</CalloutText>
                </Callout>
            </Col>
        </Row>
        <Row>
            <Col>
                <Breadcrumb>
                    <BreadcrumbItem>
                        test
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        test #2
                    </BreadcrumbItem>
                </Breadcrumb>
                <Button title="title">Button</Button>
            </Col>
        </Row>
        <Row>
            <Col>

                <Accordion>
                    <AccordionItem title="title">Test</AccordionItem>
                    <AccordionItem title="title">Test</AccordionItem>
                    <AccordionItem title="title">Test</AccordionItem>
                    <AccordionItem title="title">Test</AccordionItem>
                </Accordion>
                <Links href="/">test</Links>
            </Col>
        </Row>
        <Footer>
            <FooterTop>
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
            </FooterTop>
            <FooterBody
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Uenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            >
                <Logo>Ministère de l'enseignement supérieur de la rechercher  et de l'innovation</Logo>
            </FooterBody>
            <FooterPartners>
                <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
                <FooterPartnersLogo isMain href="/" imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo" imageAlt="Logo 1" />
                <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+2" imageAlt="Logo 2" />
                <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+3" imageAlt="Logo 3" />
                <FooterPartnersLogo href="/" imageSrc="https://dummyimage.com/100x80/000/fff.png&text=logo+4" imageAlt="Logo 4" />
            </FooterPartners>
            <FooterBottom>
                <FooterLink href="/">Footer Link</FooterLink>
                <FooterLink href="/">Footer Link</FooterLink>
                <FooterLink href="/">Footer Link</FooterLink>
                <FooterLink href="/">Footer Link</FooterLink>
                <FooterLink href="/">Footer Link</FooterLink>
                <FooterCopy href="/">© République Française 2020</FooterCopy>
            </FooterBottom>
        </Footer>
    </Container>;
};

export default App;
