import Col from './components/foundation/grid/Col';
import Row from './components/foundation/grid/Row';
import Container from './components/foundation/grid/Container';
import Icon from './components/foundation/icon/index';
import Text from './components/foundation/typography/Text/index';
import Title from './components/foundation/typography/Title/index';
import AltTitle from './components/foundation/typography/AltTitle/index';
import { Accordion, AccordionItem } from './components/interface/Accordion/index';
import Alert from './components/interface/Alert/index';
import { Badge, BadgeGroup } from './components/interface/Badge/index';
import { Breadcrumb, BreadcrumbItem } from './components/interface/Breadcrumb/index';
import { Button, ButtonGroup } from './components/interface/Button/index';
import { Share, ShareButton } from './components/interface/Share/index';
import { Download, DownloadGroup } from './components/interface/Download/index';
import { Callout, CalloutTitle, CalloutText } from './components/interface/Callout/index';
import {
  Card, CardDescription, CardDetail, CardImage, CardTitle, CardHeader, CardFooter,
} from './components/interface/Card/index';
import { Checkbox, CheckboxGroup } from './components/interface/Checkbox/index';
import {
  Footer, FooterOperator, FooterLink, FooterBody, FooterBodyItem, FooterBottom, FooterCopy,
  FooterPartners, FooterPartnersLogo, FooterPartnersTitle, FooterTop, FooterTopCategory,
} from './components/interface/Footer/index';
import {
  Header, HeaderOperator, HeaderNav, HeaderBody, NavItem, NavSubItem,
  MegaNavItem, MegaNavSubItem, Service, Tool, ToolItem, ToolItemGroup,
} from './components/interface/Header/index';
import Highlight from './components/interface/Highlight/index';
import Notice from './components/interface/Notice/index';
import Link from './components/interface/Link/index';
import Logo from './components/interface/Logo/index';
import MediaImage from './components/foundation/media/MediaImage/index';
import MediaVideo from './components/foundation/media/MediaVideo/index';
import {
  Modal, ModalClose, ModalContent, ModalFooter, ModalTitle,
} from './components/interface/Modal/index';
import Pagination from './components/interface/Pagination/index';
import { Radio, RadioGroup } from './components/interface/Radio/index';
import SearchBar from './components/interface/SearchBar/index';
import Stepper from './components/interface/Stepper/index';
import { Select, SearchableSelect } from './components/interface/Select/index';
import { SideMenu, SideMenuLink, SideMenuItem } from './components/interface/SideMenu/index';
import { Skiplinks, SkiplinkItem } from './components/interface/Skiplinks/index';
import { Summary, SummaryItem } from './components/interface/Summary/index';
import { Table, SimpleTable } from './components/interface/Table/index';
import { Tabs, Tab } from './components/interface/Tabs/index';
import { Tag, TagGroup } from './components/interface/Tag/index';
import TextInput from './components/interface/TextInput/index';
import { Tile, TileImage, TileBody } from './components/interface/Tile/index';
import Toggle from './components/interface/Toggle/index';
import File from './components/interface/File/index';
import ConsentManager from './components/interface/ConsentManager/ConsentManager';
import ConsentService from './components/interface/ConsentManager/ConsentService';
import SwitchTheme from './components/interface/SwitchTheme/SwitchTheme';
import useTheme from './components/interface/SwitchTheme/useTheme';

const library = () => ({
  Accordion,
  AccordionItem,
  Alert,
  Badge,
  BadgeGroup,
  Logo,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Callout,
  CalloutTitle,
  CalloutText,
  ConsentManager,
  Download,
  DownloadGroup,
  Link,
  Card,
  CardDescription,
  CardDetail,
  CardHeader,
  CardFooter,
  CardImage,
  CardTitle,
  Checkbox,
  CheckboxGroup,
  Col,
  ConsentService,
  Row,
  Container,
  Icon,
  Text,
  Title,
  AltTitle,
  Footer,
  FooterTopCategory,
  FooterBody,
  FooterOperator,
  FooterBodyItem,
  FooterBottom,
  FooterLink,
  FooterCopy,
  FooterPartners,
  FooterTop,
  FooterPartnersTitle,
  FooterPartnersLogo,
  HeaderNav,
  NavSubItem,
  NavItem,
  MegaNavItem,
  MegaNavSubItem,
  Service,
  ToolItemGroup,
  Tool,
  Header,
  HeaderOperator,
  HeaderBody,
  ToolItem,
  Highlight,
  MediaVideo,
  MediaImage,
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalTitle,
  Notice,
  Pagination,
  Radio,
  RadioGroup,
  Share,
  ShareButton,
  SearchBar,
  Select,
  SearchableSelect,
  SideMenu,
  SideMenuItem,
  SideMenuLink,
  Skiplinks,
  SkiplinkItem,
  Stepper,
  Summary,
  SummaryItem,
  Table,
  SimpleTable,
  Tab,
  Tabs,
  Tag,
  TagGroup,
  TextInput,
  SwitchTheme,
  Tile,
  TileBody,
  TileImage,
  Toggle,
  useTheme,
  File,
});
export default library();
