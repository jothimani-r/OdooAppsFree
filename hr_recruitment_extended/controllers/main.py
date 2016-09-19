# -*- coding: utf-8 -*-
from openerp import http

# class HrOnlineJobs(http.Controller):
#     @http.route('/hr_recruitment_extended/hr_recruitment_extended/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/hr_recruitment_extended/hr_recruitment_extended/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('hr_recruitment_extended.listing', {
#             'root': '/hr_recruitment_extended/hr_recruitment_extended',
#             'objects': http.request.env['hr_recruitment_extended.hr_recruitment_extended'].search([]),
#         })

#     @http.route('/hr_recruitment_extended/hr_recruitment_extended/objects/<model("hr_recruitment_extended.hr_recruitment_extended"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('hr_recruitment_extended.object', {
#             'object': obj
#         })