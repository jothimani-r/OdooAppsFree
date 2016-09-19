# -*- coding: utf-8 -*-

from openerp import models, fields, api


class hr_applicant(models.Model):
    _inherit = 'hr.applicant'

    #   Applicant Information
    middlename = fields.Char('Middle Name')
    lastname = fields.Char('Last Name')
    gender = fields.Selection([('male', 'Male'), ('female', 'Female')], string="Gender")
    birthday = fields.Date('Date of Birth')
    place_of_birth = fields.Boolean('Place of Birth')
    country_of_birth = fields.Char('Country of Birth')
    marital = fields.Selection(
        [('single', 'Single'), ('married', 'Married'), ('widower', 'Widower'), ('divorced', 'Divorced')],
        'Marital Status')
    #   Citizenship & Other Info
    identification_id = fields.Char('Identification No')
    passport_id = fields.Char('Passport No')
    #   Permanent Address
    is_same_address = fields.Boolean('Same as Correspondence Address')
    street_ht = fields.Char()
    street2_ht = fields.Char()
    city_ht = fields.Char()
    zip_ht = fields.Char()
    state_id_ht = fields.Many2one('res.country.state')
    country_id_ht = fields.Many2one('res.country')
    phone_ht = fields.Char('Home Phone')
    fax_ht = fields.Char('Fax')
    #   Job reference
    ref_name = fields.Char('Referred by')
    ref_org = fields.Char('Organization')
    ref_rel = fields.Char('Relation')
    ref_contact = fields.Char('Contact Details')
    #   academic, experience, certifications histories
    academic_ids = fields.One2many('hr.academic', 'applicant_id', 'Academic experiences', help="Academic experiences")
    experience_ids = fields.One2many('hr.experience', 'applicant_id', ' Professional Experiences',
                                     help='Professional Experiences')
    certification_ids = fields.One2many('hr.certification', 'applicant_id', 'Certifications', help="Certifications")
