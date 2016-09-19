# -*- coding:utf-8 -*-
from openerp import models, fields


class hr_employee(models.Model):
    _inherit = 'hr.employee'

    #   Personal details
    middlename = fields.Char("Name")
    lastname = fields.Char("Name")
    country_of_birth = fields.Char("Country of Birth")
    #   Permanent Address
    is_same_address = fields.Boolean("Same as Correspondence Address")
    street_ht = fields.Char("Street")
    street2_ht = fields.Char("Street")
    city_ht = fields.Char("City")
    state_id_ht = fields.Many2one('res.country.state', string="State")
    zip_ht = fields.Char("Zip")
    country_id_ht = fields.Many2one('res.country', string="Country")
    phone_ht = fields.Char("Phone")
    fax_ht = fields.Char("Fax")
    #   Previous Employment Verification
    ref_name = fields.Char("Referred by")
    ref_org = fields.Char("Organization")
    ref_rel = fields.Char("Relation")
    ref_contact = fields.Char("Contact details")
    #   family details
    fam_spouse = fields.Char("Name")
    fam_spouse_employer = fields.Char("Employer")
    fam_spouse_tel = fields.Char("Telephone.")
    fam_father = fields.Char("Father's Name")
    fam_father_date_of_birth = fields.Date("Date of Birth")
    fam_mother = fields.Char("Mother's Name")
    fam_mother_date_of_birth = fields.Date("Date of Birth")
    #   academic, experience, certifications, family histories
    academic_ids = fields.One2many('hr.academic', 'employee_id', 'Academic experiences', help="Academic experiences")
    experience_ids = fields.One2many('hr.experience', 'employee_id', ' Professional Experiences',
                                     help='Professional Experiences')
    certification_ids = fields.One2many('hr.certification', 'employee_id', 'Certifications', help="Certifications")
    fam_children_ids = fields.One2many('hr.employee.children', 'employee_id', "Children")
