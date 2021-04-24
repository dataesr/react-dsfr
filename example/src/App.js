import React, { useState } from 'react';
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
    Modal,
    ModalTitle, ModalContent, ModalFooter,
    Radio, RadioGroup,
    Select, SideMenu, SideMenuItem, SideMenuLink,
    Skiplinks, SkiplinkItem, SimpleTable,
    Tag, TagGroup, TextInput,
    Tile, TileImage, TileBody, Toggle
} from '@dataesr/react-dsfr';

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const options = [
        { value: '', label: '- Select -', disabled: true, hidden: true },
        { value: '1', label: 'Burgers &amp; sandwiches' }, { value: '2', label: 'Build your own' },
        { value: '3', label: 'Friendly meals' },
        { value: '4', label: 'Save menu &amp; more' }
    ];
    const data = [
        {
            id: 'PE',
            level: 1,
            name_fr: 'Sciences & Technologies',
            name_en: 'Physical Sciences and Engineering',
        },
        {
            id: 'LS',
            level: 1,
            name_fr: 'Vie & Santé',
            name_en: 'Life Sciences',
        },
        {
            id: 'SH',
            level: 1,
            name_fr: 'Sciences Humaines & Sociales',
            name_en: 'Social Sciences and Humanities',
        },
        {
            id: 'PE1',
            level: 2,
            name_fr: 'Mathématiques',
            name_en: 'Mathematics',
        },
        {
            id: 'PE2',
            level: 2,
            name_fr: 'Constituants fondamentaux de la matière',
            name_en: 'Fundamental Constituents of Matter',
        },
        {
            id: 'PE3',
            level: 2,
            name_fr: 'Physique de la matière condensée',
            name_en: 'Condensed Matter Physics',
        },
        {
            id: 'PE4',
            level: 2,
            name_fr: 'Chimie physique et analytique',
            name_en: 'Physical and Analytical Chemical Sciences',
        },
        {
            id: 'PE5',
            level: 2,
            name_fr: 'Chimie de synthèse et matériaux',
            name_en: 'Synthetic Chemistry and Materials',
        },
        {
            id: 'PE6',
            level: 2,
            name_fr: 'Sciences informatiques et informatique',
            name_en: 'Computer Science and Informatics',
        },
        {
            id: 'PE7',
            level: 2,
            name_fr: 'Ingénierie des systèmes et de la communication',
            name_en: 'Systems and Communication Engineering',
        },
        {
            id: 'PE8',
            level: 2,
            name_fr: 'Ingénierie des produits et des procédés',
            name_en: 'Products and Processes Engineering',
        },
        {
            id: 'PE9',
            level: 2,
            name_fr: 'Sciences de l\'Univers',
            name_en: 'Universe Sciences',
        },
        {
            id: 'PE10',
            level: 2,
            name_fr: 'Sciences de la Terre',
            name_en: 'Earth System Science',
        }
    ];
    return <>
        <Header>
            <HeaderBody>
                <Logo splitCharacter={10}>République Française</Logo>
                <Service
                    title="Playground @dataesr/react-dsfr"
                    description="messy tests"/>
                <Tool
                    buttonClose='fermer'
                >
                    <ToolItemGroup>
                        <ToolItem icon='fr-fi-lock-line' link='/path'>Example</ToolItem>
                        <ToolItem icon='fr-fi-add-circle-line' link='/path'>Example</ToolItem>
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
            <Title as="h3">Tile - Tuile</Title>
            <Row>
                <Col>
                    <Tile horizontal={true} verticalMedium={true}>
                        <TileBody
                            title="Tuile horizontale par défaut"
                            description="Et verticale en desktop"
                            linkHref='/myPath'>
                        </TileBody>
                        <TileImage
                            alt="un petit carré"
                            src="https://place-hold.it/80x80">
                        </TileImage>
                    </Tile>
                </Col>
            </Row>
            <Title as="h3">Tag</Title>
            <Row>
                <Col>
                    <TagGroup>
                        <Tag size="sm" as="span">Label tag</Tag>
                        <Tag size="sm" as="span" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
                        <Tag size="sm" as="span" icon="arrow-right-line">Label tag</Tag>
                        <Tag size="sm" as="span">Label tag</Tag>
                        <Tag size="sm" as="span" icon="arrow-right-line" iconPosition="left">Label tag</Tag>
                        <Tag size="sm" as="span" icon="arrow-right-line">Label tag</Tag>
                    </TagGroup>
                </Col>
            </Row>
            <Title as="h3">Table</Title>
            <Row>
                <Col>
                    <SimpleTable caption="Simple Table" data={data}/>
                </Col>
            </Row>
            <Title as="h3">Sidemenu</Title>
            <Row>
                <Col n="sm-12" className="fr-col-md-3">
                    <SideMenu title="Titre de rubrique" buttonLabel="Dans cette rubrique">
                        <SideMenuItem title="Niveau 1">
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuItem title="Niveau 2">
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                            </SideMenuItem>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                        </SideMenuItem>
                        <SideMenuItem title="Niveau 1">
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuItem title="Niveau 2">
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                                <SideMenuLink href="/">Accès direct niveau 3</SideMenuLink>
                            </SideMenuItem>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                            <SideMenuLink href="/">Accès direct niveau 2</SideMenuLink>
                        </SideMenuItem>
                    </SideMenu>
                </Col>
                <Col>
                    <Title as="h3">Modal</Title>
                    <Row>
                        <Col>
                            <Button title='open modal' onClick={() => setIsOpen(true)}>open modal</Button>
                            <Modal isOpen={isOpen} hide={() => setIsOpen(false)}>
                                <ModalTitle icon>I'm a title</ModalTitle>
                                <ModalContent>blah blah</ModalContent>
                                <ModalFooter>
                                    <Button title="Une action">blah</Button>
                                </ModalFooter>
                            </Modal>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Title as="h3">Select - TextInput</Title>
            <Row>
                <Col>
                    <Select
                        label="Label pour liste déroulante"
                        options={options}
                    />
                    <Select
                        label="Label pour liste déroulante"
                        options={options}
                        message="Texte d'erreur obligatoire"
                        messageType="error"
                    />

                    <TextInput
                        value="Value"
                        onChange={() => {
                        }}
                        label="Text input"
                    />
                </Col>
            </Row>
            <Title as="h3">Radio</Title>
            <Row>
                <Col>
                    <RadioGroup
                        legend="Légende pour l’ensemble de champs"
                    >
                        <Radio
                            label="Label radio 1"
                            onChange={() => {
                            }}
                            value="value-1"
                        />
                        <Radio
                            label="Label radio 2"
                            onChange={() => {
                            }}
                            value="value-2"
                        />
                        <Radio
                            label="Label radio 3"
                            onChange={() => {
                            }}
                            value="value-3"
                        />
                    </RadioGroup>
                </Col>
            </Row>
            <Title as="h3">Checkbox</Title>
            <Row>
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
            </Row>
            <Title as="h3">Media</Title>
            <Row>
                <Col>
                    <MediaVideo
                        legend="légende de l'image"
                        buttonLabel="Transcription"
                    >
                        <iframe
                            title="titre de l’iframe"
                            className="fr-responsive-vid__player"
                            src="https://www.youtube.com/embed/HyirpmPL43I"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen=""/>
                    </MediaVideo>
                </Col>
            </Row>
            <Row>
                <Col>
                    <MediaImage
                        src="https://bibliotheques.csdm.qc.ca/files/2018/11/10_banques_dimages_gratuites_libres_de_droits-300x169.jpg"
                        alt="description alternative à l‘image"
                        legend="légende de l'image"
                        size="lg"
                    />
                </Col>
            </Row>
            <Title as="h3">Highlight</Title>
            <Row>
                <Col>
                    <Highlight size="sm" scheme="soft-green-warm">
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                    </Highlight>
                </Col>
                <Col>
                    <Highlight size="lg">
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                        Highlight text that might be short and concise.
                    </Highlight>
                </Col>
            </Row>
            <Title as="h3">Lien</Title>
            <Row>
                <Col>
                    <Link title='title'>Link</Link>
                </Col>
            </Row>
            <Title as="h3">Bloc marque</Title>
            <Row>
                <Col>
                    <Col>
                        <Logo>Test Bloc Marque</Logo>
                    </Col>
                </Col>
            </Row>
            <Title as="h3">Card</Title>
            <Row>
                <Col>
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
                </Col>
            </Row>
            <Title as="h3">Tabs - Onglets</Title>
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
            <Title as="h3">Texts / icons</Title>
            <Row>
                <Col>
                    <Icon icon="alert-fill" size="xl"/>
                    <Text size="xs">Text xs</Text>
                    <Title as="h4">Title h4</Title>
                </Col>
                <Col>
                    <Text size="lg">Text lg</Text>
                </Col>
                <Col>
                    <TitleDisplay as="h1" size="sm">Title sm</TitleDisplay>
                </Col>
            </Row>
            <Title as="h3">Callout</Title>
            <Row>
                <Col>
                    <Callout scheme="soft-green-warm">
                        <CalloutTitle as="h3">Callout title</CalloutTitle>
                        <CalloutText>Callout text that might be short and concise.</CalloutText>
                    </Callout>
                </Col>
                <Col>
                    <Callout scheme="soft-green-warm">
                        <CalloutTitle as="h3">Callout title</CalloutTitle>
                        <CalloutText>Callout text that might be short and concise.</CalloutText>
                        <Button title="acceder...">
                            Accéder au service
                        </Button>
                    </Callout>
                </Col>
            </Row>
            <Title as="h3">Breadcrumbs</Title>
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
                </Col>
            </Row>
            <Title as="h3">Button</Title>
            <Row>
                <Col>
                    <Button title="title">Button</Button>
                </Col>
                <Col>
                    <Button icon="alert-fill" iconPosition='right' title="title">icon on the right</Button>
                </Col>
                <Col>
                    <Button size="sm" secondary title="title">
                        secondary sm button
                    </Button>
                </Col>
            </Row>
            <Title as="h3">Toggle</Title>
            <Row>
                <Toggle
                    onChange={()=>{
                        console.log('==== test ==== ');}}
                    isDisabled
                    isChecked
                    label="Toggle Label"
                    description="Toggle descirption"
                />
            </Row>
            <Title as="h3">Accordion</Title>
            <Row>
                <Col>
                    <Accordion>
                        <AccordionItem title="title">Test</AccordionItem>
                        <AccordionItem title="title">Test</AccordionItem>
                        <AccordionItem title="title">Test</AccordionItem>
                        <AccordionItem title="title">Test</AccordionItem>
                    </Accordion>
                </Col>
            </Row>
            <Title as="h3">Skiplinks</Title>
            <Row>
                <Col>
                    <Skiplinks>
                        <SkiplinkItem href="#">Accéder au contenu</SkiplinkItem>
                        <SkiplinkItem href="#">Accéder au menu</SkiplinkItem>
                        <SkiplinkItem href="#">Accéder à la recherche</SkiplinkItem>
                        <SkiplinkItem href="#">Accéder au footer</SkiplinkItem>
                    </Skiplinks>
                </Col>
            </Row>
            <Title as="h3">Footer</Title>
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
