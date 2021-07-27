const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {

    // [GET] / home
    index(req, res, next) {
        // Callback
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else {
        //         next(err);
        //     }
        // });

        // Promises
        Course.find({})
            .then(courses => {
                courses = multipleMongooseToObject(courses);
                res.render('home', {courses});
            })
            .catch(err => next(err));
        // res.render('home');
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;