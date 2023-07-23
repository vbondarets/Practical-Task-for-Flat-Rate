import Page from './page.js';


class Main extends Page {
   
    public get Message () {
        return $('body');
    }

    public openCorrect () {
        return super.open('');
    }
}

export default new Main();