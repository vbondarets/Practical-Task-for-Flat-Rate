import Page from './page.js';


class GetTickets extends Page {
   
    public get Message () {
        return $('pre');
    }

    public openCorrect () {
        return super.open('api/tickets/1195');
    }
    public openIncorrect () {
        return super.open('api/tickets/9999');
    }
}

export default new GetTickets();
