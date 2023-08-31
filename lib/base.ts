const env = process.env.NODE_ENV
let BASE_URL="http://localhost:8100/"
if (env == "production"){
    BASE_URL="https://crypticapi.zubairmh.xyz/"
}
export {
    BASE_URL
}