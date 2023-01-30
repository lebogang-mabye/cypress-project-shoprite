/**
 * Part two: API Test
 */


describe('Test-T02-API', () => {

    it('Status check & write response to JSON file', () => {

        cy.request({
            method: 'GET',
            url: 'https://swapi.dev/api/people/'
        }).then((res) => {
            expect(res.status).to.eq(200)
            cy.writeFile('cypress/fixtures/peopleList.json', res.body) //Write the response to a file 
        })
    })

    it('R2-D2 skin colour Assertion', () => {

        cy.request('https://swapi.dev/api/people/')
            .its('body')
            .then((people) => {
                const r2d2 = people.results.find((person) => person.name === 'R2-D2');
                expect(r2d2.skin_color).to.equal('white, blue');
            });
    });
})

