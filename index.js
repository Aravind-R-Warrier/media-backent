const JSONserver=require('json-server')
const mpServer=JSONserver.create()
const router=JSONserver.router("db.json")
const middleware=JSONserver.defaults()

const port=3000 || process.env.PORT

mpServer.use(middleware)
mpServer.use(router)

mpServer.listen(port,()=>{
    console.log(`hellow your server is running${port}`)
})