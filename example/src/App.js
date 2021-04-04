import React from 'react';
import {
    Link, Accordion, AccordionItem, Breadcrumb, BreadcrumbItem, Button, Callout,
    Logo,
    CalloutTitle, CalloutText, Checkbox, CheckboxGroup,
    Col,
    Row,
    Container,
    Card,
    CardImage,
    CardDetail,
    CardTitle,
    CardDescription,
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
    ToolItemGroup,
    Tabs,
    Tab,
    SearchBar,
    Highlight,
    MediaVideo,
    MediaImage,
} from 'react-rfds';

const App = () => {
    return <>
        <Header>
            <HeaderBody>
                <Logo splitCharacter={10}>République Française</Logo>
                <Service
                    title="Nom du service"
                    description="baseline - précisions sur l‘organisation"/>
                <Tool
                    buttonClose='fermer'
                >
                    <ToolItemGroup>
                        <ToolItem icon='rf-fi-lock-line' link='/path'>Se connecter</ToolItem>
                        <ToolItem icon='rf-fi-add-circle-line' link='/path'>Créer un espace</ToolItem>
                    </ToolItemGroup>
                    <SearchBar
                        onSearch={() => {
                        }}
                        label="SearchBar du gouvernement"
                        placeholder="Rechercher"
                        buttonLabel="Rechercher"
                    />
                </Tool>
            </HeaderBody>
            <HeaderNav>
                <NavItem title='Home' link='/'/>
                <NavItem title='Resources'>
                    <NavSubItem title='Ressource #1' link='/path-to-resources-1'/>
                    <NavSubItem title='Ressource #2' link='/path-to-resources-2'/>
                    <NavSubItem title='Ressource #3' link='/path-to-resources-3'/>
                </NavItem>
            </HeaderNav>
        </Header>
        <Container>
            <Row>
                <Col>
                    <MediaVideo
                        legend="légende de l'image"
                        buttonLabel="Transcription"
                    >
                        <iframe
                            title="titre de l’iframe"
                            className="rf-responsive-vid__player"
                            src="https://www.youtube.com/embed/HyirpmPL43I"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen="" />
                    </MediaVideo>
                    <MediaImage
                        src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
                        alt="description alternative à l‘image"
                        legend="légende de l'image"
                        size="lg"
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Highlight size="sm" scheme="soft-green-warm" >
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                    </Highlight>
                    <Link title='title'>Link</Link>
                    <Logo>Test</Logo>
                </Col>
            </Row>
            <Card href="/" isHorizontal hasArrow={false}>
                <CardImage alt="alternative" src="http://fakeimg.pl/300/"/>
                <CardDetail>Détail</CardDetail>
                <CardTitle>
                    Qu’est-ce que le Pass Culture et comment l’obtenir ?
                </CardTitle>
                <CardDescription>
                    Description texte body small regular consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore…
                </CardDescription>
            </Card>
            <Row>
                <Col>
                    <Tabs>
                        <Tab label="Label tab #1">
                            <h3>Content tab #1</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem est ex fugiat
                                minima minus natus quos ratione. Adipisci, consequatur obcaecati porro soluta ullam ut.
                                Aspernatur atque porro quis quod!</p>
                        </Tab>
                        <Tab label="Label tab #2">
                            <h3>Content tab #2</h3>
                        </Tab>
                        <Tab label="Label tab #3">
                            <h3>Content tab #3</h3>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem est ex fugiat
                                minima minus natus quos ratione. Adipisci, consequatur obcaecati porro soluta ullam ut.
                                Aspernatur atque porro quis quod!</p>
                            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis dolorem est ex fugiat
                                minima minus natus quos ratione. Adipisci, consequatur obcaecati porro soluta ullam ut.
                                Aspernatur atque porro quis quod!</p>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Icon icon="alert-fill" size="xl"/>
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
                    <Link href="/">test</Link>
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
                    <Logo>Ministère de l'enseignement supérieur de la rechercher et de l'innovation</Logo>
                </FooterBody>
                <FooterPartners>
                    <FooterPartnersTitle>Nos partenaires</FooterPartnersTitle>
                    <FooterPartnersLogo isMain href="/"
                                        imageSrc="https://dummyimage.com/140x80/000/fff.png&text=main-logo"
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
                    <FooterLink href="/">Footer Link</FooterLink>
                    <FooterLink href="/">Footer Link</FooterLink>
                    <FooterCopy href="/">© République Française 2020</FooterCopy>
                </FooterBottom>
            </Footer>
        </Container></>;
};

export default App;
