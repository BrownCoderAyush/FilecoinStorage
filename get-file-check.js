import { Web3Storage } from 'web3.storage'

function getAccessToken () {
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERCZUFDMGY1NUE2N0QxYUMwRDA4MjU2MmEzMTk3Njg1REQ1N0UyMzQiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2ODE1NjI1MjgyODgsIm5hbWUiOiJ0ZXN0U3RvcmFnZSJ9.2qBqzOmaEBSP66PBI9-LRRiqCN7-nJVQjY-zNg29ALc"
}

function makeStorageClient () {
  return new Web3Storage({ token: getAccessToken() })
}

async function retrieve (cid) {
    const client = makeStorageClient()
    const res = await client.get(cid)
    console.log(`Got a response! [${res.status}] ${res.statusText}`)
    if (!res.ok) {
      throw new Error(`failed to get ${cid}`)
    }
    const files = await res.files()
    for (const file of files) {
        
        console.log(`${file.cid} -- ${file.path} -- ${file.name}`)
        console.log(`https://${file.cid}.ipfs.dweb.link`);
    }
    // request succeeded! do something with the response object here...
}

retrieve("bafybeibzye6636khswhg3ntffyuys5zlzkwilcl7qfrimrqle2qk65s7uu");