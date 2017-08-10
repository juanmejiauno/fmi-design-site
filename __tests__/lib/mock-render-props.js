import match from 'react-router/lib/match';
import Routes from 'routes';

function mockRenderProps(client, location) {
  return new Promise((resolve, reject) => {
    match({ routes: Routes(client), location }, (e, r, renderProps) => {
      if (renderProps) resolve(renderProps);
      else reject();
    });
  });
}

export default mockRenderProps;
