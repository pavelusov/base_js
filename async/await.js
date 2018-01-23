async function getUser() {
    let id = {id: 1};
    return id;
}

async function main() {
    let user = await getUser();
    console.log(user)
}

main();

