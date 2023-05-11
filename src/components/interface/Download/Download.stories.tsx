import { Story } from '@storybook/react/types-6-0';
import Download, { DownloadProps } from './Download';
import DownloadGroup, { DownloadGroupProps } from './DownloadGroup';

export default {
  title: 'Téléchargement de fichier - Download ',
  component: Download,
  argTypes: {},
};

const Template: Story<DownloadProps> = (args) => <Download {...args} />;
const GroupTemplate: Story<DownloadGroupProps> = (arg) => <DownloadGroup {...arg} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Téléchargez le document',
  file: 'https://example.com/file.pdf',
  metaData: 'JPG – 61,88 ko',
};
Default.storyName = 'Lien de téléchargement';

export const MultipleDownload = GroupTemplate.bind({});
MultipleDownload.args = {
  children: [
    <Download
      label="Téléchargez le document"
      file="https://example.com/file.pdf"
      metaData="PNG – 70,88 ko"
    />,
    <Download
      label="Téléchargez le document"
      file="https://example.com/file.pdf"
      metaData="JPG – 1,88 ko"
    />,
    <Download
      label="Téléchargez le document"
      file="https://example.com/file.pdf"
      metaData="JPG – 61,88 ko"
    />,
  ]
  ,
};
MultipleDownload.storyName = 'Liste de liens de téléchargement';

export const DownloadCard = Template.bind({});
DownloadCard.args = {
  label: 'Le document',
  file: 'https://example.com/file.pdf',
  description: 'La bloc de téléchargement peut être de largeur 4, 6 ou 8 colonnes. Pour cela, le composant Download doit être à l\'intérieur d\'une Col.',
  metaData: 'JPG – 61,88 ko',
  asCard: true,
};
DownloadCard.storyName = 'Bloc de téléchargement';
