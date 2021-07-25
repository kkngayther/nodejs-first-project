
class SiteController {

    // [GET] / home
    index(req, res){
        res.render('home');
    }

    // [GET] /news
    news(req, res){
        res.render('news');
    }

    // [GET] /search
    search(req, res){
        res.render('search');
    }
}

module.exports = new SiteController;