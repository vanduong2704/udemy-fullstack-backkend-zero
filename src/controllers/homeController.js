const getHomepage = (req,res) =>{
    res.send('Hello World! & nodemon')
}

const getABC = (req,res) =>{
    res.send('check ABC')
}
const getvanduong2704 = (req, res) => {
    // res.send('Hello World!')
    res.render('sample.ejs')
}
module.exports = {
    getHomepage,
    getABC,
    getvanduong2704
}