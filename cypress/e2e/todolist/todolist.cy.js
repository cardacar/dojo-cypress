
describe('Todo List compiled', ()=> {
    beforeEach(()=>{
        cy.request('DELETE','http://localhost:8000/api/reset')
    })

    it('Page Initial Compiled', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Mi lista de tareas')
    })

    it('I can add Task', () => {
        cy.visit('http://localhost:3000')
        cy.get('#input-task')
            .type('Nueva Tarea')
        cy.get('#form-submit').click()
        cy.get('.label-task').should('contain','Nueva Tarea')
    })
})