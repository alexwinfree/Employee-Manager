module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/buggy/index.html')
    }, // beforeEach
    after: browser => {
        browser.end()
    },// after
    'UI test case': browser => {
        //https://dmutah.atlassian.net/browse/DEM-2
        browser.expect.element('span[class="titleText"').text.to.equal('Employee Manager')
        browser.expect.element('p[id="noEmployee"]').text.to.equal('No Employee Selected')
        browser.expect.element('li[name="employee1"]').text.to.equal('Bernice Ortiz')
        browser.expect.element('li[name="employee2"]').text.to.equal('Marnie Barnett')
        browser.expect.element('li[name="employee3"]').text.to.equal('Phillip Weaver')
        browser.expect.element('li[name="employee4"]').text.to.equal('Teresa Osborne')
        browser.expect.element('li[name="employee5"]').text.to.equal('Dollie Berry')
        browser.expect.element('li[name="employee6"]').text.to.equal('Harriett Williamson')
        browser.expect.element('li[name="employee7"]').text.to.equal('Ruby Estrada')
        browser.expect.element('li[name="employee8"]').text.to.equal('Lou White')
        browser.expect.element('li[name="employee9"]').text.to.equal('Eve Sparks')
        browser.expect.element('li[name="employee10"]').text.to.equal('Lois Brewer')

    },// UI
    //https://dmutah.atlassian.net/browse/DEM-9
    'Adding an employee': browser => {
    browser.click('li[name="addEmployee"]')
    browser.click('li[name="employee11"]')
    browser.click('input[name="nameEntry"]')
    browser.clearValue('input[name="nameEntry"]')
    browser.setValue('input[name="nameEntry"]','Steven')
    browser.click('input["name=phoneEntry"]')
    browser.clearValue('input[name="phoneEntry"]')
    browser.setValue('input[name="phoneEntry"]','1234567890')
    browser.click('input[name="titleEntry"]')
    browser.clearValue('input[name="titleEntry"]')
    browser.setValue('input[name="titleEntry"]','Janitor')
    browser.click('button[name="save"]')
    .expect.element('li[name="employee11"]').text.to.equal('Steven')
    browser.pause(5000)
    },// adding an employee
}// module