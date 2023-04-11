

async function getFileContent(){

    const response = await fetch('https://bafybeigptb6vtjo43kzpb6xmcwvqsdugj7rct434susfnzl4tvqxswnyka.ipfs.dweb.link/check.txt');
    const data = await response.text();
    console.log(data);

}


getFileContent();