import Main from '../pageobjects/main.page.js'

describe('Oppening main page', () => {
    it('should return "It\'s working !"', async () => {
        await Main.openCorrect()
        await expect(Main.Message).toBeExisting()
    })
    
})