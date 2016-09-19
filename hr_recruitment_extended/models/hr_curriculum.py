# -*- coding: utf-8 -*-
from openerp import models, fields


class hr_curriculum(models.Model):
    _name = 'hr.curriculum'
    _description = "Employee's Curriculum"

    name = fields.Char('Name', required=True, )
    start_date = fields.Date('Start date')
    is_still = fields.Boolean()
    end_date = fields.Date('End date')
    grade = fields.Char('Grade')
    organization = fields.Char('Organization',
                               help="Employer, School, University, Organization, Institution, Company, Certification Authority")
    location = fields.Char('Location', help="Location")
    description = fields.Text('Description')
    employee_id = fields.Many2one('hr.employee', string='Employee')
    applicant_id = fields.Many2one('hr.applicant', string='Application')
