# -*- coding: utf-8 -*-
from openerp import http
from openerp.addons.website_hr_recruitment.controllers.main import website_hr_recruitment as Home
from openerp.http import request


class WebsiteHrRecruitment(Home):
    @http.route('/jobs/apply/<model("hr.job"):job>', type='http', auth="public", website=True)
    def jobs_apply(self, job):
        error = {}
        default = {}
        env = request.env(context=dict(request.env.context, show_address=True, no_tag_br=True))

        State = env['res.country.state']
        Country = env['res.country']
        countries_ = Country.search([]).ids
        countries = Country.sudo().browse(countries_)
        states_ = State.search([]).ids
        states = State.sudo().browse(states_)

        if 'website_hr_recruitment_error' in request.session:
            error = request.session.pop('website_hr_recruitment_error')
            default = request.session.pop('website_hr_recruitment_default')
        return request.render("website_hr_recruitment.apply", {
            'job': job,
            'error': error,
            'default': default,
            'countries': countries,
            'states': states,
        })
