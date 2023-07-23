import TicketPage from '../pageobjects/ticket.page.js'

describe('Returning tickets list or error', () => {
    it('should return list of tickets', async () => {
        await TicketPage.openCorrect()
        await expect(TicketPage.Message).toBeExisting()
    })
    it('should return error', async () => {
        await TicketPage.openIncorrect()

        await expect(TicketPage.Message).toBeExisting()
    })
})


