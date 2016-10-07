# -*- coding: utf-8 -*-
import base64
from datetime import datetime

from openerp import SUPERUSER_ID
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

    def _get_applicant_char_fields(self):
        # 'partner_mobile', 'email_from',
        return ['middlename', 'lastname', 'gender', 'place_of_birth', 'country_of_birth', 'marital',
                'partner_mobile', 'email_from', 'ref_name', 'ref_org', 'ref_rel', 'ref_contact', 'is_same_address',
                'street_ht', 'street2_ht', 'city_ht', 'zip_ht', 'phone_ht', 'fax_ht']

    def _get_applicant_boolean_fields(self):
        return ['is_same_address']

    def _get_applicant_relational_fields(self):
        return ['department_id', 'job_id', 'country_id_ht', 'state_id_ht']

    def _get_applicant_files_fields(self):
        return ['ufile']

    def _get_residential_address(self, post):
        address = {
            'name': post.get('firstname'),
            'street': post.get('street'),
            'street2': post.get('street2') or '',
            'city': post.get('city'),
            'zip': post.get('zip'),
            'state_id': post.get('state_id'),
            'country_id': post.get('country_id'),
            'mobile': post.get('partner_mobile'),
            'email': post.get('email_from'),
            'customer': False,
        }
        return address

    def _get_academic_values(self, post):
        index = int(post.get('eduindex'))
        values = []
        for i in range(index + 1):
            if not post.get('edu[' + str(i) + '].name') and not post.get(
                                    'edu[' + str(i) + '].organization') and not post.get(
                                'edu[' + str(i) + '].location'):
                continue
            val = {
                'name': post.get('edu[' + str(i) + '].name') or False,
                'study_field': post.get('edu[' + str(i) + '].study_field') or False,
                'organization': post.get('edu[' + str(i) + '].organization') or False,
                'location': post.get('edu[' + str(i) + '].location') or False,
                'start_date': post.get('edu[' + str(i) + '].start_date') or False,
                'is_still': post.get('edu[' + str(i) + '].is_still') or False,
                'end_date': post.get('edu[' + str(i) + '].end_date') or False,
                'grade': post.get('edu[' + str(i) + '].grade') or False
            }
            values.append((0, 0, val))
        return values

    def _get_certification_values(self, post):
        index = int(post.get('cerindex'))
        values = []
        for i in range(index + 1):
            if not post.get('cer[' + str(i) + '].name'):
                continue
            val = {
                'name': post.get('cer[' + str(i) + '].name') or '',
                'certification': post.get('cer[' + str(i) + '].certification') or False,
                'organization': post.get('cer[' + str(i) + '].organization') or False,
                'location': post.get('cer[' + str(i) + '].location') or False,
                'start_date': post.get('cer[' + str(i) + '].start_date') or False,
                'is_still': post.get('cer[' + str(i) + '].is_still') or False,
                'end_date': post.get('cer[' + str(i) + '].end_date') or False,
            }
            values.append((0, 0, val))
        return values

    def _get_experience_values(self, post):
        index = int(post.get('empindex'))
        values = []
        for i in range(index + 1):
            if not post.get('emp[' + str(i) + '].name') and not post.get(
                                    'emp[' + str(i) + '].organization') and not post.get('emp[' + str(i) + '].type'):
                continue
            val = {
                'name': post.get('emp[' + str(i) + '].name'),
                'organization': post.get('emp[' + str(i) + '].organization'),
                'location': post.get('emp[' + str(i) + '].location') or False,
                'start_date': post.get('emp[' + str(i) + '].start_date') or False,
                'is_still': post.get('emp[' + str(i) + '].is_still') or False,
                'end_date': post.get('emp[' + str(i) + '].end_date') or False,
                'notice_period': post.get('emp[' + str(i) + '].notice_period') or '',
                'type': post.get('emp[' + str(i) + '].type'),
                'referee_name': post.get('emp[' + str(i) + '].referee_name') or False,
                'referee_position': post.get('emp[' + str(i) + '].referee_position') or False,
                'referee_contact': post.get('emp[' + str(i) + '].referee_contact') or False,
            }
            values.append((0, 0, val))
        return values

    def _format_date(self, date):
        if date:
            return datetime.strptime(date, "%Y-%m-%d").isoformat(' ')
        else:
            return False

    @http.route('/jobs/thankyou', methods=['POST'], type='http', auth="public", website=True)
    def jobs_thankyou(self, **post):
        # public user can't create applicants
        env = request.env(user=SUPERUSER_ID)
        value = {
            'source_id': env.ref('hr_recruitment.source_website_company').id,
            'name': '%s\'s Application' % post.get('firstname'),
        }

        for f in self._get_applicant_boolean_fields():
            if post.get(f) == 'on':
                value[f] = True

        for f in self._get_applicant_char_fields():
            value[f] = post.get(f)

        for f in self._get_applicant_relational_fields():
            value[f] = int(post.get(f) or False)

        address = self._get_residential_address(post)
        value['partner_id'] = env['res.partner'].create(address).id
        value['academic_ids'] = self._get_academic_values(post)
        value['certification_ids'] = self._get_certification_values(post)
        value['experience_ids'] = self._get_experience_values(post)

        value['birthday'] = self._format_date(post.get('birthday') or False)
        applicant_id = env['hr.applicant'].create(value).id

        for field_name in self._get_applicant_files_fields():
            if post[field_name]:
                attachment_value = {
                    'name': post[field_name].filename,
                    'res_name': value['name'],
                    'res_model': 'hr.applicant',
                    'res_id': applicant_id,
                    'datas': base64.encodestring(post[field_name].read()),
                    'datas_fname': post[field_name].filename,
                }
                env['ir.attachment'].create(attachment_value)
        return request.render("website_hr_recruitment.thankyou", {})
