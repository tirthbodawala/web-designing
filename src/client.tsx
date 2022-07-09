import ClientHandler from '@pawjs/pawjs/src/client/handler';
import { trackPageView } from '@utils/tracker';
import './resources/css/style.scss';

export default class Client {
  clientHandler: null | ClientHandler = null;

  trackLocationChange() {
    if (!this.clientHandler) return false;
    this.clientHandler.hooks.postMetaUpdate.tapPromise(
      'TrackPageView',
      async () => {
        window.scrollTo(0, 0);
        // Go with Google analytics
        // The below works
        trackPageView();
      },
    );
    this.clientHandler.hooks.renderComplete.tap(
      'TrackInitialPageView',
      () => {
        trackPageView();
      },
    );
    return true;
  }

  disableHTMLSmoothScroll() {
    const HTMLTag = document.querySelector('html');
    if (!HTMLTag?.classList.contains('no-smooth-scroll')) {
      HTMLTag?.classList.add('no-smooth-scroll');
    }
  }

  async apply(clientHandler: ClientHandler) {
    this.clientHandler = clientHandler;
    this.trackLocationChange();
    this.disableHTMLSmoothScroll();
  }
}
