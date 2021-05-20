import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer';
import MediaVideo from '../index';

describe('<MediaVideo />', () => {
  it('renders correctly', () => {
    const component = renderer
      .create(
        <MediaVideo
          legend="légende de l'image"
          size="sm"
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
            allowFullScreen=""
          />
        </MediaVideo>,
      )
      .toJSON();
    expect(component).toMatchSnapshot();
  });

  it('in document', () => {
    render(
      <MediaVideo
        legend="légende de l'image"
        size="sm"
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
          allowFullScreen=""
        />
      </MediaVideo>,
    );
    const search = screen.getByTestId('video');
    expect(search).toBeInTheDocument();
  });
});
