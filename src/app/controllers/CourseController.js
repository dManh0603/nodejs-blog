const Course = require('../models/Course');
const { mongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /courses/:slug
    show(req, res) {

        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course)});
            })
            .catch(e => next(e))
    }
}

module.exports = new SiteController;