const users = [
    {name: 'Luffy', isDF: true},
    {name: 'Zoro', isDF: false},
    {name: 'Sanji', isDF: false},
    {name: 'Jinbe', isDF: false},
    {name: 'Franky', isDF: false},
    {name: 'Robin', isDF: true},
    {name: 'Chopper', isDF: true},
    {name: 'Brook', isDF: true},
    {name: 'Nami', isDF: false},
    {name: 'Usopp', isDF: false},
]

const getDFUsers = () => {
    return users.filter(user => user.isDF)
}

export {getDFUsers, users as default}