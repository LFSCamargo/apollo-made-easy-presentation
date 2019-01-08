// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  Image,
  Slide,
  Text,
  Layout,
  Link
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={1} fit caps lineHeight={1} textColor="quaternary">
            Apollo + React
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" fit bold>
            GraphQL made easy
          </Text>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout style={{
            display: 'flex',
            flexDirection: 'row'
          }}
          >
            <Image src="https://avatars0.githubusercontent.com/u/44933973?s=460&v=4" width={400} height={400} />
            <Layout style={{
              display: 'flex',
              flexDirection: 'column'
            }}
            >
              <Text textColor="quaternary" style={{ padding: 20 }}>LFSCamargo</Text>
              <Text textColor="tertiary" style={{ padding: 20 }}>@LXSLuizinho</Text>
              <Text textColor="quaternary" style={{ padding: 20 }}>Remote software engineer at Popstand Inc.</Text>
            </Layout>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          >
            <Image src="https://cdn-images-1.medium.com/max/1600/1*AeQPXrmgIPn-ceHj-WVKDA.png" style={{ marginBottom: 10 }} height={400} />
            <Heading size={3} textColor="tertiary">What's Our Challenge</Heading>
            <Text textColor="quaternary" style={{ padding: 20 }}>Make a simple app explaining the Apollo Client (Mutations and Queries) + React Native + Types</Text>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          >
            <Heading size={3} textColor="tertiary">Let's code!</Heading>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          >
            <Heading size={3} textColor="tertiary">Some Important Links</Heading>
            <Link href="https://www.apollographql.com/docs/react/" textColor="quaternary">Apollo Client React Documentation</Link>
            <Link href="https://www.typescriptlang.org/docs/home.html" textColor="quaternary">Typescript Docs</Link>
            <Link href="https://facebook.github.io/react-native/docs/getting-started.html" textColor="quaternary">React Native</Link>
          </Layout>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary">
          <Layout style={{
            display: 'flex',
            flexDirection: 'column'
          }}
          >
            <Heading textColor="tertiary">Thanks Everyone!</Heading>
          </Layout>
        </Slide>
      </Deck>
    );
  }
}
