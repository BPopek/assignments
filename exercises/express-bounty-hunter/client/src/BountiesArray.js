const uuid = require('uuid/v4')

const bounties = [
    {
        "firstName": "Darth",
        "lastName": "Vader",
        "living": true,
        "bountyAmount": "1000",
        "typePerson": "Sith",
        "_id": uuid()
    },
    {
        "firstName": "Darth",
        "lastName": "Maul",
        "living": true,
        "bountyAmount": "800",
        "typePerson": "Sith",
        "_id": uuid()
    },
    {
        "firstName": "Obi-Wan",
        "lastName": "Kenobi",
        "living": true,
        "bountyAmount": "250",
        "typePerson": "Jedi",
        "_id": uuid()
    },
    {
        "firstName": "Anakin",
        "lastName": "Skywalker",
        "living": true,
        "bountyAmount": "100",
        "typePerson": "Jedi",
        "_id": uuid()
    },
    {
        "firstName": "Rey",
        "lastName": "",
        "living": true,
        "bountyAmount": "50",
        "typePerson": "Jedi",
        "_id": uuid()
    }
]

export default bounties;